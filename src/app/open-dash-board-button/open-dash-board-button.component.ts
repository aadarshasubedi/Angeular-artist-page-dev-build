import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';


/* Declare the functions for angular */



/* place the dashboard on the correct side */




$(document).ready(function(){
    $("#openDashboardButton").click(function(){
        $("#openDashboardModal").animate({
            width: 'toggle'
        });
    });
});

@Component({
  selector: 'app-open-dash-board-button',
  templateUrl: './open-dash-board-button.component.html',
  styleUrls: ['./open-dash-board-button.component.css']
})

/* JS Event listeners */

export class OpenDashBoardButtonComponent implements OnInit {
/* Set the default width iof tge dashboard function  */
 openNav() {
   var dashboardButton = document.getElementById("openDashboardModal").style.width = "300px";

   var dashboardButton = document.getElementById("openDashboardModal").style.marginRight = "300px";
} 

/* Function in charge of closing the dashboard */

 closeNav(){
    document.getElementById("openDashboardModal").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
}

  constructor() { }

  ngOnInit() {
  }

}
