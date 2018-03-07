import { CursoNgTddPage } from './app.po';

describe('curso-ng-tdd App', () => {
  let page: CursoNgTddPage;

  beforeEach(() => {
    page = new CursoNgTddPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
