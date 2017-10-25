import { Component, OnInit, trigger, state, animate, transition, style } from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {UIRouterModule} from "@uirouter/angular";
import 'rxjs';

@Component({
  selector: 'app-choose-avip-package',
  templateUrl: './choose-avip-package.component.html',
  styleUrls: ['./choose-avip-package.component.css'],
  animations: [
    trigger('visibility', [])
]
})
export class ChooseAVipPackageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
