import { Component, OnInit } from '@angular/core';

export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  birthday: string;
  gender: string;
}

@Component({
  selector: 'customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})

export class CustomerListComponent implements OnInit {

  public customers: Customer[];

  constructor() { }

  ngOnInit() {
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

}
