import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DziBadgeComponent } from '@dizikit';

@Component({
  selector: 'app-badge-showcase',
  standalone: true,
  imports: [CommonModule, DziBadgeComponent],
  templateUrl: './badge-showcase.component.html',
  styleUrls: ['./badge-showcase.component.scss']
})
export class BadgeShowcaseComponent {
  activeTabs: any = {
    variants: 'html',
    sizes: 'html'
  };

  setTab(section: string, tab: string): void {
    this.activeTabs[section] = tab;
  }

  apiProperties = [
    { name: 'variant', type: "'primary' | 'success' | 'warning' | 'error'", default: "'primary'", description: 'Sets the color scheme of the badge.' },
    { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Sets the size of the badge.' }
  ];

  variantCode = {
    html: `<!-- Dot (Empty) -->
<dzi-badge variant="primary"></dzi-badge>
<dzi-badge variant="success"></dzi-badge>
<dzi-badge variant="warning"></dzi-badge>
<dzi-badge variant="error"></dzi-badge>

<!-- With Count -->
<dzi-badge variant="primary">1</dzi-badge>
<dzi-badge variant="success">5</dzi-badge>
<dzi-badge variant="warning">12</dzi-badge>
<dzi-badge variant="error">99+</dzi-badge>`,
    ts: `import { DziBadgeComponent } from '@dizikit';

@Component({
  imports: [DziBadgeComponent],
  // ...
})`,
    scss: `/* Handled by variant input */`
  };

  sizeCode = {
    html: `<!-- With Counts -->
<dzi-badge size="sm">1</dzi-badge>
<dzi-badge size="md">1</dzi-badge>
<dzi-badge size="lg">1</dzi-badge>

<!-- Empty (Dots) -->
<dzi-badge size="sm"></dzi-badge>
<dzi-badge size="md"></dzi-badge>
<dzi-badge size="lg"></dzi-badge>`,
    ts: `import { DziBadgeComponent } from '@dizikit';

@Component({
  imports: [DziBadgeComponent],
  // ...
})`,
    scss: `/* Handled by size input */`
  };
}
