import {CacheBusterComponent} from './cacheBuster.component';

describe('Samples Cache Buster component', () => {

  it('should have CACHE_BUSTER', () => {
    let component = new CacheBusterComponent();
    expect(component.cacheBusterName).toEqual('CACHE_BUSTER');
  });

});
