import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl} from'@angular/forms';
import{AuthService} from '../../auth.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[AuthService],
})
export class RegisterComponent implements OnInit {
  RegisterForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(public authSvc:AuthService) { }

  ngOnInit(): void {
  }
  onRegister(){
    const{email,password} = this.RegisterForm.value;
    this.authSvc.register(email,password);
  }
}
