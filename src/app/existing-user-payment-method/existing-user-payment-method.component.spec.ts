import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingUserPaymentMethodComponent } from './existing-user-payment-method.component';

describe('ExistingUserPaymentMethodComponent', () => {
  let component: ExistingUserPaymentMethodComponent;
  let fixture: ComponentFixture<ExistingUserPaymentMethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingUserPaymentMethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingUserPaymentMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
