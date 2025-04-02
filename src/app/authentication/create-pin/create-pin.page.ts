import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-create-pin',
  templateUrl: './create-pin.page.html',
  styleUrls: ['./create-pin.page.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class CreatePinPage implements OnInit {

  pin: string = '';
  pinLength = 4;
  pinArray = [false, false, false, false]; // 4 dots for PIN
  numberPad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [0]
  ];
  constructor(private router: Router) {}


  ngOnInit(): void {
   
  }

  enterPin(num: number) {
    if (this.pin.length < 4) {
      this.pin += num;
      this.pinArray[this.pin.length - 1] = true;

      if (this.pin.length === 4) {
        setTimeout(() => {
          console.log('Entered PIN:', this.pin);
          this.router.navigate(['/apps']) 
        }, 500);
      }
    }
  }

  getLogin() {
    if (this.pin.length === this.pinLength) {
      console.log('PIN Entered:', this.pin);
      this.router.navigate(['/apps'])
    } else {
      alert('Please enter a full PIN');
    }
  }

  isPinComplete(): boolean {
    return this.pin.length === this.pinLength;
  }
  removePin() {
    if (this.pin.length > 0) {
      this.pinArray[this.pin.length - 1] = false;
      this.pin = this.pin.slice(0, -1);
    }
  }



}
