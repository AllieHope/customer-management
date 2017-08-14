import { Component, OnInit } from '@angular/core';
import {Customer, CustomerService} from '../../services/customer-service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent implements OnInit {

  customerForm: FormGroup;

  constructor(private fb: FormBuilder,
              private customerService: CustomerService) {
    this.customerForm = this.fb.group({
      id: [this.customerService.getCounter() + 1],
      firstName: '',
      lastName: '',
      birthday: '',
      gender: '',
      lastContact: '',
      lifetimeValue: ''
    });
  }

  ngOnInit() {
    this.customerService.incrementCounter();
  }

  onAddCustomer(customer: Customer) {
    this.customerService.addCustomer(customer);
  }

}
