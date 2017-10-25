import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerTextFromWroneComponent } from './banner-text-from-wrone.component';

describe('BannerTextFromWroneComponent', () => {
  let component: BannerTextFromWroneComponent;
  let fixture: ComponentFixture<BannerTextFromWroneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerTextFromWroneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerTextFromWroneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
