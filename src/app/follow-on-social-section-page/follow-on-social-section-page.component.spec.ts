import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowOnSocialSectionPageComponent } from './follow-on-social-section-page.component';

describe('FollowOnSocialSectionPageComponent', () => {
  let component: FollowOnSocialSectionPageComponent;
  let fixture: ComponentFixture<FollowOnSocialSectionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowOnSocialSectionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowOnSocialSectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
