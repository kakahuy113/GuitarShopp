import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes , RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { CartComponent } from './cart/cart.component';
const routes : Routes = [
  {path : '' , redirectTo : '/home' ,pathMatch : 'full'},
  {path : 'home' , component : HomeComponent } ,
  {path : 'catalog/:id' , component : ProductComponent},
  {path : 'product/:id' , component : DetailProductComponent},
  {path : 'cart' , component : CartComponent}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
