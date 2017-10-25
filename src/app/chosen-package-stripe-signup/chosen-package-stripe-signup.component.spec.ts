import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChosenPackageStripeSignupComponent } from './chosen-package-stripe-signup.component';

describe('ChosenPackageStripeSignupComponent', () => {
  let component: ChosenPackageStripeSignupComponent;
  let fixture: ComponentFixture<ChosenPackageStripeSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChosenPackageStripeSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChosenPackageStripeSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
