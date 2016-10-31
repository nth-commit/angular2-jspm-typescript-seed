import { Component } from '@angular/core';
import template from './cacheBuster.component.html!text';
import styles from './cacheBuster.component.css!text';

@Component({
  moduleId: module.id,
  selector: 'sd-cache-buster',
  template: template,
  styles: [styles]
})
export class CacheBusterComponent {

  cacheBusterName:string = 'CACHE' + '_' + 'BUSTER';


}
