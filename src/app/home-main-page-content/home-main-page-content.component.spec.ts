import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMainPageContentComponent } from './home-main-page-content.component';

describe('HomeMainPageContentComponent', () => {
  let component: HomeMainPageContentComponent;
  let fixture: ComponentFixture<HomeMainPageContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMainPageContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMainPageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
