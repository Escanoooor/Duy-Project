import { Component, OnInit } from '@angular/core';

import{AuthService} from '../../auth.service'
import{FormGroup,FormControl} from'@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css'],
  providers:[AuthService]
})
export class Login2Component implements OnInit {
  LoginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })
  constructor(public authSVc:AuthService,public router:Router) { }

  ngOnInit(): void {
  }

 async onLogin()
  {
    const{email,password}= this.LoginForm.value;
    try{
     const user= await this.authSVc.login(email,password);
     if(user != null)
     {
        this.router.navigate(['/home']);
     }
    }
    catch(error)
    {
      console.log(error);
    }
  }
}
