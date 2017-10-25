import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetVipLinkFromMobileIncomingComponent } from './get-vip-link-from-mobile-incoming.component';

describe('GetVipLinkFromMobileIncomingComponent', () => {
  let component: GetVipLinkFromMobileIncomingComponent;
  let fixture: ComponentFixture<GetVipLinkFromMobileIncomingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetVipLinkFromMobileIncomingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetVipLinkFromMobileIncomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
