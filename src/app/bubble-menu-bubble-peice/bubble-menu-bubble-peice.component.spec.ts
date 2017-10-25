import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleMenuBubblePeiceComponent } from './bubble-menu-bubble-peice.component';

describe('BubbleMenuBubblePeiceComponent', () => {
  let component: BubbleMenuBubblePeiceComponent;
  let fixture: ComponentFixture<BubbleMenuBubblePeiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BubbleMenuBubblePeiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BubbleMenuBubblePeiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
