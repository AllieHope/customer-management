import { Component, OnInit } from '@angular/core';
import {Customer, CustomerService} from "../../services/customer-service";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {
  customer: Customer;
  loading = true;

  constructor(private service: CustomerService) { }

  ngOnInit() {
  }

  loadCustomerDetails(id: string) {
    this.loading = false;
  }

}
