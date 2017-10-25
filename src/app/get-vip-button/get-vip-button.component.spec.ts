import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetVipButtonComponent } from './get-vip-button.component';

describe('GetVipButtonComponent', () => {
  let component: GetVipButtonComponent;
  let fixture: ComponentFixture<GetVipButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetVipButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetVipButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
