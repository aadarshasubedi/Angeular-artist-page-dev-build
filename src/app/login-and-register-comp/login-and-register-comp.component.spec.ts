import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAndRegisterCompComponent } from './login-and-register-comp.component';

describe('LoginAndRegisterCompComponent', () => {
  let component: LoginAndRegisterCompComponent;
  let fixture: ComponentFixture<LoginAndRegisterCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginAndRegisterCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAndRegisterCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
