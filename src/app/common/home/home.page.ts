import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
