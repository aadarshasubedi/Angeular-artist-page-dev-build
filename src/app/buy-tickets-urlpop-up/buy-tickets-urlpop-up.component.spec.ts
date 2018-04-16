import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyTicketsURLPopUpComponent } from './buy-tickets-urlpop-up.component';

describe('BuyTicketsURLPopUpComponent', () => {
  let component: BuyTicketsURLPopUpComponent;
  let fixture: ComponentFixture<BuyTicketsURLPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyTicketsURLPopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyTicketsURLPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
