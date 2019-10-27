import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products
  constructor(private http : HttpClient) { }

  ngOnInit() {
    this.getproduct().subscribe(product => {
      this.products = product
    })
  }

  getproduct() {
    return this.http.get('../../assets/data/guitar.json');
  }

}
