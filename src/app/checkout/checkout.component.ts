import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  items;
  value = []
  constructor(private service : ProductService) { }

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

}
