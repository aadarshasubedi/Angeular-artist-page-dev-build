import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepOneDescriptionVIPPackageJoinComponent } from './step-one-description-vippackage-join.component';

describe('StepOneDescriptionVIPPackageJoinComponent', () => {
  let component: StepOneDescriptionVIPPackageJoinComponent;
  let fixture: ComponentFixture<StepOneDescriptionVIPPackageJoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepOneDescriptionVIPPackageJoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepOneDescriptionVIPPackageJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
