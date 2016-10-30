describe('CacheBuster', () => {

  beforeEach( () => {
    browser.get('/samples/cacheBuster');
  });

  it('should have correct feature heading', () => {
    expect(element(by.css('sd-cache-buster h2')).getText()).toEqual('Cache Buster');
  });

});
