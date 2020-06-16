import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Login2Component } from './login2.component';

import { RegisterComponent } from '../register/register.component';



const routes: Routes = [{ path: '', component: Login2Component },{ path: 'register', component: RegisterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Login2RoutingModule { }
