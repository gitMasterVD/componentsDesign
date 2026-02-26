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
        icon: 'html',
        disabled: 'html',
    };

    setTab(section: string, tab: string): void {
        this.activeTabs[section] = tab;
    }

    apiProperties = [
        { name: 'variant', type: "'primary' | 'secondary'", default: "'primary'", description: 'Sets the color scheme of the button.' },
        { name: 'disabled', type: 'boolean', default: 'false', description: 'Toggles the disabled state. Can be used as a boolean attribute tag.' },
    ];

    basicCode = {
        html: `<button zivaButton>Default Button</button>
<button zivaButton variant="primary">Primary Button</button>
<button zivaButton variant="secondary">Secondary Button</button>`,
    };

    variantCode = {
        html: `<!-- Primary Variant -->
<button zivaButton variant="primary">Confirm Action</button>

<!-- Secondary Variant -->
<button zivaButton variant="secondary">Dismiss</button>`,
    };

    iconButtonCode = {
        html: `<!-- Buttons with Icons and Text -->
<button zivaButton variant="primary">
  <ziva-icon iconName="Plus" iconColor="#fff"></ziva-icon> Confirm Action
</button>

<button zivaButton variant="primary">
  Confirm Action <ziva-icon iconName="Plus" iconColor="#fff"></ziva-icon>
</button>

<!-- Circular Icon Buttons -->
<button zivaIconButton variant="primary">
  <ziva-icon iconName="Plus" iconColor="#fff"></ziva-icon>
</button>

<button zivaIconButton variant="secondary">
  <ziva-icon iconName="Settings"></ziva-icon>
</button>`,
    };

    disabledCode = {
        html: `<!-- Simple tagged 'disabled' attribute -->
<button zivaButton disabled>Disabled Button</button>

<button zivaIconButton disabled>
  <ziva-icon iconName="Lock" iconColor="#6b7280"></ziva-icon>
</button>

<button zivaIconButton variant="secondary" disabled>
  <ziva-icon iconName="Lock" iconColor="#6b7280"></ziva-icon>
</button>`,
    };
}
