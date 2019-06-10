import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CanActivateViaAuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: './tabs/tabs.module#TabsPageModule',
    canActivate: [CanActivateViaAuthGuard]
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
