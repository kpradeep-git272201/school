import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { logoIonic, homeOutline, documentOutline, bookOutline, cardOutline, documentTextOutline, newspaperOutline, starOutline, megaphoneOutline, schoolOutline, cashOutline, checkboxOutline, chatboxEllipsesOutline, mailOutline, notificationsOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { Router } from '@angular/router';
import { IconService } from 'src/app/services/icon.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class DashboardPage implements OnInit {

  constructor(private router: Router, private iconService: IconService) { 
    addIcons({notificationsOutline,homeOutline,documentOutline,bookOutline,cardOutline,documentTextOutline,newspaperOutline,starOutline,megaphoneOutline,schoolOutline,cashOutline,checkboxOutline,chatboxEllipsesOutline,mailOutline,logoIonic});
  }

  ngOnInit() {
  }


  goToAttendance(){
    this.router.navigate(["/apps/attendance"]);
  }
  goToHomework(){
    this.router.navigate(["/apps/homework"]);
  }

  markAttendance(){
    this.router.navigate(["/apps/mark-attendance"]);
  }
}
