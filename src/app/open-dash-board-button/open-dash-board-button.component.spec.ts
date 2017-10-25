import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenDashBoardButtonComponent } from './open-dash-board-button.component';

describe('OpenDashBoardButtonComponent', () => {
  let component: OpenDashBoardButtonComponent;
  let fixture: ComponentFixture<OpenDashBoardButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenDashBoardButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenDashBoardButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
