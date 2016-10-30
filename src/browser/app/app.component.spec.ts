import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';

import {
  async
} from '@angular/core/testing';
import {
  Route
} from '@angular/router';
import {
  RouterTestingModule
} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {HomeComponent} from './_samples/home/home.component';
import {AboutComponent} from './_samples/about/about.component';
import {ToolbarComponent} from './_samples/shared/toolbar/toolbar.component';
import {NavbarComponent} from './_samples/shared/navbar/navbar.component';

describe('Samples App component', () => {

  let config: Route[] = [
    {path: 'samples', component: HomeComponent},
    {path: 'samples/about', component: AboutComponent}
  ];
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule.withRoutes(config)],
      declarations: [TestComponent, ToolbarComponent,
        NavbarComponent, AppComponent,
        HomeComponent, AboutComponent],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    });
  });

  it('should build without a problem',
    async(() => {
      TestBed
        .compileComponents()
        .then(() => {
          let fixture = TestBed.createComponent(TestComponent);
          let compiled = fixture.nativeElement;

          expect(compiled).toBeTruthy();
        });
    }));
});


@Component({
  selector: 'test-cmp',
  template: '<sd-app></sd-app>'
})

class TestComponent {
}



