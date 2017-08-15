import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import {CustomerService} from './services/customer-service';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';
import { NavigationDetailComponent } from './components/navigation-detail/navigation-detail.component';
import {NavigationService} from "./services/navigation-data-service";

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    CustomerAddComponent,
    NavigationDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [CustomerService, NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
