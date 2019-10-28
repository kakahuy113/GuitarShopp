import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router'; 
import { guitar } from '../models/guitar';
import { Observable , of } from 'rxjs';
import { Location } from '@angular/common';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})

export class DetailProductComponent implements OnInit {
  productdetail;
  quantity : number = 1;
  constructor(
    private http : HttpClient , 
    private route : ActivatedRoute,
    private location : Location,
    private service : ProductService
    ) { }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = parseInt(params.get('id'));
      this.getproduct().subscribe(guitar => {
        this.productdetail = guitar.filter(gui => {
          return gui.id === id;
        })[0];
      })
    })
  }
  
  addtocart() {
    window.alert('It has been add to cart');
    let guitar = Object.assign(this.productdetail , {'quantity' : this.quantity})
    this.service.addtocart(guitar);
  }

  getproduct(): Observable<guitar[]> {
    return this.http.get<guitar[]>('../../assets/data/guitar.json');
  }

  back() {
    this.location.back();
  }
}
