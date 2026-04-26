import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DziRadioButtonComponent } from '@dizikit';

@Component({
  selector: 'app-radio-showcase',
  standalone: true,
  imports: [CommonModule, FormsModule, DziRadioButtonComponent],
  templateUrl: './radio-showcase.component.html',
  styleUrls: ['./radio-showcase.component.scss']
})
export class RadioShowcaseComponent {
  // ─── Per-section active tab state ─────────────────────────────────────────
  activeTabs: any = {
    simple: 'html',
    colors: 'html',
    sizes: 'html',
    disabled: 'html',
  };

  setTab(section: string, tab: string): void {
    this.activeTabs[section] = tab;
  }

  // ─── SIMPLE EXAMPLE ────────────────────────────────────────────────────────
  selectedBasic = 'option1';

  simpleCode = {
    html: `<!-- Grouped radios sharing the same [name] and bound to [(ngModel)] -->
<dzi-radio-button name="basic" value="option1" [(ngModel)]="selectedBasic">Option 1</dzi-radio-button>
<dzi-radio-button name="basic" value="option2" [(ngModel)]="selectedBasic">Option 2</dzi-radio-button>
<dzi-radio-button name="basic" value="option3" [(ngModel)]="selectedBasic">Option 3</dzi-radio-button>

<p>Selected: {{ selectedBasic }}</p>`,
    ts: `import { DziRadioButtonComponent } from '@dizikit';

@Component({
  imports: [DziRadioButtonComponent, FormsModule],
  // ...
})
export class RadioExample {
  selectedBasic = 'option1';
}`,
    scss: `/* Radio buttons are inline-flex by default */`
  };

  // ─── COLORS ────────────────────────────────────────────────────────────────
  colorCode = {
    html: `<!-- Semantic color variants -->
<dzi-radio-button color="primary" [checked]="true">Primary</dzi-radio-button>
<dzi-radio-button color="success" [checked]="true">Success</dzi-radio-button>
<dzi-radio-button color="error"   [checked]="true">Error</dzi-radio-button>
<dzi-radio-button color="warning" [checked]="true">Warning</dzi-radio-button>`,
    ts: `/* Use the [color] input to convey semantic meaning */`,
    scss: ``
  };

  // ─── SIZES ─────────────────────────────────────────────────────────────────
  sizeCode = {
    html: `<!-- size variants: sm, md (default), lg -->
<dzi-radio-button size="sm" [checked]="true">Small</dzi-radio-button>
<dzi-radio-button size="md" [checked]="true">Medium</dzi-radio-button>
<dzi-radio-button size="lg" [checked]="true">Large</dzi-radio-button>`,
    ts: `/* Choose from 3 standard sizes */`,
    scss: ``
  };

  // ─── DISABLED ──────────────────────────────────────────────────────────────
  disabledCode = {
    html: `<!-- Read-only or locked states -->
<dzi-radio-button [disabled]="true">Disabled Unchecked</dzi-radio-button>
<dzi-radio-button [disabled]="true" [checked]="true">Disabled Checked</dzi-radio-button>`,
    ts: `/* Prevents all user interaction */`,
    scss: ``
  };

  // ─── API Properties ────────────────────────────────────────────────────────
  apiProperties = [
    { name: 'checked', type: 'boolean', default: 'false', description: 'Whether the radio button is selected.' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Toggles the disabled visual and interactive state.' },
    { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Sets the visual dimensions of the component.' },
    { name: 'color', type: "'primary' | 'success' | 'error' | 'warning'", default: "'primary'", description: 'Sets the theme color when checked.' },
    { name: 'name', type: 'string', default: '—', description: 'Standard native name attribute used for grouping.' },
    { name: 'value', type: 'any', default: '—', description: 'The unique value this radio button represents.' },
    { name: 'checkedChange', type: 'EventEmitter<boolean>', default: '—', description: 'Emitted when the selection changes.' },
  ];
}
