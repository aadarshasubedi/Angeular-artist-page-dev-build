
// Import the needed dependencys
import { Component, OnInit, Input, Output } from '@angular/core';
import * as jQuery from 'jquery';
import { HttpModule, JsonpModule } from '@angular/http';
import {Headers} from '@angular/http';
import { Injectable, EventEmitter} from '@angular/core';
import 'rxjs';
// import club number from global variable
import * as clubIDG from '../club-chooser/club-chooser.component';

// Developed by Avi Tannenbaum for WR1
// API testing post data
// Import the http request
import { requestOptionsProvider }   from '../http-connect.service';
import 'rxjs/add/operator/retry';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'

import { SlickModule } from 'ngx-slick';
/* Get http discover club api https://services-test.wr1.com/webapi/clubs/discover */

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';






/* Paralax parallax */
$(document).ready(function(){
    var $win = $(window);

    $('#BHTCContentPageParalaxID').each(function(){
        var scroll_speed = 6;
        var $this = $(this);
        $(window).scroll(function() {
            var bgScroll = -(($win.scrollTop() - $this.offset().top)/ scroll_speed);
            var bgPosition = 'center '+ bgScroll + 'px';
            $this.css({ backgroundPosition: bgPosition });
        });
    });
});


@Component({
  selector: 'app-behind-the-scenes-content',
  templateUrl: './behind-the-scenes-content.component.html',
  styleUrls: ['./behind-the-scenes-content.component.css']
})
@Injectable()
export class BehindTheScenesContentComponent implements OnInit {

  slideConfig = {"slidesToShow": 6, "slidesToScroll": 1, "autoplay": true, "autoplaySpeed": 1000, "pauseOnHover": true};
 
  addSlide() {
    this.Testvideos.push({placeholderURL: "https://wr1test.imgix.net/83/8E4EB7DC-2381-4E27-A3CC-97CF4871F8B2.JPG"})
  }
 
  doubleCLickedSoShowTheVIPModule(){
console.log("DoubleClicked");
   window.location.href = "#vip";
  }


  removeSlide() {
    this.Testvideos.length = this.Testvideos.length - 1;
  }
 
  afterChange(e) {

  }
  itemBackground;
  poster;
  HideThisOnCLick = true;
thisIsPayedContent = false;
thisIsImageMediaType = false;
  Testvideos;
  discoverWall: string[];
  @Input() clubID: string;
  // create variable to exort to the template or html doc
  HideFree =false;
  // ===== // Video // ====== //
            GOtext; // For text description
            GOthumbnailUrl; // for video thumbnale url
            GOtimestamp; // the timestamo if the post date -- single value needs to be seperated
            title; // Title of the post
            type; // "VIDEO", "IMAGE", "Audio"  -- The data type for post reader filter 
            unlockByUser; //Display payed content or not -- Leave false by default for free function filter
            url; // The actual content url
            userId; //Posters user id 
            width; // The default width for the video that was originally posted
goingOnNowContents; // main whats going on post content templat variable

results: string[];
 list;

//
  constructor(private http: HttpClient) { }
resultsImages="";

mediaTypeHandler(sortMediaType){

  if (sortMediaType == 'IMAGE'){
        this.thisIsImageMediaType = true;
     return this.thisIsImageMediaType; 
  }
 


}

/* filter incoming data json and filter out IMAGES type */

 
showItsPayedContent(ispayedJson){
  if (ispayedJson == 'PAID'){
    this.thisIsPayedContent = false;
      console.log("This is payed content and will be deisplayed button");

     return this.thisIsPayedContent; 
}

}

mouseHasLeftTheBuilding(){
 this.HideThisOnCLick = true;


}

hideLabel(){
 this.HideThisOnCLick = false;

}

isPayed(ispayedJson){

  if (ispayedJson == 'PAID'){
    this.thisIsPayedContent = true;
     return this.thisIsPayedContent; 
}
 



}

applyFreeFIlter(ispayedJson){
  
  if (ispayedJson !== 'PAID'){
    this.thisIsPayedContent = false;
    return this.thisIsPayedContent; 
   
}
  }
  ngOnInit(): void  {
// Set the background for the object here
this.itemBackground = "https://wr1test.imgix.net/webassets/concertcopy.png";

console.log("club posts for arianan loaded here");
/* Get artist lates feed api : posts/?source=artist */
console.log('https://services-test.wr1.com/webapi/clubs/' + clubIDG.clubIDGt + '/posts/?source=artist');
this.Testvideos = this.http.get('https://services-test.wr1.com/webapi/clubs/' + clubIDG.clubIDGt + '/posts/?source=artist', {

    headers: new HttpHeaders().set('Application-Key', '6CAEA9D43AC5DF96CEF21C78A73A3'),


}).subscribe(


    data => {

        this.Testvideos = data['posts'];
          console.log("The discover wall json data is:333");
         console.log(this.Testvideos);
     
        console.log("The discover wall json data is:444 ");
                console.log(data['posts'][1]);
     
    }
);
   console.log(this.discoverWall);


      
  console.log("The discover wall json data is:222");
         console.log(this.Testvideos);
    
    /*
interface ItemsResponse {
  results: string[];
}

    // make teh HTTP request:

   const req = this.http.get <ItemsResponse>('https://services-test.wr1.com/webapi/clubs/discover', {
 
    observe: 'response',
    headers: new HttpHeaders().set('Application-Key','6CAEA9D43AC5DF96CEF21C78A73A3')});

   req.subscribe(resp => {
    resp.body;
       console.log("result recieved "+ resp.body);

   });
  
*/







    // Make the HTTP request:
    this.http.get('https://services-test.wr1.com/webapi/clubs/discover', {
 
    observe: 'response',
    headers: new HttpHeaders().set('Application-Key','6CAEA9D43AC5DF96CEF21C78A73A3')}).subscribe(data => {
      // Read the result field from the JSON response.
      this.goingOnNowContents = data.body['posts'];
      console.log('helohelo');
      console.log(this.goingOnNowContents);
    });

    
/*

            this.goingOnNowContents = [

      {
        
        image: 'https://s-media-cache-ak0.pinimg.com/236x/83/80/13/83801388266318f566c5bbac2cfa0c4a.jpg'
      },
       {
        image: 'http://ell.h-cdn.co/assets/cm/14/52/549b4f3aefb5a_-_elle-ed-sheeran-v-elv.jpg'
      },
       {
        image: 'https://s-media-cache-ak0.pinimg.com/236x/83/80/13/83801388266318f566c5bbac2cfa0c4a.jpg'
      },
       {
        image: 'http://edsheeranbr.com/wp-content/uploads/2014/02/Ed-e-Paul-McCartney.jpg'
      },
   
    
     
    ]; */

  }

/* get images */
  appendContent() {
       this.http.get('https://services-test.wr1.com/webapi/clubs/discover', {
 
    observe: 'response',
    headers: new HttpHeaders().set('Application-Key','6CAEA9D43AC5DF96CEF21C78A73A3')}).subscribe(data => {
/*
      for (let i=0; i < data.length; i++){


      } */
      // Read the result field from the JSON response.
      this.goingOnNowContents = data.body['posts'];
      console.log('helohelo');
      console.log(this.goingOnNowContents);
    });
  }

}
