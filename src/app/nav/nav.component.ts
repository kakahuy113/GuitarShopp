import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  catalog : any;
  constructor(private http : HttpClient) { }

  ngOnInit() {
    this.getcategories().subscribe(catalog => {
      this.catalog = catalog;
    })
  }
  
  getcategories() {
    return this.http.get('../../assets/data/categories.json')
  }

}

