describe('Conditional Substitution', () => {

  beforeEach( () => {
    browser.get('/conditionalSubstitution');
  });

  it('should have correct feature heading', () => {
    expect(element(by.css('sd-feature h2')).getText()).toEqual('Conditional Substitution');
  });

});
