import { Component, OnInit } from '@angular/core';
/*

let myHeaders = new Headers({ 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' });
myHeaders.append('Accept', 'text/plain');    
myHeaders.append('Accept', ' application/xhtml+xml '); 
myHeaders.set('Accept', ' application/xml '); 
myHeaders.delete('Accept'); 
let acceptHeader = myHeaders.get ('Accept');
let acceptHeaders =  myHeaders.getAll ('Accept'); 
myHeaders.set('Content-Type', 'application/json');
myHeaders.set('Accept', 'text/plain');
*/

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})

export class HeadersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
