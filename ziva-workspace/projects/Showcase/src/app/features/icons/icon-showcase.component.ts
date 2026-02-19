import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZivaIconComponent } from '@ziva-components';

interface Tab {
  id: string;
  label: string;
}

@Component({
  selector: 'app-icon-showcase',
  standalone: true,
  imports: [CommonModule, ZivaIconComponent],
  templateUrl: './icon-showcase.component.html',
  styleUrls: ['./icon-showcase.component.scss']
})
export class IconShowcaseComponent {
  activeTab = 'examples';

  tabs: Tab[] = [
    { id: 'examples', label: 'Examples' },
    { id: 'html', label: 'HTML' },
    { id: 'scss', label: 'SCSS' },
    { id: 'ts', label: 'TS' },
  ];

  iconExamples = [
    { label: 'Primary', iconName: 'Zap', colorVar: 'var(--color-primary)' },
    { label: 'Success', iconName: 'CheckCircle', colorVar: 'var(--color-success)' },
    { label: 'Error', iconName: 'XCircle', colorVar: 'var(--color-error)' },
    { label: 'Warning', iconName: 'AlertCircle', colorVar: 'var(--color-warning)' },
    { label: 'Disabled', iconName: 'Ban', disabled: true },
  ];

  codeHtml = `<ziva-icon iconName="Zap"></ziva-icon>
<ziva-icon iconName="CheckCircle" iconColor="var(--color-success)"></ziva-icon>
<ziva-icon iconName="XCircle" iconColor="var(--color-error)"></ziva-icon>
<ziva-icon iconName="AlertCircle" iconColor="var(--color-warning)"></ziva-icon>
<ziva-icon iconName="Ban" [disabled]="true"></ziva-icon>`;

  codeScss = `ziva-icon {
  // Global semantic tokens are used for coloring
  --color-primary: #2563eb;
  --color-success: #16a34a;
  --color-error: #dc2626;
  --color-warning: #f59e0b;
  --color-disabled: #d1d5db;
}`;

  codeTs = `import { Component } from '@angular/core';
import { ZivaIconComponent } from '@ziva-components';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [ZivaIconComponent],
  template: \`<ziva-icon iconName="Zap"></ziva-icon>\`
})
export class ExampleComponent {}`;

  setTab(tabId: string): void {
    this.activeTab = tabId;
  }
}
