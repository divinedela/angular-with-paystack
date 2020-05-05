import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Angular4PaystackModule } from 'angular4-paystack';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Angular4PaystackModule.forRoot('pk_test_a18f42abea034a496aee041a8db12845315af792'),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
