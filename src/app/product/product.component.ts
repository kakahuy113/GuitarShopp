import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { guitar } from '../models/guitar'
import { } from "rxjs/add/operator/share"
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private http: HttpClient, private route: ActivatedRoute) { }
  products = [];
  guitar = [];
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = parseInt(params.get('id'));
      

      this.getproduct().subscribe(guitar => {
       this.products = guitar.filter(gui => {
          return gui.cid === id;
        });

      })

      

    })
  }

  getproduct(): Observable<guitar[]> {
    return this.http.get<guitar[]>('../../assets/data/guitar.json');
  }
}
