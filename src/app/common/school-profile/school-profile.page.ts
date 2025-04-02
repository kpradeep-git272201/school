import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-school-profile',
  templateUrl: './school-profile.page.html',
  styleUrls: ['./school-profile.page.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class SchoolProfilePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
