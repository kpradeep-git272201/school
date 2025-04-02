import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.page.html',
  styleUrls: ['./student-profile.page.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class StudentProfilePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
