import { Injectable } from '@angular/core';

@Injectable()
export class MenuServiceService {


  private GlobalLocalMenu;




  constructor() { 

    this.GlobalLocalMenu = 

        /* put api here */
 [
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
        "URL": "#store",
        "title": "store",
        "tag": "Shop the merch store.",
        "SEOMeta":"The store"
      },
    ]
  }

  getLocalMenu() {
/*
     this.GlobalLocalMenu = 

        
 [
       {
        "URL": "#home",
        "title": "hhome",
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
    return this.GlobalLocalMenu;
  }
  }


