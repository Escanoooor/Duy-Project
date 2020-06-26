import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{AuthService} from '../auth.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[AuthService]
})
export class HomeComponent implements OnInit {
  displayName:string="";

  constructor(public authSVc:AuthService,public router:Router) { }

  ngOnInit() {
		  
    this.authSVc.getCurrentUser()
      .then(user=> this.displayName = user.displayName!=null? user.displayName: user.email);

    console.log(this.displayName);
  
  }
  Logout(){
    this.authSVc.logout();
    this.router.navigate(['/login']);
  }
   
}
