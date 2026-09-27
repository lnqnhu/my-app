import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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

  constructor(
    private customerService: CustomerService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.customerService.getGroupedCustomers().subscribe({
      next: (data: any) => {
        this.customerGroups = Array.isArray(data) ? data : [];
        this.isLoading = false;
        this.changeDetector.markForCheck();
      },
      error: () => {
        this.loadError = true;
        this.isLoading = false;
        this.changeDetector.markForCheck();
      }
    });
  }
}