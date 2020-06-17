import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Login2RoutingModule } from './login2-routing.module';
import { Login2Component } from './login2.component';

import { RegisterComponent } from '../register/register.component';

import{ReactiveFormsModule} from '@angular/forms'
import { from } from 'rxjs';
@NgModule({
  declarations: [Login2Component,RegisterComponent],
  imports: [
    CommonModule,
    Login2RoutingModule,
    ReactiveFormsModule
  ]
})
export class Login2Module { }
