import { OjClient1Page } from './app.po';

describe('oj-client1 App', function() {
  let page: OjClient1Page;

  beforeEach(() => {
    page = new OjClient1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
