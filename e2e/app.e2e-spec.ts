import { BottraderPage } from './app.po';

describe('bottrader App', () => {
  let page: BottraderPage;

  beforeEach(() => {
    page = new BottraderPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
