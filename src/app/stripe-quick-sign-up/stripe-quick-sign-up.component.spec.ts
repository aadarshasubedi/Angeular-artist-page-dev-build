import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StripeQuickSignUpComponent } from './stripe-quick-sign-up.component';

describe('StripeQuickSignUpComponent', () => {
  let component: StripeQuickSignUpComponent;
  let fixture: ComponentFixture<StripeQuickSignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StripeQuickSignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StripeQuickSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
