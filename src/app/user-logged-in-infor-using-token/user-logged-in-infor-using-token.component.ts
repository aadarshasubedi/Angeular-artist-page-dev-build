import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as jQuery from 'jquery';
import 'rxjs/add/operator/retry';


@Component({
  selector: 'app-user-logged-in-infor-using-token',
  templateUrl: './user-logged-in-infor-using-token.component.html',
  styleUrls: ['./user-logged-in-infor-using-token.component.css']
})
export class UserLoggedInInforUsingTokenComponent implements OnInit {

  constructor(private http: HttpClient) { }
  // Get the usrs saved oauuth logged in temp token
 LoggedInUserToken = sessionStorage.getItem('Auth_TokenLoggedIn');
  AuthResponse;
loginDetails;
APIUrl ="https://s-test.wr1.com/api/users/me";
userObject;

getLoggedInUserProfile(){
  console.log("Retreiving use resulta now... ");
  /* Start getting the user profile with the logged in saved aouth token -- AT */
console.log("Getting Information from");
console.log(this.APIUrl);
  this.loginDetails = this.http.get(this.APIUrl, {

    headers: new HttpHeaders().set('Authorization', 'Bearer' + this.LoggedInUserToken),


}).retry(5).subscribe(result =>{
    console.log("User result is: ");
    console.log(result);
  this.userObject = result['data'];
  }

  )
}

  ngOnInit() {




    

    if(this.LoggedInUserToken !== null){
      this.getLoggedInUserProfile();
  console.log("user logged in and saved session token is:");

  console.log(this.LoggedInUserToken);
    } else {

      console.log("User Logged out no info to display here -- no token saved");
      console.log(this.LoggedInUserToken);
    }

}

}