import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DziTagComponent, DziIconComponent } from '@dizikit';

@Component({
  selector: 'app-tag-showcase',
  standalone: true,
  imports: [CommonModule, DziTagComponent, DziIconComponent],
  templateUrl: './tag-showcase.component.html',
  styleUrls: ['./tag-showcase.component.scss']
})
export class TagShowcaseComponent {
  activeTabs: any = {
    variants: 'html',
    sizes: 'html',
    closable: 'html'
  };

  setTab(section: string, tab: string): void {
    this.activeTabs[section] = tab;
  }

  onTagClosed(tagName: string) {
    console.log(`Tag closed: ${tagName}`);
    alert(`Tag '${tagName}' closed! (See console)`);
  }

  apiProperties = [
    { name: 'variant', type: "'primary' | 'success' | 'warning' | 'error' | 'neutral'", default: "'neutral'", description: 'Sets the color scheme of the tag.' },
    { name: 'appearance', type: "'solid' | 'soft' | 'outline'", default: "'soft'", description: 'Sets the visual style of the tag.' },
    { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Sets the size of the tag.' },
    { name: 'closable', type: 'boolean', default: 'false', description: 'Shows a close icon that emits the closed event when clicked.' },
    { name: 'closed', type: 'EventEmitter<void>', default: '—', description: 'Emits when the close icon is clicked.' }
  ];

  variantCode = {
    html: `<!-- Soft (Default) -->
<dzi-tag variant="primary">Primary</dzi-tag>
<dzi-tag variant="success">Success</dzi-tag>

<!-- Solid -->
<dzi-tag variant="error" appearance="solid">Error</dzi-tag>
<dzi-tag variant="neutral" appearance="solid">Neutral</dzi-tag>

<!-- Outline -->
<dzi-tag variant="warning" appearance="outline">Warning</dzi-tag>`,
    ts: `import { DziTagComponent } from '@dizikit';

@Component({
  imports: [DziTagComponent],
  // ...
})`,
    scss: `/* Handled by variant and appearance inputs */`
  };

  sizeCode = {
    html: `<dzi-tag size="sm" variant="primary">Small Tag</dzi-tag>
<dzi-tag size="md" variant="success">Medium Tag</dzi-tag>
<dzi-tag size="lg" variant="warning">Large Tag</dzi-tag>`,
    ts: `import { DziTagComponent } from '@dizikit';

@Component({
  imports: [DziTagComponent],
  // ...
})`,
    scss: `/* Handled by size input */`
  };

  closableCode = {
    html: `<dzi-tag variant="primary" [closable]="true" (closed)="onTagClosed('Feature')">
  Feature
</dzi-tag>
<dzi-tag variant="success" appearance="solid" [closable]="true" (closed)="onTagClosed('Approved')">
  Approved
</dzi-tag>`,
    ts: `import { Component } from '@angular/core';
import { DziTagComponent } from '@dizikit';

@Component({
  imports: [DziTagComponent],
  // ...
})
export class MyComponent {
  onTagClosed(tagName: string) {
    console.log('Tag closed:', tagName);
  }
}`,
    scss: `/* Handled internally by the component */`
  };
}
