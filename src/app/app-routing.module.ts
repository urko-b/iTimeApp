import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CanActivateViaAuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: './pages/login/login.module#LoginModule'
  },
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule', canActivate: [CanActivateViaAuthGuard] }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
