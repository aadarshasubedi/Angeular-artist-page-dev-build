import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChosenPackageSuccessSignupFormComponent } from './chosen-package-success-signup-form.component';

describe('ChosenPackageSuccessSignupFormComponent', () => {
  let component: ChosenPackageSuccessSignupFormComponent;
  let fixture: ComponentFixture<ChosenPackageSuccessSignupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChosenPackageSuccessSignupFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChosenPackageSuccessSignupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
