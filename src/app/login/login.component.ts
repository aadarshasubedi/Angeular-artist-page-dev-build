import { Component, OnInit, ViewChild } from '@angular/core';
import * as jQuery from 'jquery';
import { HttpModule, JsonpModule } from '@angular/http';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
import 'rxjs';
import 'rxjs/add/operator/retry';
import { MenuComponent } from '../menu/menu.component';
// import router
import { Router } from '@angular/router';
// import club number from global variable
import * as clubIDG from '../club-chooser/club-chooser.component';
import { UserService } from 'app/user.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

/* Login page */
/* Hndles all oath functions such as Registrtaion / login / lost password and more */

// General API data
var URL: String = 'https://services-test.wr1.com/webapi/clubs';
// Implement headers for the api aws to get data with this secret key
var headers = new Headers();
headers.append('Application-Key', '6CAEA9D43AC5DF96CEF21C78A73A3');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MenuComponent],
})
export class LoginComponent implements OnInit {
  MenuComponent: any;
  hideLoggin = true;
  hideResetPassword = true;
  loggedIn;
  loginIsHidden = false;
  hideOnlyLogin = true;
  username: any;
  results: string[];
  goBack() {
    window.history.back();
  }

  LoggedInUserToken = sessionStorage.getItem('Auth_TokenLoggedIn');
  AuthResponse;
  loginDetails;
  APIUrl = 'https://s-test.wr1.com/api/users/me';
  userObject;
  avatarUrl;

  getLoggedInUserProfile() {
    console.log('Retreiving use dataa now... ');
    /* Start getting the user profile with the logged in saved aouth token -- AT */
    console.log('Getting Information from');
    console.log(this.APIUrl);
    this.loginDetails = this.http
      .get(this.APIUrl, {
        headers: new HttpHeaders().set('Authorization', 'Bearer' + this.LoggedInUserToken),
      })
      .subscribe(data => {
        console.log('User data is: ');
        console.log(data);
        this.userObject = data;
        return this.userObject;
      });
  }

  CloseLoginModule() {
    // this.loginIsHidden = true;
  }

  name = 'anonymouse';

  error;
  artistName;
  constructor(
    private http: HttpClient,
    private router: Router,
    private user: UserService,
    private menu: MenuComponent
  ) {}

  @ViewChild('mySecretKey') inputSecretKeyText;

  // open forgt password elements
  openForgotPassword() {
    console.log('Opening forgot the password elelemt');
    this.loginIsHidden = false;
    this.hideResetPassword = false;
  }

  //send to server method
  sendToServer() {
    let data = this.inputSecretKeyText.nativeElement;

    console.log('sending data to server now ' + data.value);
  }

  // Fetch the artist name with the get api
  // get he artist Bakgroundrequest

  // End get data api

  ngOnInit() {
    console.log('User is logged in? ', this.user.getUserLoggedIn());
    // setInterval(() => {this.sendToServer();}, 4000);
  }

