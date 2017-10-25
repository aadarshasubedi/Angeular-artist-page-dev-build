import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockContentButonttoVipComponent } from './lock-content-butontto-vip.component';

describe('LockContentButonttoVipComponent', () => {
  let component: LockContentButonttoVipComponent;
  let fixture: ComponentFixture<LockContentButonttoVipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockContentButonttoVipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockContentButonttoVipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
