import { Component, OnInit } from '@angular/core';
import { IconService } from 'src/app/services/icon.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class AttendancePage implements OnInit {
  currentMonth: any;
  currentYear: any;
  weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  calendarDays: any[] = [];
  summary = {
    present: 16,
    absent: 1,
    leave: 0,
    holiday: 4,
    totalAttendance: 81,
    daysPresent: 76,
    annualPercentage: 93.83
  };

  constructor(private iconService: IconService) {
    const today = new Date();
    this.currentMonth = today.toLocaleString('default', { month: 'long' });
    this.currentYear = today.getFullYear();
    this.generateCalendar();
  }
  ngOnInit() {
    const today = new Date();
    this.currentMonth = today.getMonth();
    this.currentYear = today.getFullYear();
    this.generateCalendar();
  }


  generateCalendar() {
    this.calendarDays = [];
  
    // Get first day index and total days in the current month
    const firstDayIndex = new Date(this.currentYear, this.currentMonth, 1).getDay();
    const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
  
    // Fill the empty slots before the 1st of the month
    for (let i = 0; i < firstDayIndex; i++) {
      this.calendarDays.push({ 
        date: '', 
        isPresent: false, 
        isLeave: false, 
        isHoliday: false, 
        isAbsent: false,
        isSunday: false, 
        isSaturday: false
      });
    }
  
    // Generate the actual days in the calendar
    for (let i = 1; i <= daysInMonth; i++) {
      const currentDate = new Date(this.currentYear, this.currentMonth, i);
      const dayIndex = currentDate.getDay();
  
      this.calendarDays.push({ 
        date: i, 
        isPresent: false, 
        isLeave: false, 
        isAbsent: false,
        isHoliday: false, 
        isSunday: dayIndex === 0, // Sunday
        isSaturday: dayIndex === 6 // Saturday
      });
    }
  }

  getRandomStatus() {
    const statuses = ['present', 'absent', 'leave', 'holiday'];
    return statuses[Math.floor(Math.random() * statuses.length)];
  }

  getDayClass(day: any) {
    if(day.isSunday){
      return 'holiday';
    }
    if(day.isHoliday || day.date==17){
      return 'holiday';
    }
    if(day.isAbsent || day.date==23){
      return 'absent';
    }
    if(day.isLeave || day.date==26){
      return 'leave';
    }
    return "";
  }

  prevMonth() {
    if (this.currentMonth === 1) {
      this.currentMonth = 12;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.generateCalendar();
  }

  nextMonth() {
    if (this.currentMonth === 12) {
      this.currentMonth = 1;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.generateCalendar();
  }


}
