import {Injectable} from '@angular/core';

export interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  birthday: Date;
  gender: string;
  age?: number;
  lastContact?: Date;
  lifetimeValue?: number;
}

@Injectable()
export class CustomerService {
  initialCustomers: Customer[];
  customerCount: number;

  constructor() {
    this.initialCustomers = [
      {
        id: 1,
        firstName: 'Peter',
        lastName: 'Smith',
        birthday: new Date('1996-10-12'),
        gender: 'male'
      },
      {
        id: 2,
        firstName: 'Anna',
        lastName: 'Hopp',
        birthday: new Date('1987-05-03'),
        gender: 'female'
      },
      {
        id: 3,
        firstName: 'Christian',
        lastName: 'Cox',
        birthday: new Date('1991-02-21'),
        gender: 'male'
      },
      {
        id: 4,
        firstName: 'Roxy',
        lastName: 'Fox',
        birthday: new Date('1979-06-30'),
        gender: 'female'
      },
      {
        id: 5,
        firstName: 'Eric',
        lastName: 'Adam',
        birthday: new Date('1969-11-21'),
        gender: 'male'
      }
    ];
  }

  getCustomers(): Customer[] {
    const storedCustomers = localStorage.getItem('customers');
    return storedCustomers ? JSON.parse(storedCustomers) : this.initialCustomers;
  }

  saveCustomers(customers: Customer[]): void {
    localStorage.setItem('customers', JSON.stringify(customers));
  }

  incrementCounter(): void {
    let counter = this.getCounter();
    counter++;
    localStorage.setItem('counter', counter.toString());
  }

  getCounter(): number {
    const storedCounter = localStorage.getItem('counter');
    return storedCounter ? Number(storedCounter) : this.initialCustomers.length;
  }

  addCustomer(customer: Customer) {
    const customerArray = this.getCustomers();
    customerArray.push(customer);
    this.saveCustomers(customerArray);
  }
}
