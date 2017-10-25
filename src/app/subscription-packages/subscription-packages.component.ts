import { Component, OnInit, Input, Output} from '@angular/core';
import { AvatarComponent } from '../avatar/avatar.component';
import { ArtistNameComponent } from '../artist-name/artist-name.component';
import { Pipe, PipeTransform } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as jQuery from 'jquery';
import 'rxjs/add/operator/retry';

/* get club id */

import * as clubIDG from '../club-chooser/club-chooser.component';


/* Description filtering pipe */

/* Paralax parallax */
$(document).ready(function(){
    var $win = $(window);

    $('#BHTSPageWrapperID').each(function(){
        var scroll_speed = 5;
        var $this = $(this);
        $(window).scroll(function() {
            var bgScroll = -(($win.scrollTop() - $this.offset().top)/ scroll_speed);
            var bgPosition = 'center '+ bgScroll + 'px';
            $this.css({ backgroundPosition: bgPosition });
        });
    });
});

@Component({
  selector: 'app-subscription-packages',
  templateUrl: './subscription-packages.component.html',
  styleUrls: ['./subscription-packages.component.css']
})

/* @Input() chosenPackage: Object; */
export class SubscriptionPackagesComponent implements OnInit {    
  static description: any;

HideDescriptionStep2 = true;

HideStepOne = false;
packages;


chosenIndex;
testGLobal = "global data passed";
AnartistName = ArtistNameComponent;
@Input() chosenPackage:Object;



//$event will hold value and other reference.
showDescription(index, DescValue){
console.log("index packaged picked");
console.log(this.chosenPackage);
  console.log("the description value is: ");
  console.log(DescValue[index]);
  

this.chosenPackage = index;

console.log("thisssss");
console.log(this.chosenPackage);
console.log(index);
console.log("the packages are:")
console.log(this.packages['0'].packageDescription);
console.log("Package description with variable compression");
let selectedPackgeDescription = this.packages['0'].packageDescription;
console.log(selectedPackgeDescription);
  console.log("expored description");
  /* display the descrition now */
this.HideDescriptionStep2 = false;
this.HideStepOne = true;
this.chosenIndex = index;
console.log("Chosen Index:");
console.log(this.chosenIndex);


}
/*
interface SubscriptionResponse {
   
} */

getSUbscriptionDataFrmTheServer(clubID){

// get he artist Bakgroundrequest


} /* End of get subscription funciton */


/* Error handling */

logError(err) {
  console.error('There was an error: ' + err);
}

returnDescriptionForId(index){



}
  constructor(private http: HttpClient) { 


  }

  

  ngOnInit() {

    console.log("LoadedVIP");
  const description= this.packages;

    console.log("In constructor description variable: ");
    console.log(description);
    this.packages = [ 
      {
         'packageID':'0',
      'packageType': 'yearly',
      'packagePrice': '49.99',
      'longDescription':'Here will be a long description1',
      'packageTitle': 'Get a yearly subscription to this club',
     'packageDescription': 'Get a yearly subscription to this club',
      'clubID': '6',
      'clubImageURL': 'http://free4kwallpaper.com/wp-content/uploads/2016/02/Top-2016-Beyonce-4K-Wallpaper.jpg'
    },
      {
       'packageID':'1',
      'packageType': 'monthly',
      'packagePrice': '14.99',
      'longDescription':'Here will be a long description 2',
      'packageTitle': 'Get a monthly subscription to this club',
      'packageDescription': 'Get a monthly subscription to this club',
      'clubID': '6',
      'clubImageURL': 'http://free4kwallpaper.com/wp-content/uploads/2016/02/Top-2016-Beyonce-4K-Wallpaper.jpg'
    },      {
      'packageID':'2',
      'packageType': 'lifetime',
      'packagePrice': '150.99',
      'longDescription':'Here will be a long description 3',
      'packageTitle': 'Get a Lifetime subscription to this club',
      'packageDescription': 'Get a Lifetime subscription to this club',
      'clubID': '9',
      'clubImageURL': 'http://free4kwallpaper.com/wp-content/uploads/2016/02/Top-2016-Beyonce-4K-Wallpaper.jpg'
    }
    
    ];
    console.log("Test data parsing subscription packages");
    console.log(this.packages[0].packageDescription);



  }

}


export const chosenIndex = this.chosenIndex;