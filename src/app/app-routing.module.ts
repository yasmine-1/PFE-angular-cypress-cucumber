import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OmnichannelComponentComponent } from './omnichannel-component/omnichannel-component.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { SingupComponent } from './singup/singup.component';


const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SingupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'dialog', component: PopUpComponent },
  { path: 'omnichannel', component: OmnichannelComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
