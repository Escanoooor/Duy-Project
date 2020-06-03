import { Component, OnInit } from '@angular/core';
import { PageService } from '../shared/page.service';
import { Page } from '../shared/page.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  list: Page[];
  constructor(public service: PageService,
    public firestore: AngularFirestore,
    public toarstr: ToastrService) { }

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
}
