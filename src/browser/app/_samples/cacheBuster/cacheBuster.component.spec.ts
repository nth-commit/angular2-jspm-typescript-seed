import {Component} from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';
import {CacheBusterModule} from './cacheBuster.module';

describe('Samples Cache Buster component', () => {
  // Setting module for testing
  // Disable old forms

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [CacheBusterModule]
    });
  });

  it('should work',
    async(() => {
      TestBed
        .compileComponents()
        .then(() => {
          let fixture = TestBed.createComponent(TestComponent);
          let cacheBusterDOMEl = fixture.debugElement.children[0].nativeElement;

          expect(cacheBusterDOMEl.querySelectorAll('h2')[0].textContent).toEqual('Cache Buster');
        });
    }));
});

@Component({
  selector: 'test-cmp',
  template: '<sd-cache-buster></sd-cache-buster>'
})
class TestComponent {
}
