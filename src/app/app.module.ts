import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import {CustomerService} from "./services/customer-service";

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
