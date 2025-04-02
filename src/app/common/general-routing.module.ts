import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then(m => m.HomePage)
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
    path: 'logout',
    loadComponent: () => import('./logout/logout.page').then(m => m.LogoutPage)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonRoutingModule { }
