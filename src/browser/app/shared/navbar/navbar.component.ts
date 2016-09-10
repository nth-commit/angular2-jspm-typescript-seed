import { Component } from '@angular/core';
import navbarTemplate from './navbar.component.html!text';
import styles from './navbar.component.scss!';

import { FeatureConfig } from '../../conditionalSubstitution/config/feature.config';

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-navbar',
  template: navbarTemplate,
  styles: [styles]
})

export class NavbarComponent implements OnInit {

  showFeature: string;

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    this.getFeature();
  }

  getFeature() {
    this.showFeature = FeatureConfig.LOAD_FEATURE;
  }
}
