import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretStripeKeysComponent } from './secret-stripe-keys.component';

describe('SecretStripeKeysComponent', () => {
  let component: SecretStripeKeysComponent;
  let fixture: ComponentFixture<SecretStripeKeysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecretStripeKeysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretStripeKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
