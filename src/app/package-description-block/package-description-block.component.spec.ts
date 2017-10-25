import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageDescriptionBlockComponent } from './package-description-block.component';

describe('PackageDescriptionBlockComponent', () => {
  let component: PackageDescriptionBlockComponent;
  let fixture: ComponentFixture<PackageDescriptionBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageDescriptionBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageDescriptionBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
