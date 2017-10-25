import { Component, OnInit } from '@angular/core';



/* In charge of all user managment and account information */
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
AccountInfo;
  constructor() { }

  ngOnInit() {
this.AccountInfo = [
  {

    
  }
  ]


  }

}
