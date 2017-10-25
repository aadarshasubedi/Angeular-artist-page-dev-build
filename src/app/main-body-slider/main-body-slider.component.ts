import { Component, OnInit, Input } from '@angular/core';
import {BodyComponent} from '../body/body.component';
import * as jQuery from 'jquery';
import { HttpModule, JsonpModule } from '@angular/http';
import {Http} from "@angular/http";
import {Headers} from '@angular/http';
import { Injectable, EventEmitter} from '@angular/core';
import 'rxjs';
// import club number from global variable
import * as clubIDG from '../club-chooser/club-chooser.component';
import Parallax from 'parallax-js';

import { SlickModule } from 'ngx-slick';
/* Get http discover club api https://services-test.wr1.com/webapi/clubs/discover */

// Developed by Avi Tannenbaum for WR1
// API testing wall data
// Import the http request
import { requestOptionsProvider }   from '../http-connect.service';



/* Paralax parallax 
$(document).ready(function(){
    var $win = $(window);

    $('#BACKGROUNDArtist').each(function(){
        var scroll_speed = 20;
        var $this = $(this);
        $(window).scroll(function() {
            var bgScroll = -(($win.scrollTop() - $this.offset().top)/ scroll_speed);
            var bgPosition = 'center '+ bgScroll + 'px';
            $this.css({ backgroundPosition: bgPosition });
        });
    });
});*/

var scene = document.getElementById('scene');
@Component({
  selector: 'app-main-body-slider',
  templateUrl: './main-body-slider.component.html',
  styleUrls: ['./main-body-slider.component.css']
})
export class MainBodySliderComponent implements OnInit {

@Input() clubID: string;
  // create variable to exort to the template or html doc
WallDatabackground;
backgroundURL;

artBackground;
artistAvatar;
MoreSliders;
ShowMoreImageSliders = true;
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1};

ShowCallToAction = true;
  addSlide() {
    this.MoreSliders.push({img: "http://placehold.it/350x150/777777"})
  }

  removeSlide() {
    this.MoreSliders.length = this.MoreSliders.length - 1;
  }

  afterChange(e) {
  }
// the consrucer is over here
  constructor(private http: Http) { }
// get he artist Bakgroundrequest
getArtistWall(clubID){
var headers = new Headers();
  headers.append('Application-Key', '6CAEA9D43AC5DF96CEF21C78A73A3');
  headers.append('dataType', 'json');
// wall url is over here
   var clubWallBackground = this.http.get('https://services-test.wr1.com/webapi/clubs/' + clubID + '/wall', {headers:headers}).map(
    res => res.json()).subscribe(
    data => this.WallDatabackground = JSON.stringify(data.club.backgroundUrl), 
  err => this.logError(err),
  () => console.log('Arist backgrouns Image Loaded') ); 
  {}

  
}



logError(err) {
  console.error('There was an error: ' + err);
}
 
  ngOnInit() {

    /* more slider images */
/* https://wr1test.imgix.net/490/3DE051D1-CDF8-4527-A879-C26F7720CF43.JPG */
    this.MoreSliders = [
      {
           "imageID": "0",
        "imageTitle": "Ariana Grande First image",
        "ImageURL": "http://www.billboard.com/files/media/Ariana-Grande-press-photo-2014-billboard-1548-a.jpg"
        
      },
         {
          "imageID": "1",
        "imageTitle": "Rihanna Second image",
        "ImageURL": "http://4.bp.blogspot.com/-KUe41Y2oUq0/VncIYJqQOvI/AAAAAAAABRs/As88MdTrCM4/w1200-h630-p-k-no-nu/bbhmm.jpg"
      },
               {
          "imageID": "2",
        "imageTitle": "Rihanna Second image",
        "ImageURL": "http://4.bp.blogspot.com/-KUe41Y2oUq0/VncIYJqQOvI/AAAAAAAABRs/As88MdTrCM4/w1200-h630-p-k-no-nu/bbhmm.jpg"
      },

               {
          "imageID": "3",
        "imageTitle": "Rihanna Second image",
        "ImageURL": "http://4.bp.blogspot.com/-KUe41Y2oUq0/VncIYJqQOvI/AAAAAAAABRs/As88MdTrCM4/w1200-h630-p-k-no-nu/bbhmm.jpg"
      },

               {
          "imageID": "4",
        "imageTitle": "Rihanna Second image",
        "ImageURL": "http://4.bp.blogspot.com/-KUe41Y2oUq0/VncIYJqQOvI/AAAAAAAABRs/As88MdTrCM4/w1200-h630-p-k-no-nu/bbhmm.jpg"
      },



    ];


console.log('this data is ' + this.WallDatabackground);
// get the actual background url data from the angular data
if(this.WallDatabackground ==  "") {
  console.log('No background image adding default');
  this.WallDatabackground = "https://wr1test.imgix.net/images/webWR1DefaultImages/explore_profile_image_placeholder_3x_1024.png";
} else {
this.WallDatabackground = this.artBackground;

this.WallDatabackground = [];
this.WallDatabackground = this.getArtistWall(clubIDG.clubIDGt);

  }
  }
}
