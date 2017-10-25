import { Component, OnInit } from '@angular/core';


import * as jQuery from 'jquery';



/* Paralax parallax 
$(document).ready(function(){
    var $win = $(window);

    $('#btc').each(function(){
        var scroll_speed = 0.3;
        var $this = $(this);
        $(window).scroll(function() {
            var bgScroll = -(($win.scrollTop() - $this.offset().top)/ scroll_speed);
            var bgPosition = 'center '+ bgScroll + 'px';
            $this.css({ backgroundPosition: bgPosition });
        });
    });
});*/


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
    showDashboardWidgets = false;
  constructor() { }

  ngOnInit() {
  }

}
