import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Customer, CustomerService} from '../../services/customer-service';

@Component({
  selector: 'customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {

  @Input() customer: any;
  customerForm: FormGroup;

  constructor(private fb: FormBuilder,
              private customerService: CustomerService) {
    this.customerForm = this.fb.group({
      id: '',
      firstName: '',
      lastName: '',
      birthday: '',
      gender: '',
      lastContact: '',
      lifetimeValue: ''
    });
  }

  ngOnInit() {
    if (this.customer) {
      this.customerForm = this.fb.group({
        id: [this.customer.id],
        firstName: [this.customer.firstName],
        lastName: [this.customer.lastName],
        birthday: [this.customer.birthday],
        gender: [this.customer.gender],
        lastContact: [new Date()],
        lifetimeValue: [this.customer.lifetimeValue]
      });
    }

  }
}
