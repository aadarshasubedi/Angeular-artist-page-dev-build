import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramImportComponent } from './instagram-import.component';

describe('InstagramImportComponent', () => {
  let component: InstagramImportComponent;
  let fixture: ComponentFixture<InstagramImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstagramImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagramImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
