import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {

  customerForm = new FormGroup ({
    id: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl(),
    birthday: new FormControl(),
    gender: new FormControl(),
    lastContact: new FormControl(),
    lifetimeValue: new FormControl()
  });

  constructor() { }

  ngOnInit() {

  }

}
