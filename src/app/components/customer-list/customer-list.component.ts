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

  compareFirst(a: Customer, b: Customer) {
    if (a.firstName < b.firstName) {
      return -1;
    }
    if (a.firstName > b.firstName) {
      return 1;
    }
    return 0;
  }

  compareLast(a: Customer, b: Customer) {
    if (a.lastName < b.lastName) {
      return -1;
    }
    if (a.lastName > b.lastName) {
      return 1;
    }
    return 0;
  }

  onSortFirstName() {
    this.customers.sort(this.compareFirst);
  }

  onSortLastName() {
    this.customers.sort(this.compareLast);
  }

  onDeleteCustomer(id: string) {
    this.customers = this.customers.filter(c => {
      return c.id !== id;
    });
  }

  onEditCustomer(customer: Customer) {
    const modal = this.detailModal.nativeElement.querySelector('#customer-detail-modal');
    console.log(modal);
  }

}
