import { Component, OnInit } from '@angular/core';
import { MenuServiceService } from "../menu-service.service";


@Component({
  selector: 'app-mobile-menue',
  templateUrl: './mobile-menue.component.html',
  styleUrls: ['./mobile-menue.component.css']
})
export class MobileMenueComponent implements OnInit {
menuItems;
MenuClose = true;
MenueTitle = false;
MenueTitleClose = true;
CloseMenu(){

  console.log("Closing menu");
  this.MenuClose = !this.MenuClose;
  this.MenueTitle = !this.MenueTitle;
  this.MenueTitleClose = !this.MenueTitleClose;
}
openLogin() {

  console.log("Opening Login");
  this.MenuClose = !this.MenuClose;
  this.MenueTitle = !this.MenueTitle;
  this.MenueTitleClose = !this.MenueTitleClose;

}
  constructor(private gloalMenue: MenuServiceService) { }

  ngOnInit() {

  this.menuItems = this.gloalMenue.getLocalMenu();

    
  }

}
