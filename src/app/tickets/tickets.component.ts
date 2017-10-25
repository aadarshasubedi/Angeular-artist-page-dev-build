import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  tickets;
  constructor() { }

  ngOnInit() {

     this.tickets = [

    /*

 
eventLocation 
eventName 
ticketURL 
commentCount 
getSocialSharingPOST 
eventDate 
eventYear 
eventMonth

*/
        {
        eventLocation: 'COLUMBUS, OHIO',
        eventName: 'Buckeye Country Superfest',
        ticketURL: 'http://www.buckeyecountrysuperfest.com',
        commentCount: '25',
        getSocialSharingPOST: 'SHARE THIS',
        eventDate: '10',
        eventYear: '2017',
        eventMonth: 'JUN',
        MeetNGreet: 'MEET & GREET',
        buyTickets: 'BUY TICKETS',
        rsvp: 'RSVP'
      }, 
           {
        eventLocation: 'NASHVILLE, TN',
        eventName: 'CMA Fest 2017',
        ticketURL: 'http://www.cmaworld.com/cma-music-festival',
        commentCount: '17',
        getSocialSharingPOST: 'SHARE THIS',
        eventDate: '11',
        eventYear: '2017',
        eventMonth: 'JUN',
        MeetNGreet: 'MEET & GREET',
        buyTickets: 'BUY TICKETS',
        rsvp: 'RSVP'
      }, 
         {
        eventLocation: 'DAUPHIN, MB, CANADA',
        eventName: 'Countryfest',
        ticketURL: 'http://www.countryfest.ca',
        commentCount: '5',
        getSocialSharingPOST: 'SHARE THIS',
        eventDate: '30',
        eventYear: '2017',
        eventMonth: 'JUN',
        MeetNGreet: 'MEET & GREET',
        buyTickets: 'BUY TICKETS',
        rsvp: 'RSVP'
      }, 
         {
        eventLocation: 'COLUMBUS, OHIO',
        eventName: 'Buckeye Country Superfest',
        ticketURL: 'http://www.buckeyecountrysuperfest.com',
        commentCount: '25',
        getSocialSharingPOST: 'SHARE THIS',
        eventDate: '10',
        eventYear: '2017',
        eventMonth: 'JUN',
        MeetNGreet: 'MEET & GREET',
        buyTickets: 'BUY TICKETS',
        rsvp: 'RSVP'
      }, 
         {
        eventLocation: 'COLUMBUS, OHIO',
        eventName: 'Buckeye Country Superfest',
        ticketURL: 'http://www.buckeyecountrysuperfest.com',
        commentCount: '25',
        getSocialSharingPOST: 'SHARE THIS',
        eventDate: '10',
        eventYear: '2017',
        eventMonth: 'JUN',
        MeetNGreet: 'MEET & GREET',
        buyTickets: 'BUY TICKETS',
        rsvp: 'RSVP'
      }, 
         {
        eventLocation: 'COLUMBUS, OHIO',
        eventName: 'Buckeye Country Superfest',
        ticketURL: 'http://www.buckeyecountrysuperfest.com',
        commentCount: '25',
        getSocialSharingPOST: 'SHARE THIS',
        eventDate: '10',
        eventYear: '2017',
        eventMonth: 'JUN',
        MeetNGreet: 'MEET & GREET',
        buyTickets: 'BUY TICKETS',
        rsvp: 'RSVP'
      }, 
         {
        eventLocation: 'COLUMBUS, OHIO',
        eventName: 'Buckeye Country Superfest',
        ticketURL: 'http://www.buckeyecountrysuperfest.com',
        commentCount: '25',
        getSocialSharingPOST: 'SHARE THIS',
        eventDate: '10',
        eventYear: '2017',
        eventMonth: 'JUN',
        MeetNGreet: 'MEET & GREET',
        buyTickets: 'BUY TICKETS',
        rsvp: 'RSVP'
      }, 
         {
        eventLocation: 'COLUMBUS, OHIO',
        eventName: 'Buckeye Country Superfest',
        ticketURL: 'http://www.buckeyecountrysuperfest.com',
        commentCount: '25',
        getSocialSharingPOST: 'SHARE THIS',
        eventDate: '10',
        eventYear: '2017',
        eventMonth: 'JUN',
        MeetNGreet: 'MEET & GREET',
        buyTickets: 'BUY TICKETS',
        rsvp: 'RSVP'
      }, 
        
    ];
  }

}
