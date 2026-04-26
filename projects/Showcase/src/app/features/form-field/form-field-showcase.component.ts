import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DziInputDirective, DziLabelComponent, DziFooterComponent, DziFormFieldComponent } from '@dizikit';

@Component({
  selector: 'app-form-field-showcase',
  standalone: true,
  imports: [CommonModule, DziInputDirective, DziLabelComponent, DziFooterComponent, DziFormFieldComponent],
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
    html: `<dzi-form-field>
  <dzi-label>First Name</dzi-label>
  <input dziInput placeholder="Enter your first name" />
</dzi-form-field>`,
    ts: `import { DziFormFieldComponent, DziLabelComponent, DziInputDirective } from '@dizikit';

@Component({
  imports: [DziFormFieldComponent, DziLabelComponent, DziInputDirective],
  // ...
})`,
    scss: `/* Form field handles label and input layout automatically */`
  };

  hintCode = {
    html: `<dzi-form-field>
  <dzi-label>Username</dzi-label>
  <input dziInput placeholder="e.g. jdoe" />
  <dzi-footer>Your unique identifier on the platform.</dzi-footer>
</dzi-form-field>`,
    ts: `import { DziFormFieldComponent, DziLabelComponent, DziInputDirective, DziFooterComponent } from '@dizikit';

@Component({
  imports: [DziFormFieldComponent, DziLabelComponent, DziInputDirective, DziFooterComponent],
  // ...
})`,
    scss: `/* DziFooter is useful for display-only hints and descriptions */`
  };

  statusCode = {
    html: `<!-- Success state -->
<dzi-form-field>
  <dzi-label>Discount Code</dzi-label>
  <input dziInput status="success" value="SAVE20" />
  <dzi-footer>Code applied successfully!</dzi-footer>
</dzi-form-field>

<!-- Warning state -->
<dzi-form-field>
  <dzi-label>Password Strength</dzi-label>
  <input dziInput type="password" status="warning" value="12345" />
  <dzi-footer>This password is weak.</dzi-footer>
</dzi-form-field>

<!-- Error state -->
<dzi-form-field>
  <dzi-label>Email Address</dzi-label>
  <input dziInput type="email" [error]="true" value="invalid-email" />
  <dzi-footer>Please enter a valid email address.</dzi-footer>
</dzi-form-field>`,
    ts: `@Component({
  templateUrl: './example.html'
})
export class StatusExample {
  emailError = true;
}`,
    scss: `/* Status colors are applied via [status] and [error] inputs */`
  };

  textareaCode = {
    html: `<dzi-form-field>
  <dzi-label>Bio</dzi-label>
  <textarea dziInput placeholder="Describe yourself..."></textarea>
  <dzi-footer>Limited to 200 characters.</dzi-footer>
</dzi-form-field>`,
    ts: `@Component({
  template: '...'
})`,
    scss: `/* Form fields fully support textarea elements */`
  };

  apiProperties = [
    { name: 'dzi-form-field', type: 'Component', description: 'The outer container component for form fields. Coordinates label and hint layout.' },
    { name: 'dzi-label', type: 'Component', description: 'The component used for displaying labels within the form field.' },
    { name: 'dzi-footer', type: 'Component', description: 'The component used for displaying hints or help text below the input.' },
  ];
}
