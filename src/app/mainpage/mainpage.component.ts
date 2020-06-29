import { Component, OnInit, ViewChild } from '@angular/core';
import { PageService } from '../shared/page.service';
import { Page } from '../shared/page.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
// import{MatPaginator} from '@angular/material/paginator'
import { from } from 'rxjs';
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  Startnumber =0;
  Endnumber = 5 ;
  list: Page[];
  // firstname: string;
  kindstyle:string;
  constructor(public service: PageService,
    public firestore: AngularFirestore,
    public toarstr: ToastrService) { }

// @ViewChild(MatPaginator,{static:true}) paginator:MatPaginator;

  ngOnInit(): void {
    this.service.getItems().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data() as Page
        }
      })
    });
  }
  // update
  onEdit(emp: Page) {
    this.service.formData = Object.assign({}, emp);
  }
  // Delete
  onDelete(id: string) {
    if (confirm("Are you really want to delete the item ?")) {
      this.firestore.doc('itemss/' + id).delete();
      this.toarstr.warning('Deleted Succesfully', 'Annoucement');
    }
  }
  //Status
  getNumber(number) { 
   if(number >= 15)
   {
     return "green";
   }
   else if(number >=5 && number <= 15)
   {
     return "darkgoldenrod"
   }
   else {
     return "red"
   }
  }
  //Paginator

  getArrayfromNumber(length)
  {
    return new Array(length=3);
  }
  UpdateNumberPage(pageNumber)
  {
    this.Startnumber = (pageNumber)*5 ;
    this.Endnumber = this.Endnumber+3;
  }
  // Search by name
  Search(){
    if(this.kindstyle !="") // fixing
    {
      if(this.kindstyle!= "")
      {
        this.list = this.list.filter(res=>{
          return res.Kind.toLocaleLowerCase().match(this.kindstyle.toLocaleLowerCase());
         });
      }
    }
    else if ( this.kindstyle == "")
    {
      this.ngOnInit();
    }  
  }
}
