import {Component, Input, OnInit} from "@angular/core";
import {Customer} from "../../services/customer-service";

@Component({
  selector: 'navigation-detail',
  templateUrl: './navigation-detail.component.html',
  styleUrls: ['./navigation-detail.component.scss']
})
export class NavigationDetailComponent implements OnInit {

  @Input() customer: Customer;

  constructor() { }

  ngOnInit() {

  }

}
