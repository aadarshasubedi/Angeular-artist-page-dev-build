import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';
import { UserService } from '../user.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
widgets;
subWidgets;
OpenSubWidget = false;


//Sub widget artist cms handlers


openPageEditConsole(){
console.log("Checking user permmision");
// CHekc the user permission here 

// if user is authorised -> allow content editing

console.log("User is authorized to use the console.");
//display the user artist page console hee window.location
console.log("Opening the page editing console now...");
this.OpenSubWidget = true;
alert("Artist CMS will be displayed here shortly. Costomize your pages fonts colors images slides videos and more!... -- Only on WR1!");

}


GoBack(){
  console.log("Going back to main widgets area");
  this.OpenSubWidget = false;
}




  constructor(private user: UserService) { }
  name = "anonymouse";
  ngOnInit() {

this.name = this.user.username;
console.log("Dashboard user is: " + this.name);
   
    this.widgets = [
{
  "widgetCode": "1",
  "widgetcode": "analyitics" //Existing component selector tag within the angular cli system
},
{
  "widgetCode": "2",
  "widgetcode": "clubChoose" //Existing component selector tag within the angular cli system
},
{
  "widgetCode": "3",
  "widgetcode": "userAccount" //Existing component selector tag within the angular cli system
},
{
  "widgetCode": "4",
  "widgetcode": "pageEdit" //Existing component selector tag within the angular cli system
}



    ];

        this.subWidgets = [
{
  "widgetCode": "1",
  "widgetcode": "analyitics" //Existing component selector tag within the angular cli system
},
{
  "widgetCode": "2",
  "widgetcode": "clubChoose" //Existing component selector tag within the angular cli system
},
{
  "widgetCode": "3",
  "widgetcode": "userAccount" //Existing component selector tag within the angular cli system
},
{
  "widgetCode": "4",
  "widgetcode": "pageEditConsole" //Existing component selector tag within the angular cli system
}



    ];

  }

}
