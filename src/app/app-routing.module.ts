import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    data: { moduleTitle: 'ACCUEIL' },
    loadChildren: () => import('./core/pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./core/pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./core/pages/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'admin',
    data: { moduleTitle: 'ADMINISTRATION' },
    loadChildren: () => import('./core/pages/admin/admin.module').then(m => m.AdminPageModule)
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
