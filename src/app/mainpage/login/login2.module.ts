import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Login2RoutingModule } from './login2-routing.module';
import { Login2Component } from './login2.component';

import { RegisterComponent } from '../register/register.component';


@NgModule({
  declarations: [Login2Component,RegisterComponent],
  imports: [
    CommonModule,
    Login2RoutingModule
  ]
})
export class Login2Module { }
