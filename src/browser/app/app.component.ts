import { Component } from '@angular/core';
import template from './app.component.html!text';
import styles from './app.component.css!text';

import { Config } from './config/env/prod.config';

@Component({
  moduleId: module.id,
  selector: 'app',
  template: template,
  styles: [styles]
})
export class AppComponent {
  constructor() {
    console.log('Environment config', Config);
  }
}
