import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { IonCardSubtitle } from "@ionic/angular/standalone";

@Component({
  selector: 'app-homework',
  templateUrl: './homework.page.html',
  styleUrls: ['./homework.page.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class HomeworkPage implements OnInit {
  selectedTab: string = 'pending';
  pendingHomework: any=[];
  completedHomework: any=[];
  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.pendingHomework=this.studentService.getPendingHomework();
    this.completedHomework=this.studentService.getCompleteHomework();
  }

}
