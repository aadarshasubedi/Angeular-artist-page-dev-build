import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBodySliderComponent } from './main-body-slider.component';

describe('MainBodySliderComponent', () => {
  let component: MainBodySliderComponent;
  let fixture: ComponentFixture<MainBodySliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainBodySliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBodySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
