import { Component } from '@angular/core';
import template from './feature.component.html!text';
import styles from './feature.component.css!UIUXEngineering/plugin-css-string';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-feature',
  template: template,
  styles: [styles]
})
export class FeatureComponent { }
