import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseAVipPackageComponent } from './choose-avip-package.component';

describe('ChooseAVipPackageComponent', () => {
  let component: ChooseAVipPackageComponent;
  let fixture: ComponentFixture<ChooseAVipPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseAVipPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseAVipPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
