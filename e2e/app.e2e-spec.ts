import { ArtistPageAppPage } from './app.po';

describe('artist-page-app App', () => {
  let page: ArtistPageAppPage;

  beforeEach(() => {
    page = new ArtistPageAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
