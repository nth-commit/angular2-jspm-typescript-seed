import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CacheBusterComponent } from './cacheBuster.component';

@NgModule({
    imports: [CommonModule],
    declarations: [CacheBusterComponent],
    exports: [CacheBusterComponent]
})

export class CacheBusterModule { }
