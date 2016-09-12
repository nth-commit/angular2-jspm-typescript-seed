describe('About', () => {

  beforeEach( () => {
    browser.get('/samples/about');
  });

  it('should have correct feature heading', () => {
    expect(element(by.css('sd-about h2')).getText()).toEqual('Features');
  });

});
