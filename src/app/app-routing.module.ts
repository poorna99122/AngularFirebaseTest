import { inject, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorpageComponent } from './common/errorpage/errorpage.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginServiceService } from './service/login-service.service';

const routes: Routes = [
  {
    path:'',
    component: WelcomeComponent
  },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./components/welcome/welcome.module').then((m) => m.WelcomeModule),
      canActivate: [() => inject(LoginServiceService).login()]
  },
  { path: 'errorpage', loadChildren: () => import('./common/errorpage/errorpage.module').then(m => m.ErrorpageModule) },
  { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
