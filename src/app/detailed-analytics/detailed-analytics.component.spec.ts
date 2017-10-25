import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedAnalyticsComponent } from './detailed-analytics.component';

describe('DetailedAnalyticsComponent', () => {
  let component: DetailedAnalyticsComponent;
  let fixture: ComponentFixture<DetailedAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
