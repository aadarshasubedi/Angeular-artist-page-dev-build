import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';
// Import HttpClientModule from @angular/common/http
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { Injectable, EventEmitter} from '@angular/core';
// import form manager
import { FormControl, FormGroup } from '@angular/forms';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  error;
  form;
    goBack() {
    window.history.back();
}
/* -- testing
RegisterSubmit = function (user){
  console.log("Regestration test values");
  console.log(user);
}
*/
onKey(e){
  console.log(e);

}

// User sbmits form data handling
RegisterSubmitTest(){
  console.log("Register has passed");

  // make sure user stayes on the same modal unless all is successfult
  window.location.href = "#register";
}
  //Post the registraton object
  constructor(private http:HttpClient) { }

  ngOnInit() {


    this.form = new FormGroup({
      Full_Name_Feild: new FormControl(),
      Email_Feild: new FormControl(),
      Password_Feild: new FormControl()
    });
  }

}
