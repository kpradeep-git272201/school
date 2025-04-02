import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.page').then(m => m.DashboardPage)
  },
  {
    path: 'student-profile',
    loadComponent: () => import('./student-profile/student-profile.page').then(m => m.StudentProfilePage)
  },
  {
    path: 'change-pin',
    loadComponent: () => import('./change-pin/change-pin.page').then(m => m.ChangePinPage)
  },
  {
    path: 'school-profile',
    loadComponent: () => import('./school-profile/school-profile.page').then(m => m.SchoolProfilePage)
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about.page').then(m => m.AboutPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then(m => m.HomePage)
  },
  {
    path: 'attendance',
    loadComponent: () => import('./attendance/attendance.page').then( m => m.AttendancePage)
  },
  {
    path: 'homework',
    loadComponent: () => import('./homework/homework.page').then( m => m.HomeworkPage)
  },
  {
    path: 'mark-attendance',
    loadComponent: () => import('./mark-attendance/mark-attendance.page').then( m => m.MarkAttendancePage)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
