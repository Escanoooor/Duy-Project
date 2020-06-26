import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product.component';

import{HomeComponent} from '../../home/home.component';
import { from } from 'rxjs';

const routes: Routes = [{ path: '', component: ProductComponent },{path:'home',component:HomeComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
