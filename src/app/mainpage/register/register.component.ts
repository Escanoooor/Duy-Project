import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl} from'@angular/forms';
import{AuthService} from '../../auth.service'
import{ToastrService} from 'ngx-toastr'
import { from } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[AuthService],
})
export class RegisterComponent implements OnInit {
  displayName: String;
  RegisterForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(public authSvc:AuthService,public toasrt:ToastrService,public router:Router) { }

  ngOnInit(): void {
    this.authSvc.getCurrentUser()
    .then(user=> this.displayName = user.displayName!=null? user.displayName: user.email);

  console.log(this.displayName);
  }
  onRegister(){
    const{email,password} = this.RegisterForm.value;
   this.authSvc.register(email,password);
   this.toasrt.success("Create an account is succed","Congratulation")

  }

  Logout(){
    this.authSvc.logout();
    this.router.navigate(['/login']);
  }
}
