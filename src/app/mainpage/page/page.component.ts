import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/shared/page.service';
import { NgForm } from '@angular/forms';
import{AngularFirestore} from '@angular/fire/firestore';

import { ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor(public service: PageService, public firestore:AngularFirestore, public toarstr: ToastrService ) { }

  ngOnInit(): void {
    this.resetForm();
  }
  resetForm(form ?: NgForm){
    if(form!= null)
    form.resetForm();
    this.service.formData={
      id: null,
      Key:'',
      Name: '',
      Kind: '',
      Release: '',
      Price: '',
      Status:'',
    }
  }
  // Add new and update
  onSubmit(form: NgForm){
    let data = Object.assign({},form.value) ;
    delete data.id;
    if(form.value.id == null)
    {
      this.firestore.collection('itemss').add(data);
      this.toarstr.success('Submitted successfully ','Congratulation');
    }
    else
    {
    this.firestore.doc('itemss/'+form.value.id).update(data);
    this.toarstr.success('Updated Successfully','Congratulation');  
    }
    this.resetForm(form);
    
  }

}
