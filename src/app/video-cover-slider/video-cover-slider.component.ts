import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl} from '@angular/platform-browser';
import {Pipe} from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';
import * as jQuery from 'jquery';
import {Image} from '../image';
import {Videos} from '../videos';
import { SlickModule } from 'ngx-slick';
/* Get http discover club api https://services-test.wr1.com/webapi/clubs/discover */

import { HttpClient, HttpHeaders } from '@angular/common/http';




@Component({
  selector: 'app-video-cover-slider',
  templateUrl: './video-cover-slider.component.html',
  styleUrls: ['./video-cover-slider.component.css']
})


export class VideoCoverSliderComponent implements OnInit {
// add some videos
equialslideconfigNumber = 1; // Change here for front end control variable

  slideConfig = {"slidesToShow": this.equialslideconfigNumber, "slidesToScroll": this.equialslideconfigNumber, "autoplay": true, "autoplaySpeed": 2000, "pauseOnHover": false};
 
  addSlide() {
    this.Testvideos.push({placeholderURL: "https://wr1test.imgix.net/83/8E4EB7DC-2381-4E27-A3CC-97CF4871F8B2.JPG"})
  }
 
  removeSlide() {
    this.Testvideos.length = this.Testvideos.length - 1;
  }
 
  afterChange(e) {
  }

videoUrl;
dangerousVideoUrl;
vimeoUrl;
youtubeUrl;
dailymotionUrl;
vimeoId;
youtubeId;
dailymotionId;

Testvideos;
  discoverWall: string[];


  constructor(private _sanitizer: DomSanitizer,  embedService: EmbedVideoService, private sanitizer: DomSanitizer, private http: HttpClient ) { 

  this.Testvideos = this._sanitizer.bypassSecurityTrustResourceUrl(this.Testvideos);
    
  }





