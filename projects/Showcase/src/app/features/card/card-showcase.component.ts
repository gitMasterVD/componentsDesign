import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZivaCardComponent, ZivaButtonDirective, ZivaIconComponent } from '@ziva-components';

@Component({
    selector: 'app-card-showcase',
    standalone: true,
    imports: [CommonModule, ZivaCardComponent, ZivaButtonDirective, ZivaIconComponent],
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
        html: `<ziva-card>
  <div class="card-content">
    <h3>Standard Card</h3>
    <p>This is a basic card with default padding, border, and shadow.</p>
  </div>
</ziva-card>`,
        ts: `import { ZivaCardComponent } from '@ziva-components';

@Component({
  imports: [ZivaCardComponent],
  // ...
})`,
        scss: `/* No custom styles needed for basic card */`
    };

    contentCode = {
        html: `<ziva-card>
  <div class="card-content">
    <h3>Card with Text & Action</h3>
    <p>Cards are perfect for displaying snippets of information, blog posts, or feature descriptions.</p>
    <button zivaButton variant="primary" style="margin-top: 1rem;">View More</button>
  </div>
</ziva-card>`,
        ts: `import { ZivaCardComponent, ZivaButtonDirective } from '@ziva-components';

@Component({
  imports: [ZivaCardComponent, ZivaButtonDirective],
  // ...
})`,
        scss: `.card-content {
  h3 { margin-top: 0; }
  p { margin-bottom: 1rem; }
}`
    };

    complexCode = {
        html: `<ziva-card>
  <div class="card-content">
    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
      <h3 style="margin: 0;">Project Alpha</h3>
      <ziva-icon iconName="Star" iconColor="#f59e0b"></ziva-icon>
    </div>
    <p style="margin-bottom: 1.5rem; color: var(--color-text-secondary);">
      A comprehensive enterprise solution for managing supply chain logistics and real-time tracking.
    </p>
    <div style="display: flex; gap: 0.75rem;">
      <button zivaButton variant="primary">Edit</button>
      <button zivaButton variant="tertiary">Archive</button>
    </div>
  </div>
</ziva-card>`,
        ts: `import { ZivaCardComponent, ZivaButtonDirective, ZivaIconComponent } from '@ziva-components';

@Component({
  imports: [ZivaCardComponent, ZivaButtonDirective, ZivaIconComponent],
  // ...
})`,
        scss: `.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}`
    };
}
