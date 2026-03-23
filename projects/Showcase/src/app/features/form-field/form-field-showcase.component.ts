import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZivaInputDirective, ZivaLabelComponent, ZivaFooterComponent, ZivaFormFieldComponent } from '@ziva-components';

@Component({
  selector: 'app-form-field-showcase',
  standalone: true,
  imports: [CommonModule, ZivaInputDirective, ZivaLabelComponent, ZivaFooterComponent, ZivaFormFieldComponent],
  templateUrl: './form-field-showcase.component.html',
  styleUrls: ['./form-field-showcase.component.scss']
})
export class FormFieldShowcaseComponent {
  activeTabs: any = {
    basic: 'html',
    hints: 'html',
    status: 'html',
    textarea: 'html'
  };

  setTab(section: string, tab: string): void {
    this.activeTabs[section] = tab;
  }

  basicCode = {
    html: `<ziva-form-field>
  <ziva-label>First Name</ziva-label>
  <input zivaInput placeholder="Enter your first name" />
</ziva-form-field>`,
    ts: `import { ZivaFormFieldComponent, ZivaLabelComponent, ZivaInputDirective } from '@ziva-components';

@Component({
  imports: [ZivaFormFieldComponent, ZivaLabelComponent, ZivaInputDirective],
  // ...
})`,
    scss: `/* Form field handles label and input layout automatically */`
  };

  hintCode = {
    html: `<ziva-form-field>
  <ziva-label>Username</ziva-label>
  <input zivaInput placeholder="e.g. jdoe" />
  <ziva-footer>Your unique identifier on the platform.</ziva-footer>
</ziva-form-field>`,
    ts: `import { ZivaFormFieldComponent, ZivaLabelComponent, ZivaInputDirective, ZivaFooterComponent } from '@ziva-components';

@Component({
  imports: [ZivaFormFieldComponent, ZivaLabelComponent, ZivaInputDirective, ZivaFooterComponent],
  // ...
})`,
    scss: `/* ZivaFooter is useful for display-only hints and descriptions */`
  };

  statusCode = {
    html: `<!-- Success state -->
<ziva-form-field>
  <ziva-label>Discount Code</ziva-label>
  <input zivaInput status="success" value="SAVE20" />
  <ziva-footer>Code applied successfully!</ziva-footer>
</ziva-form-field>

<!-- Warning state -->
<ziva-form-field>
  <ziva-label>Password Strength</ziva-label>
  <input zivaInput type="password" status="warning" value="12345" />
  <ziva-footer>This password is weak.</ziva-footer>
</ziva-form-field>

<!-- Error state -->
<ziva-form-field>
  <ziva-label>Email Address</ziva-label>
  <input zivaInput type="email" [error]="true" value="invalid-email" />
  <ziva-footer>Please enter a valid email address.</ziva-footer>
</ziva-form-field>`,
    ts: `@Component({
  templateUrl: './example.html'
})
export class StatusExample {
  emailError = true;
}`,
    scss: `/* Status colors are applied via [status] and [error] inputs */`
  };

  textareaCode = {
    html: `<ziva-form-field>
  <ziva-label>Bio</ziva-label>
  <textarea zivaInput placeholder="Describe yourself..."></textarea>
  <ziva-footer>Limited to 200 characters.</ziva-footer>
</ziva-form-field>`,
    ts: `@Component({
  template: '...'
})`,
    scss: `/* Form fields fully support textarea elements */`
  };

  apiProperties = [
    { name: 'ziva-form-field', type: 'Component', description: 'The outer container component for form fields. Coordinates label and hint layout.' },
    { name: 'ziva-label', type: 'Component', description: 'The component used for displaying labels within the form field.' },
    { name: 'ziva-footer', type: 'Component', description: 'The component used for displaying hints or help text below the input.' },
  ];
}
