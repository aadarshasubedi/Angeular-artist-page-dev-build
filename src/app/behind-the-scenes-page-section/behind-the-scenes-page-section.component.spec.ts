import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BehindTheScenesPageSectionComponent } from './behind-the-scenes-page-section.component';

describe('BehindTheScenesPageSectionComponent', () => {
  let component: BehindTheScenesPageSectionComponent;
  let fixture: ComponentFixture<BehindTheScenesPageSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BehindTheScenesPageSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BehindTheScenesPageSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
