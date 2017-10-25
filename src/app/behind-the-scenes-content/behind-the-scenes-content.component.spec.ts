import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BehindTheScenesContentComponent } from './behind-the-scenes-content.component';

describe('BehindTheScenesContentComponent', () => {
  let component: BehindTheScenesContentComponent;
  let fixture: ComponentFixture<BehindTheScenesContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BehindTheScenesContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BehindTheScenesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
