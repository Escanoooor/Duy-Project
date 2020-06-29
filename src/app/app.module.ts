import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
//Firebase module cô Ngôn hướng dẫn
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
    
import { AppRoutingModule } from './app-routing.module';
import{Routes,RouterModule} from '@angular/router'

//ngx-toastr for Angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
//Material 
import { MatSliderModule } from '@angular/material/slider';
//
import{PageService} from './shared/page.service';
import{FormsModule} from "@angular/forms"
import{ReactiveFormsModule} from "@angular/forms"
import { from } from 'rxjs';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { PageComponent } from './mainpage/page/page.component';
import {RegisterComponent} from './mainpage/register/register.component';
import { HomeComponent } from './home/home.component';
import { Login2Component } from './mainpage/login/login2.component';
import { ProductComponent } from './mainpage/product/product.component';
import { CountUpModule } from 'ngx-countup';
// const appRoutes: Routes =[
//   {path:'home',component:HomeComponent},
//   {path:'login',component:Login2Component}
// ];
  

//import{MatSortModule} from '@angular/material/sort'
//import{Router} from '@angular/router';
//import { AuthService } from './auth.service';
@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    PageComponent,
    HomeComponent,
    RegisterComponent,
    Login2Component,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Kết nối tới môi trường firebase bên environment.ts
    AngularFireModule.initializeApp(environment.firebaseConfig),
			AngularFirestoreModule,
      AngularFireAuthModule,
      FormsModule,
      BrowserAnimationsModule,
      ToastrModule.forRoot(),
      MatSliderModule,
      ReactiveFormsModule,
      CountUpModule

      // RouterModule.forRoot(appRoutes),
 //Router
  ],
  providers: [PageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
