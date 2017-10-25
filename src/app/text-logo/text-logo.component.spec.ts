import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextLogoComponent } from './text-logo.component';

describe('TextLogoComponent', () => {
  let component: TextLogoComponent;
  let fixture: ComponentFixture<TextLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
