import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewChild, ElementRef } from '@angular/core';
import * as blazeface from '@tensorflow-models/blazeface';
import '@tensorflow/tfjs';
import Long from "long";

@Component({
  selector: 'app-mark-attendance',
  templateUrl: './mark-attendance.page.html',
  styleUrls: ['./mark-attendance.page.scss'],
  standalone: true,
  imports: [SharedModule]
  
})
export class MarkAttendancePage implements OnInit {
  // @ViewChild('video', { static: false }) videoElement!: ElementRef;
  // @ViewChild('canvas', { static: false }) canvasElement!: ElementRef;
  // blinkCount = 0;
  constructor() { }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  
  // async startCamera() {
  //   const video = this.videoElement.nativeElement as HTMLVideoElement;
  //   const canvas = this.canvasElement.nativeElement as HTMLCanvasElement;
  //   const ctx = canvas.getContext('2d')!;

  //   // Open Camera
  //   navigator.mediaDevices
  //     .getUserMedia({ video: { facingMode: 'user' } })
  //     .then((stream) => {
  //       video.srcObject = stream;
  //       video.play();
  //       this.detectBlink(video, ctx);
  //     })
  //     .catch((error) => console.error('Error accessing camera:', error));
  // }

  // async detectBlink(video: HTMLVideoElement, ctx: CanvasRenderingContext2D) {
  //   const model = await blazeface.load();

  //   setInterval(async () => {
  //     let predictions:any = await model.estimateFaces(video, false);
  //     if (predictions.length > 0) {
  //       const eye = predictions[0].landmarks.slice(0, 2); // Eye landmarks
  //       const eyeDistance = Math.abs(eye[0][1] - eye[1][1]);

  //       if (eyeDistance < 5) {
  //         this.blinkCount++;
  //         console.log('Blink Detected:', this.blinkCount);

  //         if (this.blinkCount >= 2) {
  //           this.captureImage(video, ctx);
  //           this.blinkCount = 0;
  //         }
  //       }
  //     }
  //   }, 300);
  // }

  // captureImage(video: HTMLVideoElement, ctx: CanvasRenderingContext2D) {
  //   ctx.drawImage(video, 0, 0, 300, 300);
  //   const base64Image = this.canvasElement.nativeElement.toDataURL('image/png');

  //   // Send Image to Server
  //   this.sendImageToServer(base64Image);
  // }

  // async sendImageToServer(base64Image: string) {
  //   const response = await fetch('https://yourserver.com/api/upload', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ image: base64Image }),
  //   });

  //   if (response.ok) {
  //     console.log('Image uploaded successfully');
  //   } else {
  //     console.error('Failed to upload image');
  //   }
  // }
 
}
