import { Component } from '@angular/core';

@Component({
  selector: 'ziva-footer',
  standalone: true,
  template: '<ng-content></ng-content>',
  styles: [`
    :host {
      display: block;
      margin-top: 4px;
      font-size: 12px;
      color: var(--color-text-secondary);
    }
  `]
})
export class ZivaFooterComponent { }
