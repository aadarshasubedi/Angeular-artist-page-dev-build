import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import * as jQuery from 'jquery';




/* Paralax parallax */
$(document).ready(function(){
    var $win = $(window);

    $('.pageWrapperBHTS').each(function(){
        var scroll_speed = 9;
        var $this = $(this);
        $(window).scroll(function() {
            var bgScroll = -(($win.scrollTop() - $this.offset().top)/ scroll_speed);
            var bgPosition = bgScroll + 'px';
            $this.css({ backgroundPosition: bgPosition });
        });
    });
      
});



/* Paralax parallax */
$(document).ready(function(){
    var $win = $(window);

    $('#BHTSPageWrapperIDText').each(function(){
        var scroll_speed = 0.5;
        var $this = $(this);
        $(window).scroll(function() {
            var bgScroll = -(($win.scrollTop() - $this.offset().top)/ scroll_speed);
            var bgPosition = 'center '+ bgScroll + 'px';
            $this.css({ backgroundPosition: bgPosition });
        });
    });
});


$(window).scroll(function () { 
    
       $('.BehindThescenesePageClass').css({
          'body' : -($(this).scrollTop()/3)+"px"
       }); 
    
    });


@Component({
  selector: 'app-behind-the-scenes-page-section',
  templateUrl: './behind-the-scenes-page-section.component.html',
  styleUrls: ['./behind-the-scenes-page-section.component.css']
})
export class BehindTheScenesPageSectionComponent implements OnInit {

results: string[];
// Set the background for the object here
itemBackground;



  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    // Set the background for the object here
this.itemBackground = "https://wr1test.imgix.net/webassets/concertcopy.png";

    // make the HTTP request
interface ItemsResponse {
  results: string[];
}
    this.http.get<ItemsResponse>('https://services-test.wr1.com/webapi/clubs/discover').subscribe( data => {

      this.results = data['posts'];
       err => {
    console.log("something went wrong");
  }
    }
 
  );



  }

}
