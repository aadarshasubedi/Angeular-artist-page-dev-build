import { Component, OnInit } from '@angular/core';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import 'hammerjs';
import { Http } from "@angular/http";


@Component({
  selector: 'app-detailed-account',
  templateUrl: './detailed-account.component.html',
  styleUrls: ['./detailed-account.component.css']
})
export class DetailedAccountComponent implements OnInit {
  userSettings : Array<any>;
  constructor(private http:Http) {
    this.http.get('http://jsonplaceholder.typicode.com/photos')
    .map(response => response.json())
    .subscribe(res => this.userSettings = res);

   }

  ngOnInit() {
  }

}
