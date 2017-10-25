import { Component, OnInit } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgForm} from '@angular/forms';
import { NgModule } from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';

//Import subscription elelemts
import {ChooseAVipPackageComponent} from '../choose-avip-package/choose-avip-package.component';
// import stripe
import {ChosenPackageStripeSignupComponent} from '../chosen-package-stripe-signup/chosen-package-stripe-signup.component';
// importsuccess
import {ChosenPackageSuccessSignupFormComponent} from '../chosen-package-success-signup-form/chosen-package-success-signup-form.component';



@Component({
  selector: 'app-vip-form-manager',
  templateUrl: './vip-form-manager.component.html',
  styleUrls: ['./vip-form-manager.component.css']
})
export class VipFormManagerComponent implements OnInit {
  /* Default active contorl mehtods */
isNotActive = true;
  isActive = false;


Step2Payment = true;
Step3Success = true;

  constructor(public packageSelectElement: ChooseAVipPackageComponent, private stripeFromInfo: ChosenPackageStripeSignupComponent , private SuccessForm: ChosenPackageSuccessSignupFormComponent, private _router: Router, private _route: ActivatedRoute) { }




  ngOnInit() {

    
    console.log("the package selected for the vip form manager: ");
    console.log(this.packageSelectElement)
    this.Step2Payment = this.isNotActive;
    this.Step3Success = this.isNotActive;
    
  }

}
