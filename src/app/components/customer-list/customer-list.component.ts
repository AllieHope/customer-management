import {Component, OnInit} from '@angular/core';
import {Customer, CustomerService} from '../../services/customer-service';

@Component({
  selector: 'customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})

export class CustomerListComponent implements OnInit {

  customers: Customer[];

  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
    this.customers = this.customerService.getCustomers();
    this.customers.map(c => {
      c.age = this.calculateAge(c.birthday);
    });
  }

  calculateAge(bday: Date): number {
    const diff = Date.now() - bday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  deleteCustomer(id: string) {
    this.customers = this.customers.filter(c => {
      return c.id !== id;
    });
  }

}
