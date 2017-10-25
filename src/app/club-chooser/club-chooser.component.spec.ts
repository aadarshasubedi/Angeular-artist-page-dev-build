import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubChooserComponent } from './club-chooser.component';

describe('', () => {
  let component: ClubChooserComponent;
  let fixture: ComponentFixture<ClubChooserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubChooserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
