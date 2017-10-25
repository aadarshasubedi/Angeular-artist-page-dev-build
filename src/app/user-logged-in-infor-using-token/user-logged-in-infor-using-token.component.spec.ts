import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoggedInInforUsingTokenComponent } from './user-logged-in-infor-using-token.component';

describe('UserLoggedInInforUsingTokenComponent', () => {
  let component: UserLoggedInInforUsingTokenComponent;
  let fixture: ComponentFixture<UserLoggedInInforUsingTokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLoggedInInforUsingTokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLoggedInInforUsingTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
