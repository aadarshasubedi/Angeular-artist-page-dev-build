import { Component, OnInit, Input, 
    trigger, state, animate, transition, style  } from '@angular/core';
import { SubscriptionPackagesComponent } from '../subscription-packages/subscription-packages.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-package-description-block',
  templateUrl: './package-description-block.component.html',
  animations: [
  trigger('visibilityChanged', [
      state('shown' , style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('* => *', animate('.5s'))
    ])


  ],
  styleUrls: ['./package-description-block.component.css']
})
/* @Input() chosenPackage: Object; */

export class PackageDescriptionBlockComponent implements OnInit {
   visibility = 'shown';
   selectedPackage = this.subcontroller.chosenPackage;
  @Input() isVisible : boolean = true;
@Input() chosenPackage:Object;



  ngOnChanges() {
    
     this.visibility = this.isVisible ? 'shown' : 'hidden';
  }
  GoBackToStepOneH = false;
 GoBackToStepOne(){
  this.GoBackToStepOneH = true;
   console.log("Back Button Presssed");
   this.subcontroller.HideStepOne = false;
   this.subcontroller.HideDescriptionStep2 = true;
 }
description;
showDescription(){

  console.log("expored description from submodule");
}
  constructor(private subcontroller:SubscriptionPackagesComponent) { }

  ngOnInit() {

    this.description = this.subcontroller.chosenIndex;
  }

}
