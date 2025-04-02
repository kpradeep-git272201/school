import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  // {
  //   path: 'main',
  //   loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  // },
  {
    path: 'apps',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
 





  // {
  //   path: '',
  //   redirectTo: 'sign-in', 
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'auth',
  //   loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
  // },
  // {
  //   path: 'main',
  //   loadChildren : () => import('./main/main.module').then( m => m.MainModule)
  // },
  // {
  //   path: 'dashboard/:id',
  //   loadComponent: () =>
  //     import('./folder/folder.page').then(m => m.FolderPage),
  // },


];
