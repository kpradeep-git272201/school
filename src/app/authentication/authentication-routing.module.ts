import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'sign-in',
    loadComponent: () => import('./sign-in/sign-in.page').then(m => m.SignInPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'create-pin',
    loadComponent: () => import('./create-pin/create-pin.page').then(m => m.CreatePinPage)
  }
  // {
  //   path: 'sign-in',
  //   loadComponent: () => import('./sign-in/sign-in.page').then(m => m.SignInPage)
  // },
  // {
  //   path: 'login',
  //   loadComponent: () => import('./login/login.page').then(m => m.LoginPage)
  // },
  // {
  //   path: 'create-pin',
  //   loadComponent: () => import('./create-pin/create-pin.page').then(m => m.CreatePinPage)
  // },
  // {
  //   path: 'folder/:id',
  //   loadComponent: () =>
  //     import('../folder/folder.page').then(m => m.FolderPage),
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
