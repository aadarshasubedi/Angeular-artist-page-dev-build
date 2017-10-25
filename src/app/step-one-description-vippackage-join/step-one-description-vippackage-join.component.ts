import { Component, OnInit } from '@angular/core';
import { SubscriptionPackagesComponent } from '../subscription-packages/subscription-packages.component';



@Component({
  selector: 'app-step-one-description-vippackage-join',
  templateUrl: './step-one-description-vippackage-join.component.html',
  styleUrls: ['./step-one-description-vippackage-join.component.css']
})
export class StepOneDescriptionVIPPackageJoinComponent implements OnInit {
description2;
HideStepOne;
description;
  constructor(private descriptionGLobal:SubscriptionPackagesComponent) { 


   // this.description2 = this.descriptionGLobal.packages[1].packageDescription;
   
  }

  ngOnInit() {
    this.description = this.descriptionGLobal.packages;
     console.log("Second Description: ");
    console.log(this.descriptionGLobal.packages[1].packageDescription);
  }

}
