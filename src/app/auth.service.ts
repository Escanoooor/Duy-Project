import { Injectable } from "@angular/core";

		import { AngularFireAuth } from '@angular/fire/auth';
		import * as firebase from 'firebase/app';
		import { Router } from '@angular/router';

		@Injectable()
		export class AuthService {

		  constructor(
		   public afAuth: AngularFireAuth,
		   public router:Router
		 ){}


		 async signinGmail(){
			var provider = new firebase.auth.GoogleAuthProvider();
			provider.addScope('profile');
			provider.addScope('email');
			return await  this.afAuth.signInWithPopup(provider)
              .then(res=>{
                console.log(" da dang nhap thanh cong")
				//  this.router.navigate(['home']);
                // this.router.navigate(['home']);
				})
    }
  }