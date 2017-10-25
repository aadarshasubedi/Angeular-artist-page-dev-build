import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileMenueComponent } from './mobile-menue.component';

describe('MobileMenueComponent', () => {
  let component: MobileMenueComponent;
  let fixture: ComponentFixture<MobileMenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileMenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileMenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
