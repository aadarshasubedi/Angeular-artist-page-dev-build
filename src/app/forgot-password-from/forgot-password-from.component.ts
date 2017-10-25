import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-forgot-password-from',
  templateUrl: './forgot-password-from.component.html',
  styleUrls: ['./forgot-password-from.component.css']
})
export class ForgotPasswordFromComponent implements OnInit {


  
  constructor() { }

  resetPass(email){
    console.log(email);
  }

  ngOnInit() {
  }

}
