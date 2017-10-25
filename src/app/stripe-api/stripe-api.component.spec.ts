import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StripeAPIComponent } from './stripe-api.component';

describe('StripeAPIComponent', () => {
  let component: StripeAPIComponent;
  let fixture: ComponentFixture<StripeAPIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StripeAPIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StripeAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
