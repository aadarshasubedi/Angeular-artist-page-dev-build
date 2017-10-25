import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secret-stripe-keys',
  templateUrl: './secret-stripe-keys.component.html',
  styleUrls: ['./secret-stripe-keys.component.css'],
  
})
export class SecretStripeKeysComponent implements OnInit {

  // secret stripe keys are here
  stripeTestAPI = 'pk_test_oi0sKPJYLGjdvOXOM8tE8cMa';
  stripeProdAPI = 'pk_test_oi0sKPJYLGjdvOXOM8tE8cMa';


  constructor() { }

  ngOnInit() {
  }

}
