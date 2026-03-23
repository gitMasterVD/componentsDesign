import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ZivaCheckboxComponent } from '@ziva-components';

@Component({
  selector: 'app-checkbox-showcase',
  standalone: true,
  imports: [CommonModule, FormsModule, ZivaCheckboxComponent],
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
    html: `<ziva-checkbox>Accept terms and conditions</ziva-checkbox>
<ziva-checkbox [checked]="true">Pre-checked option</ziva-checkbox>
<ziva-checkbox>Subscribe to newsletter</ziva-checkbox>`,
  };

  colorCode = {
    html: `<ziva-checkbox color="primary" [checked]="true">Primary</ziva-checkbox>
<ziva-checkbox color="success" [checked]="true">Success</ziva-checkbox>
<ziva-checkbox color="error" [checked]="true">Error</ziva-checkbox>
<ziva-checkbox color="warning" [checked]="true">Warning</ziva-checkbox>`,
  };

  sizeCode = {
    html: `<ziva-checkbox size="sm" [checked]="true">Small</ziva-checkbox>
<ziva-checkbox size="md" [checked]="true">Medium</ziva-checkbox>
<ziva-checkbox size="lg" [checked]="true">Large</ziva-checkbox>`,
  };

  indeterminateCode = {
    html: `<!-- Parent with indeterminate state -->
<ziva-checkbox [indeterminate]="true">Select all items</ziva-checkbox>

<!-- Child checkboxes -->
<ziva-checkbox [checked]="true">Item 1 (selected)</ziva-checkbox>
<ziva-checkbox>Item 2 (not selected)</ziva-checkbox>
<ziva-checkbox [checked]="true">Item 3 (selected)</ziva-checkbox>`,
  };

  disabledCode = {
    html: `<ziva-checkbox [disabled]="true">Disabled unchecked</ziva-checkbox>
<ziva-checkbox [disabled]="true" [checked]="true">Disabled checked</ziva-checkbox>
<ziva-checkbox [disabled]="true" [indeterminate]="true">Disabled indeterminate</ziva-checkbox>`,
  };

  formsCode = {
    html: `<!-- Two-way binding -->
<ziva-checkbox [(checked)]="agreedToTerms">
  I agree to the terms
</ziva-checkbox>
<p>Agreed: {{ agreedToTerms }}</p>

<!-- Error state for validation -->
<ziva-checkbox [error]="true" [required]="true">
  This field is required
</ziva-checkbox>`,
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
