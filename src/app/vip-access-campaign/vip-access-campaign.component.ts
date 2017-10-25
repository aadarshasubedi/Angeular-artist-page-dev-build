import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vip-access-campaign',
  templateUrl: './vip-access-campaign.component.html',
  styleUrls: ['./vip-access-campaign.component.css']
})
export class VipAccessCampaignComponent implements OnInit {

  constructor() { }
  ngOnInit() {
    console.log(this.checkIfExternalVIPLoaded());
    
  }


    private checkIfExternalVIPLoaded(): any {
        return "Define if loaded VIP external";
    }
}
