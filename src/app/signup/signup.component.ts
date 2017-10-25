import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';
import { HttpModule, JsonpModule } from '@angular/http';
import {Http} from "@angular/http";
import {Headers} from '@angular/http';
import { Injectable, EventEmitter} from '@angular/core';
import 'rxjs';
// import club number from global variable
import * as clubIDG from '../club-chooser/club-chooser.component';
// General API data
var URL:String = "https://services-test.wr1.com/webapi/clubs";
// Implement headers for the api aws to get data with this secret key
var headers = new Headers();
headers.append('Application-Key', '6CAEA9D43AC5DF96CEF21C78A73A3');



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  goBack() {
    window.history.back();
}
error;
artistName;
  constructor(private http:Http) { }
// Fetch the artist name with the get api 
// get he artist Bakgroundrequest
getArtistWall(clubID){ 
var whatToGet = "data.club.name";
var headers = new Headers();
// add the headers
  headers.append('Application-Key', '6CAEA9D43AC5DF96CEF21C78A73A3');
  headers.append('dataType', 'json');
// wall url is over here
   return this.http.get('https://services-test.wr1.com/webapi/clubs/' + clubID + '/wall', {headers:headers})
   .map(res => res.json())
   .subscribe(data => this.artistName = JSON
   .stringify(data.club.name || { })
   .replace(/^"|"$/g, ''),
  err => this.logError(err),
  () => console.log('Arist backgrouns Image Loaded')
  ); 
  {  }
}
logError(err) { 
  console.error('There was an error: ' + err);
}
 
 // End get data api


  ngOnInit() {
     this.artistName = this.getArtistWall(clubIDG.clubIDGt);

  }

}
