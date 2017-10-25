import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';
import * as vanillatilt from 'vanilla-tilt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, style, transition, animate, group } from '@angular/animations';


/* give some life js reaction to the mouse */








var $callToActionButonDisplayScroll = $('#CTAScrollCOntroll');
$(document).scroll(function() {
  $callToActionButonDisplayScroll.css({background: $(this).scrollTop() > 500? "blue":"#ffffff"});
});


@Component({
  selector: 'app-call-to-action-quick-links',
  templateUrl: './call-to-action-quick-links.component.html',
  styleUrls: ['./call-to-action-quick-links.component.css'],
  animations: [
  trigger('itemAnim', [
    transition(':enter', [
      style({transform: 'translateX(-100%)'}),
      animate(350)
    ]),
    transition(':leave', [
      group([
        animate('0.2s ease', style({
          transform: 'translate(150px,25px)'
        })),
        animate('0.5s 0.2s ease', style({
          opacity: 0
        }))
      ])
    ])
  ])
]

})
export class CallToActionQuickLinksComponent implements OnInit {
callToActionButton;
buttonBackground;
  constructor() { }

  ngOnInit() {

    console.log("BackgroundFOrCTA is");
    console.log(this.buttonBackground);
    this.callToActionButton =

    [ 
      {
        "callToActionURL": "#tour",
        "callToActionTitle": "Tour",
        "CallToActionImageURL":"http://www.onlythebeat.com/wp-content/uploads/2014/05/tumblr_mddjvxip5w1ruvl8no1_1280.jpg",
        "CallToActionDescription" : "Get tour tickets."

      },
           {
        "callToActionURL": "#social",
        "callToActionTitle": "Social",
        "CallToActionImageURL":"http://www.onlythebeat.com/wp-content/uploads/2014/05/tumblr_mddjvxip5w1ruvl8no1_1280.jpg",
        "CallToActionDescription" : "CHeckout my social."

      },   
      {
        "callToActionURL": "#vip",
        "callToActionTitle": "VIP",
        "CallToActionImageURL":"http://www.onlythebeat.com/wp-content/uploads/2014/05/tumblr_mddjvxip5w1ruvl8no1_1280.jpg",
        "CallToActionDescription" : "Jojn my VIP fan club."

      },



    ]
  }

}
