import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer'; 

@Component({
  selector: 'app-group-customers-component', 
  standalone: false,
  templateUrl: './group-customers-component.html',
  styleUrls: ['./group-customers-component.css']
})
export class GroupCustomersComponent implements OnInit { 
  customerGroups: any[] = [];
  isLoading = true;
  loadError = false;

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.customerService.getGroupedCustomers().subscribe({
      next: (data: any) => {
        this.customerGroups = Array.isArray(data) ? data : [];
        this.isLoading = false;
      },
      error: () => {
        this.loadError = true;
        this.isLoading = false;
      }
    });
  }
}