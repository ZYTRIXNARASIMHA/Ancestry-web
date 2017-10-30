import { AncestryPage } from './app.po';

describe('ancestry App', () => {
  let page: AncestryPage;

  beforeEach(() => {
    page = new AncestryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
