import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';


/*
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://services-test.wr1.com/webapi/clubs/7/wall",
  "Host":"http://localhost:4205",
  "method": "GET",
  
  "headers": {
      "Application-Key": "6CAEA9D43AC5DF96CEF21C78A73A3"
   
  }
}

$.ajax(settings).done(function (response) {

response.club.backgroundUrl;

});

*/









@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {
backgroundURL;


  constructor() { }

  ngOnInit() {

   //return this.backgroundURL = $.ajax(settings).done(function (response) {

//response.club.backgroundUrl;

//});
  }

}
