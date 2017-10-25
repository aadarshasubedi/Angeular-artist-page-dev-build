import { Component, OnInit } from '@angular/core';
import { UserLoggedInInforUsingTokenComponent } from "../user-logged-in-infor-using-token/user-logged-in-infor-using-token.component";

@Component({
  selector: 'app-edit-page-widget',
  templateUrl: './edit-page-widget.component.html',
  styleUrls: ['./edit-page-widget.component.css']
})

export class EditPageWidgetComponent implements OnInit {

  constructor(public userData: UserLoggedInInforUsingTokenComponent) { }


  ngOnInit() {
  }

}
