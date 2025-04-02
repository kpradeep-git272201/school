import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-change-pin',
  templateUrl: './change-pin.page.html',
  styleUrls: ['./change-pin.page.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class ChangePinPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
