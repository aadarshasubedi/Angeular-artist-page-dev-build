import { Component, OnInit } from '@angular/core';
import { MenuServiceService } from "../menu-service.service";
import { UserService } from "app/user.service";
import {Router} from '@angular/router';

 // import { LoginComponent } from "../login/login.component";
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  checkLoginStatus: String = "false";
  menuItems;
HideLoginButton = false;
hideLogout = true;
MenuClose = true;
MenueTitle = false;
MenueTitleClose = true;
CloseMenu(){

  console.log("Closing menu");
  this.MenuClose = !this.MenuClose;
  this.MenueTitle = !this.MenueTitle;
  this.MenueTitleClose = !this.MenueTitleClose;

}


logout(){

console.log("Loging Out");
  
    this.hideLogout = true;
     this.HideLoginButton = false;
    
         localStorage.clear();
    sessionStorage.clear();
console.log("Post logout local session storage");
console.log(sessionStorage);
console.log("Post logout local  storage");
console.log(localStorage);
  window.location.href = "/";
   
  
 

}

login() {

 
  console.log("Opening Login");
  this.checkLoginStatus = sessionStorage.getItem('Auth_TokenLoggedIn');
  if(this.checkLoginStatus !== sessionStorage.getItem('Auth_TokenLoggedIn')){
   window.location.href = "#login";
   console.log("Login status is now: ");
   console.log(this.checkLoginStatus);
     /*   this.HideLoginButton = true;
this.hideLogout = false; */
  } else {
    console.log("User already logged in");
    //What happens after successfull login
                
               window.location.href = "#login";
                console.log("Login status is now else:");
   console.log(this.checkLoginStatus);
     // this.user.setUserLoggedIn();

  }
  


}
  constructor(private gloalMenue: MenuServiceService, private router: Router, private user: UserService) { }


  ngOnInit() {
  this.menuItems = this.gloalMenue.getLocalMenu();

/*
    this.menuItems = [
       {
        "URL": "#home",
        "title": "home",
        "tag": "Take me back to the home page",
        "SEOMeta":"Home Page"
      },
        {
        "URL": "#community",
        "title": "community",
        "tag": "Click here to checkout the community",
        "SEOMeta":"Check out my community."
      },
      {
        "URL": "#social",
        "title": "social",
        "tag": "Click here to checkout my social",
        "SEOMeta":"Check me out on social."
      },
          {
        "URL": "#media",
        "title": "media",
        "tag": "Check out the new.",
        "SEOMeta":"My posts and media."
      },
          {
        "URL": "#tour",
        "title": "tour",
        "tag": "Click here get tickets for the tour.",
        "SEOMeta":"Tour and Tickets"
      },
          {
        "URL": "#btc",
        "title": "vip",
        "tag": "Checkout whats going on behind the scene.",
        "SEOMeta":"Behind the scene"
      },
          {
        "URL": "#login",
        "title": "login",
        "tag": "Click here to login.",
        "SEOMeta":"Login to WR1"
      },
            {
        "URL": "#store",
        "title": "store",
        "tag": "Shop the merch store.",
        "SEOMeta":"The store"
      },
    ]

    */
  }

}
