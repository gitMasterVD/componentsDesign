import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DziRadioComponent } from '@dizikit';

@Component({
  selector: 'app-radio-showcase',
  standalone: true,
  imports: [CommonModule, FormsModule, DziRadioComponent],
  templateUrl: './radio-showcase.component.html',
  styleUrls: ['./radio-showcase.component.scss']
})
export class RadioShowcaseComponent {
  activeTabs: any = {
    basic: 'html',
    colors: 'html',
    sizes: 'html',
    disabled: 'html',
    forms: 'html',
  };

  setTab(section: string, tab: string): void {
    this.activeTabs[section] = tab;
  }

  apiProperties = [
    { name: 'checked', type: 'boolean', default: 'false', description: 'Whether the radio is checked.' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Toggles the disabled state.' },
    { name: 'required', type: 'boolean', default: 'false', description: 'Marks the radio as required for form validation.' },
    { name: 'error', type: 'boolean', default: 'false', description: 'Applies the error visual state.' },
    { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Sets the size of the radio.' },
    { name: 'color', type: "'primary' | 'success' | 'error' | 'warning'", default: "'primary'", description: 'Sets the color scheme when checked.' },
    { name: 'name', type: 'string', default: '—', description: 'Name attribute for the native input. Used to group radios.' },
    { name: 'value', type: 'any', default: '—', description: 'Value attribute for the native input.' },
    { name: 'ariaLabel', type: 'string', default: '—', description: 'Accessible label for screen readers.' },
    { name: 'ariaLabelledBy', type: 'string', default: '—', description: 'ID of the element that labels this radio.' },
    { name: 'ariaDescribedBy', type: 'string', default: '—', description: 'ID of the element that describes this radio.' },
    { name: 'checkedChange', type: 'EventEmitter<boolean>', default: '—', description: 'Emits when checked state changes.' },
  ];

  basicCode = {
    html: `<dzi-radio name="basic" value="option1" [(ngModel)]="selectedBasic">Option 1</dzi-radio>
<dzi-radio name="basic" value="option2" [(ngModel)]="selectedBasic">Option 2</dzi-radio>
<dzi-radio name="basic" value="option3" [(ngModel)]="selectedBasic">Option 3</dzi-radio>`,
    ts: `import { DziRadioComponent } from '@dizikit';

@Component({
  imports: [DziRadioComponent, FormsModule],
  // ...
})
export class RadioExample {
  selectedBasic = 'option1';
}`,
    scss: `/* Radio is a standalone component */`
  };

  colorCode = {
    html: `<dzi-radio color="primary" [checked]="true">Primary</dzi-radio>
<dzi-radio color="success" [checked]="true">Success</dzi-radio>
<dzi-radio color="error" [checked]="true">Error</dzi-radio>
<dzi-radio color="warning" [checked]="true">Warning</dzi-radio>`,
    ts: `import { DziRadioComponent } from '@dizikit';

@Component({
  imports: [DziRadioComponent],
  // ...
})`,
    scss: `/* Colors are applied via the [color] input */`
  };

  sizeCode = {
    html: `<dzi-radio size="sm" [checked]="true">Small</dzi-radio>
<dzi-radio size="md" [checked]="true">Medium</dzi-radio>
<dzi-radio size="lg" [checked]="true">Large</dzi-radio>`,
    ts: `import { DziRadioComponent } from '@dizikit';

@Component({
  imports: [DziRadioComponent],
  // ...
})`,
    scss: `/* Sizes are handled by the [size] input */`
  };

  disabledCode = {
    html: `<dzi-radio [disabled]="true">Disabled unchecked</dzi-radio>
<dzi-radio [disabled]="true" [checked]="true">Disabled checked</dzi-radio>`,
    ts: `import { DziRadioComponent } from '@dizikit';

@Component({
  imports: [DziRadioComponent],
  // ...
})`,
    scss: `/* Disabled state is handled by the [disabled] input */`
  };

  formsCode = {
    html: `<!-- Using with ngModel -->
<div class="radio-group">
  <dzi-radio name="framework" value="angular" [(ngModel)]="favoriteFramework">Angular</dzi-radio>
  <dzi-radio name="framework" value="react" [(ngModel)]="favoriteFramework">React</dzi-radio>
  <dzi-radio name="framework" value="vue" [(ngModel)]="favoriteFramework">Vue</dzi-radio>
</div>
<p>Selected: {{ favoriteFramework }}</p>`,
    ts: `export class FormExample {
  favoriteFramework = 'angular';
}`,
    scss: `.radio-group { display: flex; gap: 1rem; }`
  };

  // Interactive state
  selectedBasic = 'option1';
  favoriteFramework = 'angular';
}
