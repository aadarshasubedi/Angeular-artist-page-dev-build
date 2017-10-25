import { Component, OnInit, ElementRef } from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute, NavigationEnd, Params } from '@angular/router';


@Component({
  selector: 'app-form-package-chooser-signup',
  templateUrl: './form-package-chooser-signup.component.html',
  styleUrls: ['./form-package-chooser-signup.component.css']
})




export class FormPackageChooserSignupComponent implements OnInit {

  constructor( private _router: Router, private _route: ActivatedRoute, private _ElementRef: ElementRef) { 

    _router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        const tree = _router.parseUrl(_router.url);
        if (tree.fragment) {
          const element = document.querySelector("#" + tree.fragment);
          if (element) { element.scrollIntoView(true); }
        }
      }
    });
   
  }
  
  setStyle(){


    
    
  }
  go() {
  /*  var elem = document.getElementsByClassName("modalVIPDialog").setAttribute("class", "democlass"); */
    console.log("[Opening the VIP Section now from external URL");
   // this._router.navigate(['../'], { fragment: 'vip' });
  }
  ngOnInit() {
   // window.location.href = "#vip";
    this.go();
    const incomingtoken = this._route.queryParamMap.subscribe((params: Params) => {
      console.log(params); 
      // this will be called every time route changes
      // so you can perform your functionality here

    });
    console.log("Incoming Token is: ");
    console.log(incomingtoken);
  }

}

