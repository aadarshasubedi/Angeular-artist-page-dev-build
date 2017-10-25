import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallAvatarComponent } from './small-avatar.component';

describe('SmallAvatarComponent', () => {
  let component: SmallAvatarComponent;
  let fixture: ComponentFixture<SmallAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
