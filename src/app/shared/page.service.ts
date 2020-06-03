import { Injectable } from '@angular/core';
import { Page } from './page.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PageService {
formData: Page;
  constructor(public firestore: AngularFirestore ) { }

  getItems(){
  return  this.firestore.collection('itemss').snapshotChanges();
  }
}
