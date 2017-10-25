import { Component, OnInit, Input, Output } from '@angular/core';
import {NgForm} from '@angular/forms';
import {SecretStripeKeysComponent} from '../secret-stripe-keys/secret-stripe-keys.component';
import * as jQuery from 'jquery';

import {ReactiveFormsModule} from '@angular/forms';
import {NgZone} from '@angular/core';
import { SubscriptionPackagesComponent } from '../subscription-packages/subscription-packages.component';



$('#CardNumberFeildInputID').on('keypress change blur', function () {
  $(this).val(function (index, value) {
    return value.replace(/[^a-z0-9]+/gi, '').replace(/(.{4})/g, '$1 ');
  });
}); 


@Component({
  selector: 'app-chosen-package-stripe-signup',
  templateUrl: './chosen-package-stripe-signup.component.html',
  styleUrls: ['./chosen-package-stripe-signup.component.css']
})

export class ChosenPackageStripeSignupComponent implements OnInit {
tokenResult: string[];
  /* MessageHandlers */
ThisMessageStatus = 'Waiting for confirmation...';
/*
ThisMessage
ThisMessage
ThisMessage
ThisMessage
ThisMessage
ThisMessage
ThisMessage
ThisMessage
ThisMessage

*/



  /* Variables */
  emailFeild: string;
  fullName: string;
  cardNumber: string;
  expiryMonth: string;
  expiryYear: string;
  cvc: string;
  password: string;

  message: string;
  chosenPackage;
  
  /* Create the interface */
tokenLive;
  completeSubmittedFormValue;
  result;

  
  constructor(private _zone: NgZone, private _StripeApiKey: SecretStripeKeysComponent, private subscriptionPackage: SubscriptionPackagesComponent) {

   
   }
/* on submit function to handle the wsubscription joining request */


joinExtraWR1BackendFunctions(){

}

/* Stripe integartion */

JoinNewUserSubmit(){
  console.log("Join button selected");

  

}



/* ====== || Registration Logic || ==== */
/* check if the user already exists */

checkExistingUser(emailEntred){
  console.log("checking if the ail exisst already ");
  console.log("Email entred ");
  console.log(emailEntred);


    /* HTTP post method to see if the email already exists */

      
}


getToken() {

    this.message = this.ThisMessageStatus;

    (<any>window).Stripe.card.createToken({
      number: this.cardNumber,
      exp_month: this.expiryMonth,
      exp_year: this.expiryYear,
      cvc: this.cvc
    },
  (status: number, response: any) => {
    //Wrapping inside the angular zone

    this._zone.run(() => {
        if (status === 200) {

          this.message = `Success! card token ${response.card.id}. `;

        } else {
          this.message = response.error.message;
        }


        console.log("The token is ");
        console.log(response.card.id);
     return this.tokenLive = response.card.id;
    });
  });

  console.log("The token is 2 ");
  console.log(this.tokenLive);
}
  


  goBack(){
    
          window.history.back();
    
    }


/* -- tsting
onSubmit(f: NgForm) {

  
} */


// function in charge of sending off data

sendOffData(formParameter){
  console.log('data using the send of data function: ');
  console.log(formParameter);
  console.log("Just the email entered in function");
  console.log(formParameter.emailFeild);

  // begin sending that data

  // ==== | Stripe | ===== //






  // ===== | WR1 Backend || ===== //


}

  ngOnInit() {
    // display the chosen package
    console.log("The token is ");
   


    this.chosenPackage = this.subscriptionPackage.chosenPackage;
    console.log("Cosen package in stripe id");
    console.log(this.chosenPackage);

  }

  openCheckout(fromDataf :NgForm) {
    console.log("The token is outside ");

    this.getToken();
    console.log(fromDataf.value); 
    console.log(fromDataf.valid);
    this.completeSubmittedFormValue = fromDataf.value;
    console.log("testValueOnSubmit");
    console.log(this.completeSubmittedFormValue);
  
    /// test the parsin of one data feild
    console.log("for the parsing of one datafeild");
    this.sendOffData(this.completeSubmittedFormValue);
  
    console.log("Submiting the subscription  data");
    var handler = (<any>window).StripeCheckout.configue({
      key: this._StripeApiKey.stripeTestAPI,
      locale: 'auto',
      token: function (token: any) {
        // You can get access to the token id with 'token.id'.
        // Get the token ID to your server-side code for use.
       this.tokenResults = token.id; 
        console.log("Recorded token is: ");
        console.log(token.id);
      }
    });
    handler.open({
      name: 'WR1',
      description: 'Subscription payment',
      amount: 2000
    });
  

    this.result = this.completeSubmittedFormValue;
    
  }

}


/* 

for html form validation 


<!-- validate feilds || For testing -->

<!-- email -->
<p> Email Entered: {{ email.value }}  </p>
<p> Email valid: {{ email.valid }}  </p>

<!-- full Name -->
<p> Full name entered: {{ FullName.value }} </p>
<p> Full name valid: {{ FullName.valid }} </p>


<!-- CardNumber -->
<p> CC Entered: {{ CardNumber.value }} </p>
<p> CC valid: {{ CardNumber.valid }} </p>

<!-- CardNumberExpDate -->
<p> CC Entered: {{ CardNumberExpDate.value }} </p>
<p> CC valid: {{CardNumberExpDate.valid}} </p>

<!-- CardNumberCVC -->
<p> cvc entered: {{ CardNumberCVC.value }} </p>
<p> CVC Valid:  {{ CardNumberCVC.valid }} </p>


<!-- complete form validation and values -->

<p> Form Value: {{f.value | json}} </p>
<p> Form valid: {{ f.valid }} </p>



*/