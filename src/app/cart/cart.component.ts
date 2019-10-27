import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Item } from '../models/items';
import { ActivatedRoute } from '@angular/router';
import { guitar } from '../models/guitar';
@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

	items = [];
	total = [];
	temp;
	constructor(
		private route: ActivatedRoute,
		private service: ProductService
	) { }
	
	ngOnInit() { 
		this.items = this.service.getguitar();
		this.total = this.service.getquantity();
	}

	quantity()  {
		return this.total;
	}




	clearcart() {
		this.service.clearguitar();
		this.items = this.service.getguitar()
	}
}