  ngOnInit() {

this.Testvideos = this.http.get('https://services-test.wr1.com/webapi/clubs/discover', {

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
    
        /*[
{
    text: "Test Slider Title 1",
	vimeoUrl : "https://vimeo.com/197933516",
    youtubeUrl : "https://www.youtube.com/watch?v=iHhcHTlGtRs",
    dailymotionUrl : "https://www.dailymotion.com/video/x20qnej_red-bull-presents-wild-ride-bmx-mtb-dirt_sport",
    vimeoId : "197933516",
    youtubeId : "iHhcHTlGtRs",
    dailymotionId : "x20qnej",
    placeholderURL: "https://wr1test.imgix.net/83/8E4EB7DC-2381-4E27-A3CC-97CF4871F8B2.JPG"
},
{
    text: "Test Slider Title 1",
	vimeoUrl : "https://vimeo.com/197933516",
    youtubeUrl : "https://www.youtube.com/watch?v=iHhcHTlGtRs",
    dailymotionUrl : "https://www.dailymotion.com/video/x20qnej_red-bull-presents-wild-ride-bmx-mtb-dirt_sport",
    vimeoId : "197933516",
    youtubeId : "iHhcHTlGtRs",
    dailymotionId : "x20qnej",
    placeholderURL: "https://wr1test.imgix.net/83/8E4EB7DC-2381-4E27-A3CC-97CF4871F8B2.JPG"
},{
    text: "Test Slider Title 1",
	vimeoUrl : "https://vimeo.com/197933516",
    youtubeUrl : "https://www.youtube.com/watch?v=iHhcHTlGtRs",
    dailymotionUrl : "https://www.dailymotion.com/video/x20qnej_red-bull-presents-wild-ride-bmx-mtb-dirt_sport",
    vimeoId : "197933516",
    youtubeId : "iHhcHTlGtRs",
    dailymotionId : "x20qnej",
    placeholderURL: "https://wr1test.imgix.net/83/8E4EB7DC-2381-4E27-A3CC-97CF4871F8B2.JPG"
},{
    text: "Test Slider Title 1",
	vimeoUrl : "https://vimeo.com/197933516",
    youtubeUrl : "https://www.youtube.com/watch?v=iHhcHTlGtRs",
    dailymotionUrl : "https://www.dailymotion.com/video/x20qnej_red-bull-presents-wild-ride-bmx-mtb-dirt_sport",
    vimeoId : "197933516",
    youtubeId : "iHhcHTlGtRs",
    dailymotionId : "x20qnej",
    placeholderURL: "https://wr1test.imgix.net/83/8E4EB7DC-2381-4E27-A3CC-97CF4871F8B2.JPG"
},{
    text: "Test Slider Title 1",
	vimeoUrl : "https://vimeo.com/197933516",
    youtubeUrl : "https://www.youtube.com/watch?v=iHhcHTlGtRs",
    dailymotionUrl : "https://www.dailymotion.com/video/x20qnej_red-bull-presents-wild-ride-bmx-mtb-dirt_sport",
    vimeoId : "197933516",
    youtubeId : "iHhcHTlGtRs",
    dailymotionId : "x20qnej",
    placeholderURL: "https://wr1test.imgix.net/83/8E4EB7DC-2381-4E27-A3CC-97CF4871F8B2.JPG"
},{
    text: "Test Slider Title 1",
	vimeoUrl : "https://vimeo.com/197933516",
    youtubeUrl : "https://www.youtube.com/watch?v=iHhcHTlGtRs",
    dailymotionUrl : "https://www.dailymotion.com/video/x20qnej_red-bull-presents-wild-ride-bmx-mtb-dirt_sport",
    vimeoId : "197933516",
    youtubeId : "iHhcHTlGtRs",
    dailymotionId : "x20qnej",
    placeholderURL: "https://wr1test.imgix.net/83/8E4EB7DC-2381-4E27-A3CC-97CF4871F8B2.JPG"
},{
    text: "Test Slider Title 1",
	vimeoUrl : "https://vimeo.com/197933516",
    youtubeUrl : "https://www.youtube.com/watch?v=iHhcHTlGtRs",
    dailymotionUrl : "https://www.dailymotion.com/video/x20qnej_red-bull-presents-wild-ride-bmx-mtb-dirt_sport",
    vimeoId : "197933516",
    youtubeId : "iHhcHTlGtRs",
    dailymotionId : "x20qnej",
    placeholderURL: "https://wr1test.imgix.net/83/8E4EB7DC-2381-4E27-A3CC-97CF4871F8B2.JPG"
},{
    text: "Test Slider Title 1",
	vimeoUrl : "https://vimeo.com/197933516",
    youtubeUrl : "https://www.youtube.com/watch?v=iHhcHTlGtRs",
    dailymotionUrl : "https://www.dailymotion.com/video/x20qnej_red-bull-presents-wild-ride-bmx-mtb-dirt_sport",
    vimeoId : "197933516",
    youtubeId : "iHhcHTlGtRs",
    dailymotionId : "x20qnej",
    placeholderURL: "https://wr1test.imgix.net/83/8E4EB7DC-2381-4E27-A3CC-97CF4871F8B2.JPG"
},
];
  
*/
  

  }
  

}


var VIDEOS: Videos[] = [
{ "title": "First Video Title", "url": "https://wr1test.imgix.net/83/8E4EB7DC-2381-4E27-A3CC-97CF4871F8B2.JPG"},
{ "title": "Second Video Title", "url": "https://wr1test.imgix.net/83/8E4EB7DC-2381-4E27-A3CC-97CF4871F8B2.JPG"},
{ "title": "Third Video Title", "url": "https://wr1test.imgix.net/83/8E4EB7DC-2381-4E27-A3CC-97CF4871F8B2.JPG"},
{ "title": "Fourth Video Title", "url": "https://wr1test.imgix.net/83/8E4EB7DC-2381-4E27-A3CC-97CF4871F8B2.JPG"},
{ "title": "Fifth Video Title", "url": "https://wr1test.imgix.net/83/8E4EB7DC-2381-4E27-A3CC-97CF4871F8B2.JPG"},
{ "title": "Sixth Video Title", "url": "https://wr1test.imgix.net/83/8E4EB7DC-2381-4E27-A3CC-97CF4871F8B2.JPG"},
{ "title": "Seventh Video Title", "url": "https://wr1test.imgix.net/83/8E4EB7DC-2381-4E27-A3CC-97CF4871F8B2.JPG"},

];