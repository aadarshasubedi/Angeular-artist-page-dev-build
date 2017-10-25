import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VipAccessCampaignComponent } from './vip-access-campaign.component';

describe('VipAccessCampaignComponent', () => {
  let component: VipAccessCampaignComponent;
  let fixture: ComponentFixture<VipAccessCampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VipAccessCampaignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VipAccessCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
