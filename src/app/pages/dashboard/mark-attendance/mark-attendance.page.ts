import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import * as blazeface from '@tensorflow-models/blazeface';
import '@tensorflow/tfjs';

// import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { FaceDetectionService } from 'src/app/services/face-detection.service';



@Component({
  selector: 'app-mark-attendance',
  templateUrl: './mark-attendance.page.html',
  styleUrls: ['./mark-attendance.page.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class MarkAttendancePage implements OnInit {
  // @ViewChild('videoElement', { static: false }) videoElement!: ElementRef;
  // @ViewChild('canvasElement', { static: false }) canvasElement!: ElementRef;

  // blinkCount = 0;
  // isBlinkDetected = false;
  // capturedImage: string | null = null;
  // model: any;


  @ViewChild('videoElement', { static: false }) videoElement!: ElementRef;
  imageCaptured: string | null = null;
  blinkDetected = false;



  constructor(private faceService: FaceDetectionService) {}
 

  async ngOnInit() {
    await this.faceService.loadModel();
    this.startCamera();
  }

  async startCamera() {
    const video = this.videoElement.nativeElement as HTMLVideoElement;
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });

    video.srcObject = stream;
    video.play();

    this.detectBlinkLoop(video);
  }

  async detectBlinkLoop(video: HTMLVideoElement) {
    setInterval(async () => {
      const blink = await this.faceService.detectBlink(video);
      if (blink && !this.blinkDetected) {
        this.blinkDetected = true;
        this.captureImage(video);
      }
    }, 500);
  }

  async captureImage(video: HTMLVideoElement) {
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      this.imageCaptured = canvas.toDataURL('image/jpeg'); // Convert to Base64
    }
  }

  // async ngOnInit() {}

  // async ngAfterViewInit() {
  //   await this.loadModel();
  //   await this.setupCamera();
  //   setTimeout(() => {
  //     this.detectBlinks();
  //   }, 2000); // 🔹 Small delay to ensure camera is ready
  // }

  // /** 🔹 Load BlazeFace Model */
  // async loadModel() {
  //   this.model = await blazeface.load();
  //   console.log("✅ BlazeFace Model Loaded!");
  // }

  // /** 🔹 Set up camera and stream to video element */
  // async setupCamera() {
  //   const video = this.videoElement.nativeElement as HTMLVideoElement;

  //   try {
  //     const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } });
  //     video.srcObject = stream;

  //     await new Promise((resolve) => {
  //       video.onloadedmetadata = () => {
  //         video.play();
  //         resolve(true);
  //       };
  //     });

  //     console.log("✅ Camera Started");
  //   } catch (err) {
  //     console.error("❌ Camera Error:", err);
  //   }
  // }

  // /** 🔹 Detect blink using BlazeFace model */
  // async detectBlinks() {
  //   const video = this.videoElement.nativeElement as HTMLVideoElement;

  //   setInterval(async () => {
  //     if (!video || video.readyState !== 4 || !this.model) return;

  //     let predictions: any = await this.model.estimateFaces(video, false);
  //     if (predictions.length > 0) {
  //       console.log("✅ Face Detected!");

  //       const leftEye = predictions[0]?.annotations.leftEyeUpper0;
  //       const rightEye = predictions[0]?.annotations.rightEyeUpper0;

  //       console.log("👁 Left Eye Points:", leftEye);
  //       console.log("👁 Right Eye Points:", rightEye);

  //       if (leftEye && rightEye) {
  //         if (this.isEyeClosed(leftEye) && this.isEyeClosed(rightEye)) {
  //           this.blinkCount++;
  //           console.log(`🔹 Blink Count: ${this.blinkCount}`);

  //           if (this.blinkCount === 2 && !this.isBlinkDetected) {
  //             this.isBlinkDetected = true;
  //             console.log("✅ Blink detected! Capturing image...");
  //             this.captureImage();

  //             // Reset blink count after 2 sec
  //             setTimeout(() => {
  //               this.blinkCount = 0;
  //               this.isBlinkDetected = false;
  //             }, 2000);
  //           }
  //         }
  //       }
  //     }
  //   }, 500);
  // }

  // /** 🔹 Check if the eye is closed based on aspect ratio */
  // isEyeClosed(eyePoints: any[]): boolean {
  //   if (!eyePoints || eyePoints.length < 5) return false;

  //   const eyeHeight = Math.abs(eyePoints[4][1] - eyePoints[0][1]); // Vertical distance
  //   const eyeWidth = Math.abs(eyePoints[3][0] - eyePoints[1][0]); // Horizontal distance
  //   const eyeAspectRatio = eyeHeight / eyeWidth; // Eye Aspect Ratio (EAR)

  //   console.log("👁 EAR:", eyeAspectRatio);
  //   return eyeAspectRatio < 0.2; // **Threshold for closed eye**
  // }

  // /** 🔹 Capture image from video when blink is detected */
  // captureImage() {
  //   const canvas = this.canvasElement.nativeElement as HTMLCanvasElement;
  //   const video = this.videoElement.nativeElement as HTMLVideoElement;
  //   const ctx = canvas.getContext('2d');

  //   // 🔹 Ensure video is fully loaded
  //   if (!video.videoWidth || !video.videoHeight) {
  //     console.error("❌ Video dimensions not loaded yet!");
  //     return;
  //   }

  //   if (ctx) {
  //     // 🔹 Set canvas size same as video
  //     canvas.width = video.videoWidth;
  //     canvas.height = video.videoHeight;
  //     ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  //     // 🔹 Convert to Base64 Image
  //     this.capturedImage = canvas.toDataURL('image/png');
  //     console.log("✅ Image Captured!", this.capturedImage);
  //   }
  // }

  // /** 🔹 Proceed after capturing image */
  // proceed() {
  //   console.log("🚀 Proceeding with captured image:", this.capturedImage);
  // }
}
