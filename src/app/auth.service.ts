import { Injectable } from "@angular/core";
import{auth} from 'firebase/app'
import{User} from 'firebase'
import{first} from 'rxjs/operators'
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { async } from '@angular/core/testing';

@Injectable()
export class AuthService {
			public user:User; 

constructor(public AfAuth:AngularFireAuth, public db:AngularFirestore
){}

async login(email:string,password:string){
	try{
		const result = await this.AfAuth.signInWithEmailAndPassword(
			email,password
		);
		return result;
	}
	
	catch(error)
	{
		console.log(error);
	}	
}

async register(email?:string,password?:string){
	try{
		const result = await this.AfAuth.createUserWithEmailAndPassword(
			email,
			password
		);
		return result;
	}
	
	catch(error)
	{
		console.log(error);
	}	
}
async logout(){
	
	try{
		await this.AfAuth.signOut();
	}
	catch(error)
	{
		console.log(error);
		
	}
}
getCurrentUser(){
  return new Promise<any>((resolve,reject)=>{
	  var user = this.AfAuth.onAuthStateChanged(function(user){
		  if(user){
			  resolve(user);
		  }
		  else reject ("No login");
	  })
  }
  )
}
async LoginwithGG(){
	try{
		let provider = new firebase.auth.GoogleAuthProvider();
		let user = this.AfAuth.signInWithPopup(provider);
		console.log(user);
		(await user).user.displayName;
	}
	catch(error)
	{
		console.log(error);
	}
}
}

