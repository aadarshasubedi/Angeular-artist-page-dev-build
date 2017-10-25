import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAppComponent } from './user-app.component';

describe('UserAppComponent', () => {
  let component: UserAppComponent;
  let fixture: ComponentFixture<UserAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
