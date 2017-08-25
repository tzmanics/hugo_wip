import { HugoWipPage } from './app.po';

describe('hugo-wip App', () => {
  let page: HugoWipPage;

  beforeEach(() => {
    page = new HugoWipPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
