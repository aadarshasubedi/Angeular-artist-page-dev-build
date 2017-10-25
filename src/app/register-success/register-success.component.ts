import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';
// Import HttpClientModule from @angular/common/http
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { Injectable, EventEmitter} from '@angular/core';
// import form manager
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-register-success',
  templateUrl: './register-success.component.html',
  styleUrls: ['./register-success.component.css']
})
export class RegisterSuccessComponent implements OnInit {
  goBack() {
    window.history.back();
}
error;
RegisterSubmit(){
  console.log("Register has passed");

  // end the action by forwarding to the success page
  window.location.href = "#regSuccess";
}

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

}
