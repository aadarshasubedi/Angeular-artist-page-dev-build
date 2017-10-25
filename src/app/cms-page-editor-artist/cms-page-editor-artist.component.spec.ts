import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsPageEditorArtistComponent } from './cms-page-editor-artist.component';

describe('CmsPageEditorArtistComponent', () => {
  let component: CmsPageEditorArtistComponent;
  let fixture: ComponentFixture<CmsPageEditorArtistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmsPageEditorArtistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmsPageEditorArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
