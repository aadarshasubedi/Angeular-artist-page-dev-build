import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAllPostsByIdComponent } from './display-all-posts-by-id.component';

describe('DisplayAllPostsByIdComponent', () => {
  let component: DisplayAllPostsByIdComponent;
  let fixture: ComponentFixture<DisplayAllPostsByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayAllPostsByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAllPostsByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
