import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Firebase module cô Ngôn hướng dẫn
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
    
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { PageComponent } from './mainpage/page/page.component';
import {RegisterComponent} from './mainpage/register/register.component';

//ngx-toastr for Angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
//Material 
import { MatSliderModule } from '@angular/material/slider';
//
import{PageService} from './shared/page.service';
import{FormsModule} from "@angular/forms"
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { Login2Component } from './mainpage/login2/login2.component';

//import{Router} from '@angular/router';
//import { AuthService } from './auth.service';
@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    PageComponent,
    HomeComponent,
    RegisterComponent,
    Login2Component
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
 //Router
  ],
  providers: [PageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
