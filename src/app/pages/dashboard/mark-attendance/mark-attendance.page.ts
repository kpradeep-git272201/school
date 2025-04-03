import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewChild, ElementRef } from '@angular/core';
import * as blazeface from '@tensorflow-models/blazeface';
import '@tensorflow/tfjs';
import { Camera, CameraResultType, CameraSource, CameraDirection } from '@capacitor/camera';
import * as tf from '@tensorflow/tfjs';


@Component({
  selector: 'app-mark-attendance',
  templateUrl: './mark-attendance.page.html',
  styleUrls: ['./mark-attendance.page.scss'],
  standalone: true,
  imports: [SharedModule]

})
export class MarkAttendancePage implements OnInit {
  @ViewChild('video', { static: false }) videoElement!: ElementRef;
  @ViewChild('canvas', { static: false }) canvasElement!: ElementRef;
  blinkCount = 0;
  isBlinkDetected = false;


  capturedImage: string | null = null;


  constructor() { }


  ngOnInit() {
    //  this.openCamera();
  }

  /*********************************************************************************************************************************** */


  async ngAfterViewInit() {
    await this.setupCamera();
    this.detectBlinks();
  }

  async setupCamera() {
    const video = this.videoElement.nativeElement as HTMLVideoElement;

    navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } })
      .then(stream => video.srcObject = stream)
      .catch(err => console.error("Camera Error:", err));
  }

  async detectBlinks() {
    const model = await blazeface.load();
    const video = this.videoElement.nativeElement as HTMLVideoElement;

    setInterval(async () => {
      if (!video || video.readyState !== 4) return;

      let predictions: any = await model.estimateFaces(video, false);
      if (predictions.length > 0) {
        const leftEye = predictions[0]?.annotations.leftEyeUpper0;
        const rightEye = predictions[0]?.annotations.rightEyeUpper0;

        if (this.isEyeClosed(leftEye) && this.isEyeClosed(rightEye)) {
          this.blinkCount++;
          console.log(`Blink Count: ${this.blinkCount}`);

          if (this.blinkCount === 2) {
            this.isBlinkDetected = true;
            console.log("Blink detected! Capturing image...");
            this.captureImage(); 
          }
        }
      }
    }, 500);
  }

  isEyeClosed(eyePoints: any[]): boolean {
    const eyeHeight = Math.abs(eyePoints[4][1] - eyePoints[0][1]);
    return eyeHeight < 5; 
  }

  captureImage() {
    const canvas = this.canvasElement.nativeElement as HTMLCanvasElement;
    const video = this.videoElement.nativeElement as HTMLVideoElement;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      console.log("Image Captured!");
    }
  }
  async openCamera() {
    try {
      const image = await Camera.getPhoto({
        source: CameraSource.Camera,
        resultType: CameraResultType.Uri,
        direction: CameraDirection.Front,
        quality: 90,
      });

      console.log("Image Captured:", image.webPath);
      this.capturedImage = image.webPath;
    } catch (error) {
      console.error("Camera Error:", error);
    }
  }

  /*********************************************************************************************************************************** */

}
