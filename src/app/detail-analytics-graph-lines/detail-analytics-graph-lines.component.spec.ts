import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAnalyticsGraphLinesComponent } from './detail-analytics-graph-lines.component';

describe('DetailAnalyticsGraphLinesComponent', () => {
  let component: DetailAnalyticsGraphLinesComponent;
  let fixture: ComponentFixture<DetailAnalyticsGraphLinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailAnalyticsGraphLinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAnalyticsGraphLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
