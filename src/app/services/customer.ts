import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  // Nhúng HttpClient vào service
  constructor(private http: HttpClient) { }

  // Hàm đọc dữ liệu từ file JSON
  getGroupedCustomers(): Observable<any> {
    return this.http.get('/assets/data/customers.json');
  }
}