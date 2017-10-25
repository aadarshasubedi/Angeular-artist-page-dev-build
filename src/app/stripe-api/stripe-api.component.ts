import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { NgZone } from '@angular/core';
import {SecretStripeKeysComponent} from '../secret-stripe-keys/secret-stripe-keys.component';

@Component({
  selector: 'app-stripe-api',
  templateUrl: './stripe-api.component.html',
  styleUrls: ['./stripe-api.component.css'],

})
export class StripeAPIComponent implements OnInit {

  cardNumber: string;
  expiryMonth: string;
  expiryYear: string;
  cvc: string;


   message: string;
/*
// properties to send to WR1 Backend
  email: string;
  password: string;

*/

goBack(){

      window.history.back();

}


  getToken() {
    // No Username and password needed now console.log("email recorded: "+ this.email + "password recorded: " + this.password + " .");
    this.message = 'Waiting for confirmation...';

    (<any>window).Stripe.card.createToken({
      number: this.cardNumber,
      exp_month: this.expiryMonth,
      exp_year: this.expiryYear,
      cvc: this.cvc
    }, (status: number, response: any) => {

      // Wrapping inside the Angular zone
      this._zone.run(() => {
        if (status === 200) {
          this.message = `Success! Card token ${response.card.id}.`;
        } else {
          this.message = response.error.message;
        }
      });
    });
  }
  
  constructor(private _zone: NgZone, private _StripeApiKey: SecretStripeKeysComponent) { }

  ngOnInit() {
  }

    openCheckout() {
    var handler = (<any>window).StripeCheckout.configure({
      key: this._StripeApiKey.stripeTestAPI,
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
      }
    });

    handler.open({
      name: 'WR1',
      description: 'Subscription payment',
      amount: 2000
    });

  }

}
