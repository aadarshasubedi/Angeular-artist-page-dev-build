import { Component } from '@angular/core';
import { ArtistPostsComponent } from './artist-posts/artist-posts.component';
//import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { jqxBarGaugeComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxbargauge';
import { UserService } from './user.service';
import {Router} from '@angular/router';
import {HttpClientModule, HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {

  constructor(private keepUserLoggedIn: UserService, private router:Router, private user: UserService, private http: HttpClient){

    
  }
/* function in charge of gettign the chrf cookie */
results: string[];

getXHRFGetInit(){
  var Headers = new Headers();
  Headers.append('Application-Key', '6CAEA9D43AC5DF96CEF21C78A73A3');
  Headers.append('dataType', 'json');
console.log("Setting XHRF Cookie");
const getXRHF = this.http.get('https://s-test.wr1.com/pub/pre', {headers:Headers});
getXRHF.subscribe(data => {
  this.results = data['results'];
});
}


 
  ngOnInit() {
    console.log("XHRF");
    console.log(this.results);
this.getXHRFGetInit();
   console.log("[App.Component.ts] Is user logged in?", this.keepUserLoggedIn.getUserLoggedIn() );
  
  }
  title = '';
   values: number[] = [102, 115, 130, 137];
  
}

