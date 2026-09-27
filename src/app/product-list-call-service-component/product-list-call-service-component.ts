import { Component } from '@angular/core';
import { Product } from '../classes/iproduct';
import { ProductService } from '../services/product-service';

@Component({
  selector: 'app-product-list-call-service-component',
  standalone: false,
  templateUrl: './product-list-call-service-component.html',
  styleUrl: './product-list-call-service-component.css',
})
export class ProductListCallServiceComponent {
  products:Product[]=[]
  constructor(private ps:ProductService){
    //this.products=ps.getProductList()
  }
  ngOnInit():void
  {
    this.products=this.ps.getProductList()
  }
}
