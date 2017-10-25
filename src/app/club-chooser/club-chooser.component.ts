// Import the needed dependencys
import { Component, OnInit, Input, Output } from '@angular/core';
import * as jQuery from 'jquery';
import {Router, Params} from '@angular/router';

import { HttpModule, JsonpModule } from '@angular/http';
import {Http, RequestOptions, URLSearchParams} from "@angular/http";
import {Headers} from '@angular/http';
import { Injectable, EventEmitter} from '@angular/core';
import 'rxjs';
// import club number from global variable
import * as clubIDG from '../club-chooser/club-chooser.component';
import {ActivatedRoute} from '@angular/router';

 this.clubID = 7;


// get list of clubs https://services-test.wr1.com/webapi/clubs
@Component({
  selector: 'app-club-chooser',
  templateUrl: './club-chooser.component.html',
  // impliment the pipe filter
 
  styleUrls: ['./club-chooser.component.css']
})
@Injectable()


export class ClubChooserComponent implements OnInit {
clubIDInput;

@Input() DefaultChosenClub;

id = '';

  constructor(private http: Http, private route: ActivatedRoute) { 
  }

  clubID;
  DirectTOClub(){
  
    var clubID = this.clubIDInput;
    console.log("Club ID Chosen " + this.clubIDInput);

    console.log("Vlue passed from input is" + this.DefaultChosenClub);
  }
  
/*
getClubIDs(){
  var headers = new Headers();
  headers.append('Application-Key', '6CAEA9D43AC5DF96CEF21C78A73A3');
  headers.append('dataType', 'json');
  return this.http
   .get('https://services-test.wr1.com/webapi/clubs',  {headers:headers})
   .map(response => response.json())
   .subscribe(data => this.clubIdList = JSON.stringify(data.clubs),
   err=> this.logError(err),
   () => console.log('COuld not load club ids'));
}
*/

 // set the initial app code running
  ngOnInit() {
    // Capture the access token and code


// do something with this.code and this.accesstoken
    console.log("club chosen"+ this.clubIDInput);
    console.log("Param Chosen " + this.route.snapshot.params.id);
    this.clubIDInput = this.route.snapshot.params.id;
    if (this.id) this.id = 'not passed???'
    console.log(this.route);

    
  }



}


export const clubIDGt = this.clubID;

console.log("Exported club ID " + this.clubIDGt);



