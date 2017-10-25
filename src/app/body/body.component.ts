
// Import the needed dependencys
import { Component, OnInit, Input, Output } from '@angular/core';
import * as jQuery from 'jquery';
import { HttpModule, JsonpModule } from '@angular/http';
import {Http} from "@angular/http";
import {Headers} from '@angular/http';
import { Injectable, EventEmitter} from '@angular/core';
import 'rxjs';
// import club number from global variable
import * as clubIDG from '../club-chooser/club-chooser.component';





// Developed by Avi Tannenbaum for WR1
// API testing wall data
// Import the http request
import { requestOptionsProvider }   from '../http-connect.service';






/* Paralax parallax 
$(document).ready(function(){
    var $win = $(window);

    $('#BACKGROUNDArtist').each(function(){
        var scroll_speed = 0.2;
        var $this = $(this);
        $(window).scroll(function() {
            var bgScroll = -(($win.scrollTop() - $this.offset().top)/ scroll_speed);
            var bgPosition = 'center '+ bgScroll + 'px';
            $this.css({ backgroundPosition: bgPosition });
        });
    }); */

// display the nessesary componentns for the angular cli
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})


/* json for wall */

/*
{"type":"clubWallResponse","status":{"errorCode":200,"serverTimestamp":1498492968180},"club":{"adminUserIds":[5],"artistId":5,"avatarUrl":"https://wr1test.imgix.net/5/02DBA0F0-A065-4C7E-AF9C-6CE3626ACBA4.JPG","backgroundUrl":"https://wr1test.imgix.net/5/FC1B61B5-936F-48A7-A734-F44E73EA13C3.JPG","banner":"FIRST LOOK AT MY NEW MUSIC VIDEO","description":"Beyonce","fanFeedLabel":"Fan Feed","id":5,"location":{"area":"Karnataka","country":"India","latitude":12.983969157041,"locality":"Bengaluru","longitude":77.623464861875,"subArea":"Bengaluru Urban"},"name":"Beyonce","owner":{"avatarUrl":"https://wr1test.imgix.net/5/02DBA0F0-A065-4C7E-AF9C-6CE3626ACBA4.JPG","backgroundUrl":"https://wr1test.imgix.net/5/FC1B61B5-936F-48A7-A734-F44E73EA13C3.JPG","id":5,"location":{"area":"Karnataka","country":"India","latitude":12.983969157041,"locality":"Bengaluru","longitude":77.623464861875,"subArea":"Bengaluru Urban"},"name":"Beyonce","notificationSetting":{"artistPost":true,"clubs":[],"fanPost":true,"postCommented":true,"postLiked":true,"streamPost":true},"quickBloxId":3228529,"subscriptionExpiration":0,"totalCoins":0},"splashUrl":"https://wr1test.imgix.net/5/FC1B61B5-936F-48A7-A734-F44E73EA13C3.JPG","stats":{"activities":134,"followers":1,"payingSubscribers":0,"subscribers":0},"streaming":false,"subscriptionProductIds":["com.wr1.ios.auto.1month","com.wr1.ios.auto.monthly"],"uploading":false,"url":"https://wr1test.imgix.net/5/FC1B61B5-936F-48A7-A734-F44E73EA13C3.JPG"}} 



*/

// injextable for the http.get headers




/*
export class mainArtistPageData {
  constructor(
     public backgroundUrl: string, // The artists background URL from the API {{backgroundUrl}}
     public avatarUrl: string, // The artist avatar profile picture from the API {{ avatarUrl}}
     public banner: string // The artist banner text from the API {{banner}} - AT
  ){}
}
*/
@Injectable()



export class BodyComponent implements OnInit {
  // get the club id

// add some videos
equialslideconfigNumber = 1; // Change here for front end control variable

  slideConfig = {"slidesToShow": this.equialslideconfigNumber, "slidesToScroll": this.equialslideconfigNumber, "autoplay": true, "autoplaySpeed": 4000, "pauseOnHover": false, "variableWidth": true};

  afterChange(e) {
  }



@Input() clubID: string;
  // create variable to exort to the template or html doc
WallDatabackground;
backgroundURL;
artBackground;
artistAvatar;
MoreSliders;
ShowMoreImageSliders = true;


ShowCallToAction = false;

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

    this.MoreSliders = [
      {
           "imageID": "0",
        "imageTitle": "Katy Perry First image",
        "ImageURL": "http://www.etonline.com/sites/default/files/images/2017-07/1280_KPHostTuneIn.png"
      },
         {
          "imageID": "1",
        "imageTitle": "Katy Perry Second image",
        "ImageURL": "https://www.katyperry.com/files/2017/03/TOUR_MASTER_DESKTOP.jpg"
      },
      {
        "imageID": "2",
      "imageTitle": "Katy Perry Third image",
      "ImageURL": "https://cdn.wittyfeed.com/33707/rcty7xf5rxggoapmxw78.jpeg"
    },
    {
      "imageID": "3",
    "imageTitle": "Katy Perry Fourth image",
    "ImageURL": "https://www.katyperry.com/files/2017/06/SHOT_03_017_final-copy-KP.jpg"
  },
  {
    "imageID": "4",
  "imageTitle": "Katy Perry Fifth image",
  "ImageURL": "https://i.ytimg.com/vi/CevxZvSJLk8/maxresdefault.jpg"
},
{
  "imageID": "5",
"imageTitle": "Katy Perry Sixths image",
"ImageURL": "https://i.ytimg.com/vi/CevxZvSJLk8/maxresdefault.jpg"
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

/*
// the genral artist wall GET method api daata with header implementation (sample wall 7)
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://services-test.wr1.com/webapi/clubs/7/wall",
  "Host":"http://localhost:4205",
  "method": "GET",
  // add the aplication key
  "headers": {
      "Application-Key": "6CAEA9D43AC5DF96CEF21C78A73A3",
     
   
  }
}


// for URL Testing 
// alert("Getting the api from: " + URL + "/");


//
// chekc the the json file struction get call is corect using this ajax function
$.ajax(settings).done(function (response) {

// check the console to see he background url
console.log(response.club.backgroundUrl);

});

*/