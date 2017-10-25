import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPageWidgetComponent } from './edit-page-widget.component';

describe('EditPageWidgetComponent', () => {
  let component: EditPageWidgetComponent;
  let fixture: ComponentFixture<EditPageWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPageWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPageWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
