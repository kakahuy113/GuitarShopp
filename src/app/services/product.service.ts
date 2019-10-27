import { Injectable } from '@angular/core';
import { guitar } from '../models/guitar';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private guitars =[];
  private quantity =[]
  constructor(private http : HttpClient) { 
    
  }
  
  addtocart(product , index) {
    this.guitars.push(product);  
    this.quantity.push(index);
  }

  getguitar() {
      return this.guitars;
  }
  
  
  getquantity() {
    return this.quantity;
  }

  clearguitar() {
      this.guitars = [];
      this.quantity = []
      return this.guitars , this.quantity;
  }

 
}

