import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubJumperComponent } from './club-jumper.component';

describe('ClubJumperComponent', () => {
  let component: ClubJumperComponent;
  let fixture: ComponentFixture<ClubJumperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubJumperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubJumperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
