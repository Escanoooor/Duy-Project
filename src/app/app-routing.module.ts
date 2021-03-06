import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import {RegisterComponent} from './mainpage/register/register.component';
import { from } from 'rxjs';
import { Login2Component } from './mainpage/login/login2.component';
import { ProductComponent } from './mainpage/product/product.component';


const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'register',component:RegisterComponent},
  { path: 'login', component:Login2Component },
  { path: 'product', component:ProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
