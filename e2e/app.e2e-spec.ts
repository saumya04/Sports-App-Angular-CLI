import { SportsAppAngularCliPage } from './app.po';

describe('sports-app-angular-cli App', () => {
  let page: SportsAppAngularCliPage;

  beforeEach(() => {
    page = new SportsAppAngularCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
