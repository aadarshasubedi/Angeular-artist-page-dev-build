import { Injectable } from '@angular/core';
import { UserLoggedInInforUsingTokenComponent } from './user-logged-in-infor-using-token/user-logged-in-infor-using-token.component';
@Injectable()
export class UserService {



  private isUserLoggedIn;
  public username;
  public userSession: UserLoggedInInforUsingTokenComponent;

  constructor() {
    
    this.isUserLoggedIn = false;
   }

   setUserLoggedIn() {
     this.isUserLoggedIn = true;
  // this.username = 'admin';
     this.username = this.userSession.loginDetails;
     console.log("User session login details dashboard 2");
     console.log(this.userSession.loginDetails);
     sessionStorage.setItem('UserIsLoggedIn', 'true');

   }

   getUserLoggedIn() {
     return this.isUserLoggedIn;
   }

}