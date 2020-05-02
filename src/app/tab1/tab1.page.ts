import { Component } from '@angular/core';
import { FirestoreUtilsService } from '../services/service/firestore-utils.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  products: Product[] = [];
  constructor(private firestore: FirestoreUtilsService) {
    this.firestore.getProducts().subscribe(data => {
      this.products = data.map(p => {
        return {
          id: p.payload.doc.id,
          name: p.payload.doc.get('name'),
          price: p.payload.doc.get('price')
        } as Product;
      });
    });
  }
  signOut() {
    this.firestore.signOut();
  }
}
