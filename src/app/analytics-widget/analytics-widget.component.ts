import { Component, OnInit } from '@angular/core';
import { UserService } from "app/user.service";


@Component({
  selector: 'app-analytics-widget',
  templateUrl: './analytics-widget.component.html',
  styleUrls: ['./analytics-widget.component.css']
})
export class AnalyticsWidgetComponent implements OnInit {
  constructor(private user: UserService) { }

  ngOnInit() {
  }

}
