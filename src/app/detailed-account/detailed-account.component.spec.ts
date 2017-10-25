import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedAccountComponent } from './detailed-account.component';

describe('DetailedAccountComponent', () => {
  let component: DetailedAccountComponent;
  let fixture: ComponentFixture<DetailedAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
