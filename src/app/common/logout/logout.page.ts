import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class LogoutPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
