import { Injectable } from '@angular/core';
import { guitar } from '../models/guitar';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../models/items'
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public guitars =[];
  
  constructor(private http : HttpClient) { 
    
  }
  
  addtocart(product : Item) {
    this.guitars.push(product);  
  }

  getguitar() {
      return this.guitars;
  }





  clearguitar() {
      this.guitars = [];
    
      return this.guitars;
  }

 
}

