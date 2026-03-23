import { Component } from '@angular/core';

@Component({
    selector: 'ziva-label',
    standalone: true,
    template: '<ng-content></ng-content>',
    styles: [`
    :host {
      display: block;
      margin-bottom: var(--form-field-label-margin);
      font-size: var(--form-field-label-font-size);
      font-weight: var(--form-field-label-font-weight);
      color: var(--form-field-label-color);
    }
  `]
})
export class ZivaLabelComponent { }
