import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsWidgetComponent } from './analytics-widget.component';

describe('AnalyticsWidgetComponent', () => {
  let component: AnalyticsWidgetComponent;
  let fixture: ComponentFixture<AnalyticsWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticsWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
