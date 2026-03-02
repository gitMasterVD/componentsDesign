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
  };

  setTab(section: string, tab: string): void {
    this.activeTabs[section] = tab;
  }

  apiProperties = [
    { name: 'variant', type: "'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'", default: "'primary'", description: 'Sets the color scheme of the button.' },
    { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Sets the size of the button.' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Toggles the disabled state.' },
  ];

  basicCode = {
    html: `<button zivaButton>Default Button</button>
<button zivaButton variant="primary">Primary Button</button>
<button zivaButton variant="secondary">Secondary Button</button>`,
  };

  variantCode = {
    html: `<!-- Brand Variants -->
<button zivaButton variant="primary">Primary</button>
<button zivaButton variant="secondary">Secondary</button>

<!-- Feedback Variants -->
<button zivaButton variant="success">Success</button>
<button zivaButton variant="error">Error</button>
<button zivaButton variant="warning">Warning</button>
<button zivaButton variant="info">Info</button>`,
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
  };

  iconButtonCode = {
    html: `<!-- Circular Icon Buttons with Variants -->
<button zivaIconButton variant="primary"><ziva-icon iconName="Plus" iconColor="#fff"></ziva-icon></button>
<button zivaIconButton variant="success"><ziva-icon iconName="Check" iconColor="#fff"></ziva-icon></button>
<button zivaIconButton variant="error"><ziva-icon iconName="Trash" iconColor="#fff"></ziva-icon></button>
<button zivaIconButton variant="warning"><ziva-icon iconName="AlertTriangle" iconColor="#fff"></ziva-icon></button>`,
  };

  disabledCode = {
    html: `<!-- Disabled state applies to all variants and sizes -->
<button zivaButton disabled>Disabled Button</button>
<button zivaButton variant="success" disabled>Disabled Success</button>

<button zivaIconButton disabled>
  <ziva-icon iconName="Lock" iconColor="#6b7280"></ziva-icon>
</button>`,
  };
}
