import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCoverSliderComponent } from './video-cover-slider.component';

describe('VideoCoverSliderComponent', () => {
  let component: VideoCoverSliderComponent;
  let fixture: ComponentFixture<VideoCoverSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoCoverSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCoverSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
