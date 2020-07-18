import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

import { 
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
  redirectLoggedInTo
 } from "@angular/fire/auth-guard";







const redirectUnauthorizedToSignin=()=>redirectUnauthorizedTo(['signin'])
const redirectLoggedInToHome=()=>redirectLoggedInTo([''])


const routes: Routes = [

                {
                  path:'signin',
                  component:SigninComponent,
                  canActivate:[AngularFireAuthGuard],
                  data:{authGuardPipe:redirectLoggedInToHome},
                },
                {
                  path:'signup',
                  component:SignupComponent,
                },
                {
                  path:'',
                  component:HomeComponent,
                  canActivate:[AngularFireAuthGuard],
                  data:{authGuardPipe:redirectUnauthorizedToSignin},
                },
                {
                  path:'**',
                  component:NotfoundComponent,
                },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
