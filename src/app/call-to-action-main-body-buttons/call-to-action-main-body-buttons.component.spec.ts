import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallToActionMainBodyButtonsComponent } from './call-to-action-main-body-buttons.component';

describe('CallToActionMainBodyButtonsComponent', () => {
  let component: CallToActionMainBodyButtonsComponent;
  let fixture: ComponentFixture<CallToActionMainBodyButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallToActionMainBodyButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallToActionMainBodyButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
