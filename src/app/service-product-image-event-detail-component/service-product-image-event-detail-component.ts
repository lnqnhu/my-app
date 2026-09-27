import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductEventService } from '../services/product-event';

@Component({
  selector: 'app-service-product-image-event-detail',
  imports: [CommonModule],
  templateUrl: './service-product-image-event-detail-component.html',
  styleUrls: ['./service-product-image-event-detail-component.css']
})
export class ServiceProductImageEventDetailComponent {
  selectedProduct: any;

  constructor(private activateRoute: ActivatedRoute, private _fs: ProductEventService, private router: Router) {
    activateRoute.paramMap.subscribe(
      (param) => {
        let id = param.get('id');
        if (id != null) {
          this.selectedProduct = _fs.getProductDetail(id);
        }
      }
    );
  }

  goBack() {
    this.router.navigate(['service-product-image-event']);
  }
}