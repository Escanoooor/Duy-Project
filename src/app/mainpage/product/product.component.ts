import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[AuthService]
})
export class ProductComponent implements OnInit {
displayName:String;
  constructor(public authSVc:AuthService,public router:Router ) {}

  ngOnInit(): void {
    this.authSVc.getCurrentUser()
    .then(user=> this.displayName = user.displayName!=null? user.displayName: user.email);

  console.log(this.displayName);
  }
  Logout(){
    this.authSVc.logout();
    this.router.navigate(['/login']);
  }

}
