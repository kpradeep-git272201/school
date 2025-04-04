import { Injectable } from '@angular/core';
import * as tf from '@tensorflow/tfjs';
import * as faceLandmarksDetection from '@tensorflow-models/face-landmarks-detection';

@Injectable({
  providedIn: 'root'
})
export class FaceDetectionService {

  
  model: any;
  blinkCounter = 0;
  lastBlinkTime = 0;


  constructor() { }


  async loadModel() {
    this.model = await faceLandmarksDetection.createDetector(
      faceLandmarksDetection.SupportedModels.MediaPipeFaceMesh,
      {
        runtime: 'tfjs',
        refineLandmarks: false
      }
    );
  }

  async detectBlink(videoElement: HTMLVideoElement): Promise<boolean> {
    if (!this.model) return false;

    const faces = await this.model.estimateFaces(videoElement);
    if (faces.length === 0) return false;

    const face = faces[0];
    const leftEyeTop = face.keypoints[159];  // Upper eyelid of left eye
    const leftEyeBottom = face.keypoints[145];  // Lower eyelid of left eye
    const rightEyeTop = face.keypoints[386];  // Upper eyelid of right eye
    const rightEyeBottom = face.keypoints[374];  // Lower eyelid of right eye

    // Calculate eye openness
    const leftEyeOpen = Math.abs(leftEyeTop.y - leftEyeBottom.y);
    const rightEyeOpen = Math.abs(rightEyeTop.y - rightEyeBottom.y);

    const eyeClosedThreshold = 5; // Adjust based on testing
    const isBlinking = leftEyeOpen < eyeClosedThreshold && rightEyeOpen < eyeClosedThreshold;

    if (isBlinking) {
      const currentTime = new Date().getTime();
      if (currentTime - this.lastBlinkTime > 500) {  // Detect separate blinks
        this.blinkCounter++;
        this.lastBlinkTime = currentTime;
      }
    }

    return this.blinkCounter >= 2; // Capture after 2 blinks
  }
}
