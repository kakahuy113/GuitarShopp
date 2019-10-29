import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { FormBuilder , Validators , FormGroup } from '@angular/forms'
import { HttpClient , HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  items;
  checkoutForm : FormGroup
  constructor(
    private service : ProductService,
    private fb : FormBuilder,
    private http : HttpClient
    ) { }

  ngOnInit() {
    this.items = this.service.getguitar();

    this.checkoutForm = this.fb.group({
      'checkoutFormCountry': ['' ,[Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      'checkoutFormFirst' : ['' , [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      'checkoutFormLast' : ['' ,[Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      'checkoutFormAddress' : ['' , Validators.required],
      'checkoutFormCity' : ['' , Validators.required],
      'checkoutFormState' : ['' , Validators.required],
      'checkoutFormZip' : ['' , [Validators.required , Validators.minLength(6)]],
      'checkoutFormPhone' : ['' , [Validators.required , Validators.pattern('^[0-9]*$')]],
      'checkoutFormEmail' : ['' , [Validators.required, Validators.email]],     
    })
   
  }

  Total() {
		let total = 0;
		for(let item of this.items) {
			total += item.price * item.quantity
		}
		return total;
  }
  
  onSubmit() {
    this.sendMail(this.checkoutForm.value).subscribe( () => {
      alert('Your mail has been sent.');
      /* this.checkoutForm.reset(); */
    }, error => {
      console.log('Error' , error);
      
    });
  }

  url : string = 'http://localhost:8080/send';
  sendMail(mailContent : any) {
    return this.http.post(this.url ,
      JSON.stringify(mailContent),
      { headers : new HttpHeaders({ 'Content-Type' : 'application/json'}) , responseType : 'text'});

  }


}
