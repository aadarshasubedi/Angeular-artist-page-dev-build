import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bubble-menu-bubble-peice',
  templateUrl: './bubble-menu-bubble-peice.component.html',
  styleUrls: ['./bubble-menu-bubble-peice.component.css']
})
export class BubbleMenuBubblePeiceComponent implements OnInit {
bubbles;
closeBubbleMenue="true";
  constructor() { }

  ngOnInit() {

    this.closeBubbleMenue = this.closeBubbleMenue;

    this.bubbles = [
      {
        bubbleTag: "WR1 Logo",
        IconURL: "https://wr1test.imgix.net/images/WR1-LOGO-FINAL2-SHINE+INVERT.png?w=100pxh=100px",
        WebLeadToURL: "#home"
      },
       {
        bubbleTag: "Chat",
        IconURL: "https://d30y9cdsu7xlg0.cloudfront.net/png/5982-200.png",
        WebLeadToURL: "#chat"
      },
         {
        bubbleTag: "Fan Feed",
        IconURL: "https://static1.squarespace.com/static/53a2a095e4b0a5020bebd405/5420a813e4b0eb59deb03762/5420a815e4b0be37af680530/1466447049778/icon_48301.png?format=300w",
        WebLeadToURL: "#FanFeed"
      },
          {
        bubbleTag: "Artist Feed",
        IconURL: "https://www.shareicon.net/data/256x256/2015/12/20/690180_star_512x512.png",
        WebLeadToURL: "#ArtistFeed"
      },
         {
        bubbleTag: "Shop",
        IconURL: "https://image.flaticon.com/icons/png/512/2/2772.png",
        WebLeadToURL: "#shop"
      },
    ]
  }

}
