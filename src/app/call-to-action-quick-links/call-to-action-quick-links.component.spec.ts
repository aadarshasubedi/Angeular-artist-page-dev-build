import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallToActionQuickLinksComponent } from './call-to-action-quick-links.component';

describe('CallToActionQuickLinksComponent', () => {
  let component: CallToActionQuickLinksComponent;
  let fixture: ComponentFixture<CallToActionQuickLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallToActionQuickLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallToActionQuickLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
