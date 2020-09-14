import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contactUs/contactUs.component';
import { AboutUsComponent } from './aboutUs/aboutUs.component';
import { AccountViewComponent } from './accountview/accountview.component';
import { SelfAssessmentComponent } from './selfAssessment/selfAssessment.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'login/home', component: HomeComponent },
  { path: 'login/aboutus', component: AboutUsComponent },
  { path: 'login/contactus', component: ContactUsComponent },
  { path: 'login/accountview', component: AccountViewComponent },
  { path: 'login/selfassess', component: SelfAssessmentComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
