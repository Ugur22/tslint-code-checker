import { CodelyzersPage } from './app.po';

describe('codelyzers App', function() {
  let page: CodelyzersPage;

  beforeEach(() => {
    page = new CodelyzersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
