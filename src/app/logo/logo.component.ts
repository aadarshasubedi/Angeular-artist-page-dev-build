
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

// General API data
var URL:String = "https://services-test.wr1.com/webapi/clubs";
// Implement headers for the api aws to get data with this secret key
var headers = new Headers();
headers.append('Application-Key', '6CAEA9D43AC5DF96CEF21C78A73A3');

@Injectable()

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
@Input() clubID: string;

artistLogoText;
artistLogoIMG;
  constructor(public http: Http) { }

// get he artist Bakgroundrequest
getArtistWall(clubID, type){
  // check the type of input to devide the dependencies to two
  if(type == "artistLogoText"){
   
var headers = new Headers();
  headers.append('Application-Key', '6CAEA9D43AC5DF96CEF21C78A73A3');
  headers.append('dataType', 'json');
// wall url is over here
   var artistLogoText = this.http.get('https://services-test.wr1.com/webapi/clubs/' + clubID + '/wall', {headers:headers}).map(
    res => res.json()).subscribe(
      data => this.artistLogoText = JSON.stringify(data.club.name).replace(/^"|"$/g, ''), 

  err => this.logError(err),
  () => console.log('Arist artist logo text Loaded') ); 
  {}
} else {


  var artistLogoIMG = this.http.get('https://services-test.wr1.com/webapi/clubs/' + clubID + '/wall', {headers:headers}).map(
    res => res.json()).subscribe(
      data => this.artistLogoIMG = JSON.stringify(data.club.logoUrl).replace(/^"|"$/g, ''), 

  err => this.logError(err),
  () => console.log('Arist artist logo text Loaded') ); 
  {}
}
  



}

logError(err) {
  console.error('There was an error: ' + err);
}
 
  ngOnInit() {
this.artistLogoText = this.artistLogoText;
    this.artistLogoText = this.getArtistWall(clubIDG.clubIDGt, 'artistLogoText');
this.artistLogoIMG = this.artistLogoIMG;

    this.artistLogoIMG = this.getArtistWall(clubIDG.clubIDGt, 'artistLogoIMG');
  }

}
