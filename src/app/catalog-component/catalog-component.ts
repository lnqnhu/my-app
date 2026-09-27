import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogService } from '../services/catalog'; 

@Component({
  selector: 'app-catalog',
  imports: [CommonModule],
  templateUrl: './catalog-component.html', 
  styleUrls: ['./catalog-component.css']
})
export class CatalogComponent {
  public categories: any;

  constructor(private catalogService: CatalogService) {
    this.categories = this.catalogService.getCategories();
  }
}