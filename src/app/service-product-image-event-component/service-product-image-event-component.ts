import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductEventService } from '../services/product-event'; // Chú ý import đúng service mới tạo

@Component({
  selector: 'app-service-product-image-event',
  templateUrl: './service-product-image-event-component.html',
  styleUrls: ['./service-product-image-event-component.css']
})
export class ServiceProductImageEventComponent {
  public products: any;

  constructor(private pservice: ProductEventService, private router: Router) {
    this.products = pservice.getProductsWithImages();
  }

  viewDetail(f: any) {
    this.router.navigate(['service-product-image-event', f.ProductId]);
  }
}