  // method for data handling with the login information
  loginUser(e) {
    this.menu.HideLoginButton = true;
    this.menu.hideLogout = false;
    console.log('closing login');
    /*Return back to main page */

    window.location.href = '#';
    e.preventDefault(e);
    console.log(e);
    var usernameInput = e.target.elements[0].value;
    var passwordInput = e.target.elements[1].value;

    // varafy data has been passed successfuly
    console.log(
      'Recorded oAuth Psst.. the username is: ' + usernameInput + ' and the password: ' + passwordInput + ' '
    );
    // encase secret auth is diffrent chancge secret for backend here
    var encodedToken = btoa('client_uI8skVFiOTUFh1kM:TjwOSKG1PRdZ1DkhEdO8P7nl');

    console.log('encoded token ' + encodedToken);
    //Post the data to the backend

    // set the interface

    const body = {
      /*"grant_type":"password", "username": usernameInput, "password": passwordInput */
    };
    const req = this.http.post('https://s-test.wr1.com/oauth/token', body, {
      params: new HttpParams()
        .set('grant_type', 'password')
        .set('username', usernameInput)
        .set('password', passwordInput),
      headers: new HttpHeaders()
        .set('Authorization', 'Basic ' + encodedToken)
        .set('Content-Type', 'application/x-www-form-urlencoded'), // put headers here
    });
    console.log(body);
    req.subscribe(
      res => {
        this.AuthResponse = res;
        this.AuthResponse = this.AuthResponse.access_token;
        console.log('the auth post result is: ');
        console.log(res);
        console.log('The auth response is here:');
        console.log(this.AuthResponse);
        console.log('Token For logged in user session for ' + usernameInput + ':');
        sessionStorage.setItem('Auth_TokenLoggedIn', this.AuthResponse);
        localStorage.setItem('Auth_TokenLoggedIn', this.AuthResponse);
        console.log(localStorage);
      }, // this.AuthResponse returns the logged in useres token
      err => {
        console.log('an error occured, make sure details are correct and server is up and running');
      }
      // outside testing unit testing
    );
    // get user permission
    console.log('Retreiving use dataa now... ');
    /* Start getting the user profile with the logged in saved aouth token -- AT */
    console.log('Getting Information from');
    console.log(this.APIUrl);
    const userPerm = this.http.get<UserObjectResponse>(this.APIUrl, {
      headers: new HttpHeaders().set('Authorization', 'Bearer' + this.LoggedInUserToken),
    });

    interface UserObjectResponse {
      results: string[];
    }

    userPerm.subscribe(data => {
      console.log('User data is: ');
      console.log(data);
      this.results = data.results;

      this.userObject = data;
      return this.userObject;
    });

    console.log('User perm access');
    console.log(this.userObject);
    // ArtistNameTagTitleClass subscribe
    console.log('Logged in user object: ');
    console.log(this.getLoggedInUserProfile());

    console.log('Outside functional auth token storage test');
    console.log(sessionStorage);
    // set admin username and credentials for testing

    /* Check for admin access here */
    /* get the users token from the wr1 backend */
    if (
      (usernameInput == 'admin' && passwordInput == 'admin') ||
      usernameInput == 'katy@example.com' ||
      usernameInput == 'rihanna' ||
      usernameInput == 'geo@mail.com' ||
      (usernameInput == 'jayz' && passwordInput == '123456')
    ) {
      //What happens after successfull login
      this.user.setUserLoggedIn();

      this.menu.HideLoginButton = true;
      this.menu.hideLogout = false;

      this.router.navigate(['#dashboard']);
      this.name = this.user.username;
      console.log('Welcome ' + usernameInput);
      console.log('User is logged in? ', this.user.getUserLoggedIn());
      // save this to the session
      localStorage.setItem('IsLoggedIn', this.user.getUserLoggedIn());
      localStorage.setItem('SessionCredentials', this.name);
      sessionStorage.setItem('Auth_TokenLoggedIn', this.AuthResponse);

      console.log('Welcome WR1 admin!');
      this.hideLoggin = !this.hideLoggin;
    } else if (usernameInput == 'user' && passwordInput == 'user') {
      this.router.navigate(['#vip']);
      console.log('Welcome guest user!');
    } else {
      req.subscribe();

      console.log('Your are not authorised please try again');
    }

    return false;
  }
}
export var hideLoggin;

/* User json recieved after successfull auth

{
    "id": 2,
    "username": "jayz",
    "email": "jayz@example.com",
    "name": "Shawn Corey Carter",
    "avatarUrl": "https://wr1test.imgix.net/2/2017-06-02T22:32:22Z.JPG",
    "backgroundUrl": "https://wr1test.imgix.net/2/F75D4A4F-5C5D-4709-938F-5CFB4414C6E1.JPG",
    "status": 1,
    "dateCreated": 1440092068000,
    "dateUpdated": 1502391229000
}

*/
