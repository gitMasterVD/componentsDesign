import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DziCardComponent, DziButtonDirective, DziIconComponent } from '@dizikit';

@Component({
    selector: 'app-card-showcase',
    standalone: true,
    imports: [CommonModule, DziCardComponent, DziButtonDirective, DziIconComponent],
    templateUrl: './card-showcase.component.html',
    styleUrls: ['./card-showcase.component.scss']
})
export class CardShowcaseComponent {
    apiProperties = [
        {
            name: 'ng-content',
            type: 'Slot',
            default: '-',
            description: 'The main content area of the card. Supports any HTML or components.'
        },
        {
            name: '--card-bg',
            type: 'CSS Variable',
            default: 'var(--color-surface)',
            description: 'The background color of the card.'
        },
        {
            name: '--card-padding',
            type: 'CSS Variable',
            default: '16px',
            description: 'The internal padding of the card.'
        },
        {
            name: '--card-border',
            type: 'CSS Variable',
            default: '1px solid var(--color-border)',
            description: 'The border style of the card.'
        },
        {
            name: '--card-border-radius',
            type: 'CSS Variable',
            default: '8px',
            description: 'The border-radius of the card.'
        },
        {
            name: '--card-shadow',
            type: 'CSS Variable',
            default: '0 4px 6px rgba(0, 0, 0, 0.1)',
            description: 'The box-shadow of the card.'
        }
    ];

    activeTabs: { [key: string]: string } = {
        'basic': 'html',
        'content': 'html',
        'media': 'html',
        'complex': 'html'
    };

    setTab(section: string, tab: string) {
        this.activeTabs[section] = tab;
    }

    basicCode = {
        html: `<dzi-card>
  <div class="card-content">
    <h3>Standard Card</h3>
    <p>This is a basic card with default padding, border, and shadow.</p>
  </div>
</dzi-card>`,
        ts: `import { DziCardComponent } from '@dizikit';

@Component({
  imports: [DziCardComponent],
  // ...
})`,
        scss: `/* No custom styles needed for basic card */`
    };

    contentCode = {
        html: `<dzi-card>
  <div class="card-content">
    <h3>Card with Text & Action</h3>
    <p>Cards are perfect for displaying snippets of information, blog posts, or feature descriptions.</p>
    <button dziButton variant="primary" style="margin-top: 1rem;">View More</button>
  </div>
</dzi-card>`,
        ts: `import { DziCardComponent, DziButtonDirective } from '@dizikit';

@Component({
  imports: [DziCardComponent, DziButtonDirective],
  // ...
})`,
        scss: `.card-content {
  h3 { margin-top: 0; }
  p { margin-bottom: 1rem; }
}`
    };

    complexCode = {
        html: `<dzi-card>
  <div class="card-content">
    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
      <h3 style="margin: 0;">Project Alpha</h3>
      <dzi-icon iconName="Star" iconColor="#f59e0b"></dzi-icon>
    </div>
    <p style="margin-bottom: 1.5rem; color: var(--color-text-secondary);">
      A comprehensive enterprise solution for managing supply chain logistics and real-time tracking.
    </p>
    <div style="display: flex; gap: 0.75rem;">
      <button dziButton variant="primary">Edit</button>
      <button dziButton variant="tertiary">Archive</button>
    </div>
  </div>
</dzi-card>`,
        ts: `import { DziCardComponent, DziButtonDirective, DziIconComponent } from '@dizikit';

@Component({
  imports: [DziCardComponent, DziButtonDirective, DziIconComponent],
  // ...
})`,
        scss: `.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}`
    };
}
