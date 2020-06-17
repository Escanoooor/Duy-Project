import { Injectable } from "@angular/core";
import{auth} from 'firebase/app'
import{User} from 'firebase'
import{first} from 'rxjs/operators'
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Injectable()
export class AuthService {
			public user:User; 

constructor(public AfAuth:AngularFireAuth
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

async register(email:string,password:string){
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
GetCurrentUser(){
	return this.AfAuth.authState.pipe(first()).toPromise();
}

		 
}