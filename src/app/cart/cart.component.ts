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

	items;
	value = [];
	constructor(
		private route: ActivatedRoute,
		private service: ProductService
	) { }
	
	ngOnInit() { 
		this.items = this.service.getguitar();
		this.items.forEach(guitar => {
			this.value[guitar.id] = guitar.quantity
		})
		
	}

	Total() {
		let total = 0;
		for(let item of this.items) {
			total += item.price * this.value[item.id]
		}
		return total;
	}

	down(id) {
		let i = this.value[id];
		if(i > 0) {
			--i
		}
		this.value[id] = i
	}

	up(id) {
		let i = this.value[id];
		if(i < 20) {
			++i
		}
		this.value[id] = i;
	}

	clearcart() {
		this.service.clearguitar();
		this.items = this.service.getguitar()
	}
	  
	checkout() {
		for(let item of this.items) {
		  for(let itemcart of this.service.getguitar()) {
			if(itemcart.id === item.id) {
			  itemcart.quantity = this.value[item.id]
			}
		  }
		}
	  }
}
