import {Injectable} from '@angular/core';

export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  birthday: string;
  gender: string;
}

@Injectable()
export class CustomerService {
  customers: Customer[];

  constructor() {
    this.customers = [
      {
        id: '1',
        firstName: 'John',
        lastName: 'Doe',
        birthday: '1991-10-12',
        gender: 'male'
      },
      {
        id: '2',
        firstName: 'Robert',
        lastName: 'Giel',
        birthday: '1991-10-12',
        gender: 'male'
      },
      {
        id: '3',
        firstName: 'Allie',
        lastName: 'Hope',
        birthday: '1991-10-12',
        gender: 'female'
      },
      {
        id: '4',
        firstName: 'Holly',
        lastName: 'Berry',
        birthday: '1991-10-12',
        gender: 'female'
      }
    ]
  }

  getCustomers(): Customer[] {
    return this.customers;
  }
}
