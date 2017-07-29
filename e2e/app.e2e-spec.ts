import { MyMapsProjectPage } from './app.po';

describe('my-maps-project App', () => {
  let page: MyMapsProjectPage;

  beforeEach(() => {
    page = new MyMapsProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
