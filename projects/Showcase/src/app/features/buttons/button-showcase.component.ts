import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZivaButtonDirective, ZivaIconButtonDirective, ZivaIconComponent } from '@ziva-components';

@Component({
  selector: 'app-button-showcase',
  standalone: true,
  imports: [CommonModule, ZivaButtonDirective, ZivaIconButtonDirective, ZivaIconComponent],
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
    html: `<button zivaButton>Default Button</button>
<button zivaButton variant="primary">Primary Button</button>
<button zivaButton variant="secondary">Secondary Button</button>`,
    ts: `import { ZivaButtonDirective } from '@ziva-components';

@Component({
  imports: [ZivaButtonDirective],
  // ...
})`,
    scss: `/* Default button styles are applied via directive */`
  };

  variantCode = {
    html: `<!-- Brand Variants -->
<button zivaButton variant="primary">Primary</button>
<button zivaButton variant="secondary">Secondary</button>
<button zivaButton variant="tertiary">Tertiary (Ghost)</button>

<!-- Feedback Variants -->
<button zivaButton variant="success">Success</button>
<button zivaButton variant="error">Error</button>
<button zivaButton variant="warning">Warning</button>
<button zivaButton variant="info">Info</button>`,
    ts: `import { ZivaButtonDirective } from '@ziva-components';

@Component({
  imports: [ZivaButtonDirective],
  // ...
})`,
    scss: `/* Variants are handled by the [variant] input */`
  };

  sizeCode = {
    html: `<!-- Standard Buttons -->
<button zivaButton size="sm">Small</button>
<button zivaButton size="md">Medium</button>
<button zivaButton size="lg">Large</button>

<!-- Icon Buttons -->
<button zivaIconButton size="sm"><ziva-icon iconName="Plus" iconColor="#fff"></ziva-icon></button>
<button zivaIconButton size="md"><ziva-icon iconName="Plus" iconColor="#fff"></ziva-icon></button>
<button zivaIconButton size="lg"><ziva-icon iconName="Plus" iconColor="#fff"></ziva-icon></button>`,
    ts: `import { ZivaButtonDirective, ZivaIconButtonDirective, ZivaIconComponent } from '@ziva-components';

@Component({
  imports: [ZivaButtonDirective, ZivaIconButtonDirective, ZivaIconComponent],
  // ...
})`,
    scss: `/* Sizes are handled by the [size] input */`
  };

  iconButtonCode = {
    html: `<!-- Circular Icon Buttons with Variants -->
<button zivaIconButton variant="primary"><ziva-icon iconName="Plus" iconColor="#fff"></ziva-icon></button>
<button zivaIconButton variant="success"><ziva-icon iconName="Check" iconColor="#fff"></ziva-icon></button>
<button zivaIconButton variant="error"><ziva-icon iconName="Trash" iconColor="#fff"></ziva-icon></button>
<button zivaIconButton variant="warning"><ziva-icon iconName="AlertTriangle" iconColor="#fff"></ziva-icon></button>
<button zivaIconButton variant="tertiary"><ziva-icon iconName="Settings"></ziva-icon></button>`,
    ts: `import { ZivaIconButtonDirective, ZivaIconComponent } from '@ziva-components';

@Component({
  imports: [ZivaIconButtonDirective, ZivaIconComponent],
  // ...
})`,
    scss: `/* Icon buttons use zivaIconButton directive */`
  };

  disabledCode = {
    html: `<!-- Disabled state applies to all variants and sizes -->
<button zivaButton disabled>Disabled Button</button>
<button zivaButton variant="success" disabled>Disabled Success</button>

<button zivaIconButton disabled>
  <ziva-icon iconName="Lock" iconColor="#6b7280"></ziva-icon>
</button>`,
    ts: `import { ZivaButtonDirective, ZivaIconButtonDirective } from '@ziva-components';

@Component({
  imports: [ZivaButtonDirective, ZivaIconButtonDirective],
  // ...
})`,
    scss: `/* Disabled styles are applied via [disabled] attribute */`
  };

  interactiveCode = {
    html: `<!-- Interactive Split Button Example -->
<div class="split-button-container">
  <div class="split-button">
    <button zivaButton variant="primary" (click)="onMainActionClick()">
      {{ selectedAction }}
    </button>
    <button zivaIconButton variant="primary" (click)="toggleDropdown()">
      <ziva-icon iconName="ChevronDown" iconColor="#fff"></ziva-icon>
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
  button[zivaButton] { border-radius: 8px 0 0 8px; }
  button[zivaIconButton] { border-radius: 0 8px 8px 0; }
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
