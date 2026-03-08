import { Component } from '@angular/core';

@Component({
    selector: 'ziva-label',
    standalone: true,
    template: '<ng-content></ng-content>',
    styles: [`
    :host {
      display: block;
      margin-bottom: 4px;
      font-size: 14px;
      font-weight: 500;
      color: var(--color-text-secondary);
    }
  `]
})
export class ZivaLabelComponent { }
