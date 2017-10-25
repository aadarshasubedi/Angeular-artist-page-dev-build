import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicationHeaderComponent } from './aplication-header.component';

describe('AplicationHeaderComponent', () => {
  let component: AplicationHeaderComponent;
  let fixture: ComponentFixture<AplicationHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AplicationHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AplicationHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
