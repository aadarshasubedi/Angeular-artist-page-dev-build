import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPackageChooserSignupComponent } from './form-package-chooser-signup.component';

describe('FormPackageChooserSignupComponent', () => {
  let component: FormPackageChooserSignupComponent;
  let fixture: ComponentFixture<FormPackageChooserSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPackageChooserSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPackageChooserSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
