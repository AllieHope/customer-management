import {Component, OnInit} from '@angular/core';
import {Customer, CustomerService} from '../../services/customer-service';
import {NavigationData, NavigationService} from '../../services/navigation-data-service';

@Component({
  selector: 'customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})

export class CustomerListComponent implements OnInit {
  customers: Customer[];
  currentCustomer: Customer;
  customerData: NavigationData[];


  constructor(private customerService: CustomerService,
              private navigationService: NavigationService) {
  }

  ngOnInit() {
    this.customers = this.customerService.getCustomers();
    this.customers.map(c => {
      c.age = this.calculateAge(c.birthday);
      c.lifetimeValue = (c.lifetimeValue) ? c.lifetimeValue : 0;
    });
    this.customers.sort(this.compareLastAsc);
    this.customerService.saveCustomers(this.customers);
  }

  calculateAge(bday: Date): number {
    const diff = Date.now() - new Date(bday).getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  onSortName(e: any) {
  if (e.target.classList.contains('asc')) {
    e.target.classList.remove('asc');
    e.target.classList.add('desc');
    if (e.target.classList.contains('firstName')) {
      this.customers.sort(this.compareFirstDesc);
    } else {
      this.customers.sort(this.compareLastDesc);
    }
  } else {
    e.target.classList.remove('desc');
    e.target.classList.add('asc');
    if (e.target.classList.contains('firstName')) {
      this.customers.sort(this.compareFirstAsc);
    } else {
      this.customers.sort(this.compareLastAsc);
    }
  }
}

  compareFirstAsc(a: Customer, b: Customer) {
    if (a.firstName < b.firstName) {
      return -1;
    }
    if (a.firstName > b.firstName) {
      return 1;
    }
    return 0;
  }

  compareFirstDesc(a: Customer, b: Customer) {
    if (a.firstName > b.firstName) {
      return -1;
    }
    if (a.firstName < b.firstName) {
      return 1;
    }
    return 0;
  }

  compareLastAsc(a: Customer, b: Customer) {
    if (a.lastName < b.lastName) {
      return -1;
    }
    if (a.lastName > b.lastName) {
      return 1;
    }
    return 0;
  }

  compareLastDesc(a: Customer, b: Customer) {
    if (a.lastName > b.lastName) {
      return -1;
    }
    if (a.lastName < b.lastName) {
      return 1;
    }
    return 0;
  }

  onDeleteCustomer(id: number) {
    this.customers = this.customers.filter(c => {
      return c.id !== id;
    });
    this.customerService.saveCustomers(this.customers);
  }

  onEditCustomer(customer: Customer): void {
    this.currentCustomer = customer;
  }

  onAddCustomer(): void {
    const id = this.customerService.getCounter();
    this.currentCustomer = {
      id: id,
      firstName: '',
      lastName: '',
      birthday: new Date(),
      gender: '',
      lifetimeValue: 0
    }
  }

  onViewNaviData(customer: Customer): void {
    this.currentCustomer = customer;
    this.customerData = this.navigationService.getCustomerNavigationData(customer);
  }

}
