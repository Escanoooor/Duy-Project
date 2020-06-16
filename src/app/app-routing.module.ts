import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PageListComponent } from './mainpage/login/page-list.component';

const routes: Routes = [

  {path:'home', component: HomeComponent},
  {path:'page-list',component:PageListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
