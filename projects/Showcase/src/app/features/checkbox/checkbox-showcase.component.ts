import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DziCheckboxComponent } from '@dizikit';

@Component({
  selector: 'app-checkbox-showcase',
  standalone: true,
  imports: [CommonModule, FormsModule, DziCheckboxComponent],
  templateUrl: './checkbox-showcase.component.html',
  styleUrls: ['./checkbox-showcase.component.scss']
})
export class CheckboxShowcaseComponent {
  activeTabs: any = {
    basic: 'html',
    colors: 'html',
    sizes: 'html',
    indeterminate: 'html',
    disabled: 'html',
    forms: 'html',
  };

  setTab(section: string, tab: string): void {
    this.activeTabs[section] = tab;
  }

  apiProperties = [
    { name: 'checked', type: 'boolean', default: 'false', description: 'Whether the checkbox is checked.' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Toggles the disabled state.' },
    { name: 'indeterminate', type: 'boolean', default: 'false', description: 'Sets the indeterminate (mixed) state.' },
    { name: 'required', type: 'boolean', default: 'false', description: 'Marks the checkbox as required for form validation.' },
    { name: 'error', type: 'boolean', default: 'false', description: 'Applies the error visual state.' },
    { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Sets the size of the checkbox.' },
    { name: 'color', type: "'primary' | 'success' | 'error' | 'warning'", default: "'primary'", description: 'Sets the color scheme when checked.' },
    { name: 'name', type: 'string', default: '—', description: 'Name attribute for the native input.' },
    { name: 'value', type: 'string', default: '—', description: 'Value attribute for the native input.' },
    { name: 'ariaLabel', type: 'string', default: '—', description: 'Accessible label for screen readers.' },
    { name: 'ariaLabelledBy', type: 'string', default: '—', description: 'ID of the element that labels this checkbox.' },
    { name: 'ariaDescribedBy', type: 'string', default: '—', description: 'ID of the element that describes this checkbox.' },
    { name: 'checkedChange', type: 'EventEmitter<boolean>', default: '—', description: 'Emits when checked state changes. Supports [(checked)] two-way binding.' },
    { name: 'indeterminateChange', type: 'EventEmitter<boolean>', default: '—', description: 'Emits when indeterminate state changes.' },
  ];

  basicCode = {
    html: `<dzi-checkbox>Accept terms and conditions</dzi-checkbox>
<dzi-checkbox [checked]="true">Pre-checked option</dzi-checkbox>
<dzi-checkbox>Subscribe to newsletter</dzi-checkbox>`,
    ts: `import { DziCheckboxComponent } from '@dizikit';

@Component({
  imports: [DziCheckboxComponent],
  // ...
})`,
    scss: `/* Checkbox is a standalone component */`
  };

  colorCode = {
    html: `<dzi-checkbox color="primary" [checked]="true">Primary</dzi-checkbox>
<dzi-checkbox color="success" [checked]="true">Success</dzi-checkbox>
<dzi-checkbox color="error" [checked]="true">Error</dzi-checkbox>
<dzi-checkbox color="warning" [checked]="true">Warning</dzi-checkbox>`,
    ts: `import { DziCheckboxComponent } from '@dizikit';

@Component({
  imports: [DziCheckboxComponent],
  // ...
})`,
    scss: `/* Colors are applied via the [color] input */`
  };

  sizeCode = {
    html: `<dzi-checkbox size="sm" [checked]="true">Small</dzi-checkbox>
<dzi-checkbox size="md" [checked]="true">Medium</dzi-checkbox>
<dzi-checkbox size="lg" [checked]="true">Large</dzi-checkbox>`,
    ts: `import { DziCheckboxComponent } from '@dizikit';

@Component({
  imports: [DziCheckboxComponent],
  // ...
})`,
    scss: `/* Sizes are handled by the [size] input */`
  };

  indeterminateCode = {
    html: `<!-- Parent with indeterminate state -->
<dzi-checkbox [indeterminate]="true">Select all items</dzi-checkbox>

<!-- Child checkboxes -->
<dzi-checkbox [checked]="true">Item 1 (selected)</dzi-checkbox>
<dzi-checkbox>Item 2 (not selected)</dzi-checkbox>
<dzi-checkbox [checked]="true">Item 3 (selected)</dzi-checkbox>`,
    ts: `@Component({
  templateUrl: './example.html'
})
export class CheckboxExample {
  isIndeterminate = true;
}`,
    scss: `/* Indeterminate state is visual only, does not affect value */`
  };

  disabledCode = {
    html: `<dzi-checkbox [disabled]="true">Disabled unchecked</dzi-checkbox>
<dzi-checkbox [disabled]="true" [checked]="true">Disabled checked</dzi-checkbox>
<dzi-checkbox [disabled]="true" [indeterminate]="true">Disabled indeterminate</dzi-checkbox>`,
    ts: `import { DziCheckboxComponent } from '@dizikit';

@Component({
  imports: [DziCheckboxComponent],
  // ...
})`,
    scss: `/* Disabled state is handled by the [disabled] input */`
  };

  formsCode = {
    html: `<!-- Two-way binding -->
<dzi-checkbox [(checked)]="agreedToTerms">
  I agree to the terms
</dzi-checkbox>
<p>Agreed: {{ agreedToTerms }}</p>

<!-- Error state for validation -->
<dzi-checkbox [error]="true" [required]="true">
  This field is required
</dzi-checkbox>`,
    ts: `export class FormExample {
  agreedToTerms = false;
}`,
    scss: `/* Checkbox supports two-way binding on [checked] property */`
  };

  // Interactive state
  agreedToTerms = false;
  selectAllState = true;
  child1 = true;
  child2 = false;
  child3 = true;

  get isIndeterminate(): boolean {
    const all = this.child1 && this.child2 && this.child3;
    const none = !this.child1 && !this.child2 && !this.child3;
    return !all && !none;
  }

  get isAllChecked(): boolean {
    return this.child1 && this.child2 && this.child3;
  }

  onSelectAllChange(checked: boolean): void {
    this.child1 = checked;
    this.child2 = checked;
    this.child3 = checked;
  }

  onChildChange(): void {
    // Indeterminate is handled by the getter
  }
}
