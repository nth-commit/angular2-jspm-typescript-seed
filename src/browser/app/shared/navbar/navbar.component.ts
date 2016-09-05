import { Component } from '@angular/core';
import navbarTemplate from './navbar.component.html!text';
import styles from './navbar.component.scss!';
/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-navbar',
  template: navbarTemplate,
  styles: [styles]
})

export class NavbarComponent {}
