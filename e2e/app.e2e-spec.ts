import { DigiposPage } from './app.po';

describe('digipos App', function() {
  let page: DigiposPage;

  beforeEach(() => {
    page = new DigiposPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
