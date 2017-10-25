import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VipFormManagerComponent } from './vip-form-manager.component';

describe('VipFormManagerComponent', () => {
  let component: VipFormManagerComponent;
  let fixture: ComponentFixture<VipFormManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VipFormManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VipFormManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
