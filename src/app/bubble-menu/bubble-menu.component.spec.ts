import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleMenuComponent } from './bubble-menu.component';

describe('BubbleMenuComponent', () => {
  let component: BubbleMenuComponent;
  let fixture: ComponentFixture<BubbleMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BubbleMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BubbleMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});