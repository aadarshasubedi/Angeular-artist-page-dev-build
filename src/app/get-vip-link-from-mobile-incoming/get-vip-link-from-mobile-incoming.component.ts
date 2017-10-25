import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute, NavigationEnd, Params } from '@angular/router';
import { VipAccessCampaignComponent } from '../vip-access-campaign/vip-access-campaign.component';

@Component({
  selector: 'app-get-vip-link-from-mobile-incoming',
  templateUrl: './get-vip-link-from-mobile-incoming.component.html',
  styleUrls: ['./get-vip-link-from-mobile-incoming.component.css']
})




export class GetVipLinkFromMobileIncomingComponent implements OnInit {
  private fragment: string;
  constructor(private router: Router, private _activateRoute: ActivatedRoute) { 
  }
 

  Loaded(){

    console.log("Looooded");
  }
  ngOnInit() {
 

  }

}
