import { Component, OnInit } from '@angular/core';

import{AuthService} from '../../auth.service'
import{FormGroup,FormControl} from'@angular/forms';
import { Router } from '@angular/router';
import { ToastrService} from 'ngx-toastr';
import { delay } from 'rxjs/operators';
@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css'],
  providers:[AuthService]
})
export class Login2Component implements OnInit {
  user: any;
  LoginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })
  constructor(public authSVc:AuthService,public router:Router,public toarstr: ToastrService) { }

  ngOnInit(): void {
  }

 async onLogin()
  {
    const{email,password}= this.LoginForm.value;
    try{
     const user= await this.authSVc.login(email,password);
     if(user != null)
     {
      this.toarstr.success('Login Successfully','Congratulation');  
      delay(50000);
      this.router.navigate(['/home']);     
     }
     else
     {
      this.toarstr.error('Pls check your email or password again','Sorry');
     }
    }
    catch(error)
    {
      console.log(error);
     
    }
  }
  
async onLoginwithGoogle(){
  
  let user = await this.authSVc.LoginwithGG();
  if(user != name )
  {
    console.log(user);
    this.toarstr.success('Login with Google Successfully','Congratulation');  
    this.router.navigate(['/home']);
  }
  else
  {
    this.toarstr.show('Login with Google failed!!','Error')
  }
}
}
