import { Component } from '@angular/core';

@Component({
  selector: 'dzi-footer',
  standalone: true,
  template: '<ng-content></ng-content>',
  styles: [`
    :host {
      display: block;
      margin-top: var(--form-field-footer-margin);
      font-size: var(--form-field-footer-font-size);
      color: var(--form-field-footer-color);
    }
  `]
})
export class DziFooterComponent { }
