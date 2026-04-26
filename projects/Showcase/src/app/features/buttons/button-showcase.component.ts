import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DziButtonDirective, DziIconButtonDirective, DziIconComponent } from '@dizikit';

@Component({
  selector: 'app-button-showcase',
  standalone: true,
  imports: [CommonModule, DziButtonDirective, DziIconButtonDirective, DziIconComponent],
  templateUrl: './button-showcase.component.html',
  styleUrls: ['./button-showcase.component.scss']
})
export class ButtonShowcaseComponent {
  activeTabs: any = {
    basic: 'html',
    variants: 'html',
    sizes: 'html',
    icon: 'html',
    disabled: 'html',
    interactive: 'html',
  };

  setTab(section: string, tab: string): void {
    this.activeTabs[section] = tab;
  }

  apiProperties = [
    { name: 'variant', type: "'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info' | 'tertiary'", default: "'primary'", description: 'Sets the color scheme of the button.' },
    { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Sets the size of the button.' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Toggles the disabled state.' },
  ];

  basicCode = {
    html: `<button dziButton>Default Button</button>
<button dziButton variant="primary">Primary Button</button>
<button dziButton variant="secondary">Secondary Button</button>`,
    ts: `import { DziButtonDirective } from '@dizikit';

@Component({
  imports: [DziButtonDirective],
  // ...
})`,
    scss: `/* Default button styles are applied via directive */`
  };

  variantCode = {
    html: `<!-- Brand Variants -->
<button dziButton variant="primary">Primary</button>
<button dziButton variant="secondary">Secondary</button>
<button dziButton variant="tertiary">Tertiary (Ghost)</button>

<!-- Feedback Variants -->
<button dziButton variant="success">Success</button>
<button dziButton variant="error">Error</button>
<button dziButton variant="warning">Warning</button>
<button dziButton variant="info">Info</button>`,
    ts: `import { DziButtonDirective } from '@dizikit';

@Component({
  imports: [DziButtonDirective],
  // ...
})`,
    scss: `/* Variants are handled by the [variant] input */`
  };

  sizeCode = {
    html: `<!-- Standard Buttons -->
<button dziButton size="sm">Small</button>
<button dziButton size="md">Medium</button>
<button dziButton size="lg">Large</button>

<!-- Icon Buttons -->
<button dziIconButton size="sm"><dzi-icon iconName="Plus" iconColor="#fff"></dzi-icon></button>
<button dziIconButton size="md"><dzi-icon iconName="Plus" iconColor="#fff"></dzi-icon></button>
<button dziIconButton size="lg"><dzi-icon iconName="Plus" iconColor="#fff"></dzi-icon></button>`,
    ts: `import { DziButtonDirective, DziIconButtonDirective, DziIconComponent } from '@dizikit';

@Component({
  imports: [DziButtonDirective, DziIconButtonDirective, DziIconComponent],
  // ...
})`,
    scss: `/* Sizes are handled by the [size] input */`
  };

  iconButtonCode = {
    html: `<!-- Circular Icon Buttons with Variants -->
<button dziIconButton variant="primary"><dzi-icon iconName="Plus" iconColor="#fff"></dzi-icon></button>
<button dziIconButton variant="success"><dzi-icon iconName="Check" iconColor="#fff"></dzi-icon></button>
<button dziIconButton variant="error"><dzi-icon iconName="Trash" iconColor="#fff"></dzi-icon></button>
<button dziIconButton variant="warning"><dzi-icon iconName="AlertTriangle" iconColor="#fff"></dzi-icon></button>
<button dziIconButton variant="tertiary"><dzi-icon iconName="Settings"></dzi-icon></button>`,
    ts: `import { DziIconButtonDirective, DziIconComponent } from '@dizikit';

@Component({
  imports: [DziIconButtonDirective, DziIconComponent],
  // ...
})`,
    scss: `/* Icon buttons use dziIconButton directive */`
  };

  disabledCode = {
    html: `<!-- Disabled state applies to all variants and sizes -->
<button dziButton disabled>Disabled Button</button>
<button dziButton variant="success" disabled>Disabled Success</button>

<button dziIconButton disabled>
  <dzi-icon iconName="Lock" iconColor="#6b7280"></dzi-icon>
</button>`,
    ts: `import { DziButtonDirective, DziIconButtonDirective } from '@dizikit';

@Component({
  imports: [DziButtonDirective, DziIconButtonDirective],
  // ...
})`,
    scss: `/* Disabled styles are applied via [disabled] attribute */`
  };

  interactiveCode = {
    html: `<!-- Interactive Split Button Example -->
<div class="split-button-container">
  <div class="split-button">
    <button dziButton variant="primary" (click)="onMainActionClick()">
      {{ selectedAction }}
    </button>
    <button dziIconButton variant="primary" (click)="toggleDropdown()">
      <dzi-icon iconName="ChevronDown" iconColor="#fff"></dzi-icon>
    </button>
  </div>

  @if (isDropdownOpen) {
    <div class="dropdown-menu">
      <div class="dropdown-item" (click)="selectAction('Create Project')">Create Project</div>
      <div class="dropdown-item" (click)="selectAction('Import Data')">Import Data</div>
      <div class="dropdown-item" (click)="selectAction('Export Report')">Export Report</div>
    </div>
  }
</div>`,
    ts: `export class ExampleComponent {
  selectedAction = 'Create Project';
  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectAction(action: string) {
    this.selectedAction = action;
    this.isDropdownOpen = false;
  }
}`,
    scss: `.split-button {
  display: flex;
  overflow: hidden;
  button[dziButton] { border-radius: 8px 0 0 8px; }
  button[dziIconButton] { border-radius: 0 8px 8px 0; }
}`
  };

  // Interactive state
  selectedAction = 'Create Project';
  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectAction(action: string) {
    this.selectedAction = action;
    this.isDropdownOpen = false;
    // console.log(`Action updated to: ${action}`);
  }

  onMainActionClick() {
    // console.log(`Executing: ${this.selectedAction}`);
  }
}
