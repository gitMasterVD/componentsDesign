import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DziIconComponent } from '@dizikit';

@Component({
  selector: 'app-icon-showcase',
  standalone: true,
  imports: [CommonModule, DziIconComponent],
  templateUrl: './icon-showcase.component.html',
  styleUrls: ['./icon-showcase.component.scss']
})
export class IconShowcaseComponent {

  // ─── Per-section active tab state ─────────────────────────────────────────
  activeTabs: any = {
    setup: 'npm',
    basic: 'html',
    color: 'html',
    hover: 'html',
    disabled: 'html',
    click: 'html',
  };

  setTab(section: string, tab: string): void {
    this.activeTabs[section] = tab;
  }

  // ─── SECTION 0: Installation & Configuration ──────────────────────────────
  setupCode = {
    npm: `npm install lucide-angular`,
    config: `import { LucideAngularModule, Home, User, Settings } from 'lucide-angular';

// In app.config.ts or your core module:
importProvidersFrom(
  LucideAngularModule.pick({ Home, User, Settings })
)`,
    usage: `<!-- In your component.html -->
<dzi-icon iconName="Home"></dzi-icon>`,
  };

  // ─── API Properties ────────────────────────────────────────────────────────
  apiProperties = [
    { name: 'iconName', type: 'string', default: "'Circle'", description: 'The name of the icon (must be registered in app.config.ts via LucideAngularModule.pick()).' },
    { name: 'iconColor', type: 'string', default: "'var(--color-primary)'", description: 'Sets the color using a CSS value or design token.' },
    { name: 'svgSrc', type: 'string | null', default: 'null', description: 'Path to an external SVG asset.' },
    { name: 'imgSrc', type: 'string | null', default: 'null', description: 'Path to an external Image asset.' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Toggles the disabled visual state. Can be used as a boolean attribute tag.' },
    { name: 'ariaLabel', type: 'string | null', default: 'null', description: 'Sets the accessibility label for screen readers.' },
    { name: 'ariaLabelledby', type: 'string | null', default: 'null', description: 'References an element ID for the icon label.' },
  ];

  // ─── SECTION 1: Basic Icons ────────────────────────────────────────────────
  basicIcons = [
    { label: 'Home', iconName: 'Home' },
    { label: 'Settings', iconName: 'Settings' },
    { label: 'User', iconName: 'User' },
    { label: 'Bell', iconName: 'Bell' },
    { label: 'Search', iconName: 'Search' },
  ];

  basicCode = {
    html: `<!-- Basic icon with default styling -->
<dzi-icon iconName="Home" ariaLabel="Home"></dzi-icon>
<dzi-icon iconName="Settings" ariaLabel="Settings"></dzi-icon>
<dzi-icon iconName="User" ariaLabel="User"></dzi-icon>
<dzi-icon iconName="Bell" ariaLabel="Bell"></dzi-icon>
<dzi-icon iconName="Search" ariaLabel="Search"></dzi-icon>`,
    ts: `// Icons must be registered in app.config.ts
import { Home, Settings, User, Bell, Search } from 'lucide-angular';

// In app.config.ts → LucideAngularModule.pick({ Home, Settings, User, Bell, Search })`,
    scss: `/* 
   DEFAULT COLOR LOGIC:
   The library uses 'var(--color-primary)' by default.
   This variable should be defined in your global theme.
*/
:root {
  --color-primary: #6366f1; 
}`,
  };

  // ─── SECTION 2: Color Icons ────────────────────────────────────────────────
  colorIcons = [
    { label: 'Primary', iconName: 'Zap', color: 'var(--color-primary)', disabled: false, ariaLabel: 'Primary' },
    { label: 'Success', iconName: 'CheckCircle', color: 'var(--color-success)', disabled: false, ariaLabel: 'Success' },
    { label: 'Error', iconName: 'XCircle', color: 'var(--color-error)', disabled: false, ariaLabel: 'Error' },
    { label: 'Warning', iconName: 'AlertTriangle', color: '#f59e0b', disabled: false, ariaLabel: 'Warning' },
    { label: 'Info', iconName: 'Info', color: '#3b82f6', disabled: false, ariaLabel: 'Info' },
  ];

  colorCode = {
    html: `<!-- Use semantic tokens or any CSS color value -->
<dzi-icon iconName="Zap"           iconColor="var(--color-primary)"></dzi-icon>
<dzi-icon iconName="CheckCircle"   iconColor="var(--color-success)"></dzi-icon>
<dzi-icon iconName="XCircle"       iconColor="var(--color-error)"></dzi-icon>
<dzi-icon iconName="AlertTriangle" iconColor="#f59e0b"></dzi-icon>
<dzi-icon iconName="Info"          iconColor="#3b82f6"></dzi-icon>`,
    ts: `// Bind color dynamically from component
status: 'success' | 'error' | 'warning' = 'success';

get statusColor(): string {
  const map = {
    success: 'var(--color-success)',
    error:   'var(--color-error)',
    warning: '#f59e0b',
  };
  return map[this.status];
}`,
    scss: `// Use design tokens defined in your global theme
:root {
  --color-primary: #6366f1;
  --color-success: #22c55e;
  --color-error:   #ef4444;
}`,
  };

  // ─── SECTION 3: Hover Icons ────────────────────────────────────────────────
  hoverIcons = [
    { label: 'Eye / EyeOff', defaultIcon: 'Eye', hoverIcon: 'EyeOff', color: 'var(--color-primary)', ariaLabel: 'Toggle visibility' },
    { label: 'Heart / HeartCrack', defaultIcon: 'Heart', hoverIcon: 'HeartCrack', color: '#ef4444', ariaLabel: 'Like' },
    { label: 'Star / StarOff', defaultIcon: 'Star', hoverIcon: 'StarOff', color: '#f59e0b', ariaLabel: 'Favourite' },
    { label: 'Lock / LockOpen', defaultIcon: 'Lock', hoverIcon: 'LockOpen', color: 'var(--color-primary)', ariaLabel: 'Lock' },
  ];

  hoveredIconIndex: number | null = null;

  hoverCode = {
    html: `<!-- Swap icon on hover using Angular binding -->
<dzi-icon
  [iconName]="isHovered ? 'EyeOff' : 'Eye'"
  iconColor="var(--color-primary)"
  (mouseenter)="isHovered = true"
  (mouseleave)="isHovered = false">
</dzi-icon>`,
    ts: `isHovered = false;

// Or track index for a list of hover icons
hoveredIndex: number | null = null;`,
    scss: `// Smooth transition on icon swap
.hover-icon {
  cursor: pointer;
  transition: transform 0.2s ease, opacity 0.2s ease;

  &:hover {
    transform: scale(1.2);
    opacity: 0.85;
  }
}`,
  };

  // ─── SECTION 4: Disabled Icons ─────────────────────────────────────────────
  disabledIcons = [
    { label: 'Home', iconName: 'Home', color: '', disabled: true, ariaLabel: 'Home Disabled' },
    { label: 'Settings', iconName: 'Settings', color: '', disabled: true, ariaLabel: 'Settings Disabled' },
    { label: 'Save', iconName: 'Save', color: '', disabled: true, ariaLabel: 'Save Disabled' },
    { label: 'Delete', iconName: 'Trash2', color: '', disabled: true, ariaLabel: 'Trash Disabled' },
  ];

  disabledCode = {
    html: `<!-- Set 'disabled' as a tag to apply the disabled state -->
<dzi-icon iconName="Home"     disabled></dzi-icon>
<dzi-icon iconName="Settings" disabled></dzi-icon>
<dzi-icon iconName="Save"     disabled></dzi-icon>
<dzi-icon iconName="Trash2"   disabled></dzi-icon>`,
    ts: `// Bind disabled dynamically
isLoading = true;

// In template: [disabled]="isLoading"`,
    scss: `/*
   DISABLED STATE LOGIC:
   The library handles 'cursor: not-allowed' and opacity internally.
   You only need to define the color token in your theme.
*/
:root {
  --color-disabled: #94a3b8;
}`,
  };

  // ─── SECTION 5: Click Event Icons ─────────────────────────────────────────
  clickIcons = [
    { label: 'Download', iconName: 'Download', color: 'var(--color-primary)', disabled: false, ariaLabel: 'Download' },
    { label: 'Share', iconName: 'Share2', color: 'var(--color-primary)', disabled: false, ariaLabel: 'Share' },
    { label: 'Copy', iconName: 'Copy', color: 'var(--color-primary)', disabled: false, ariaLabel: 'Copy' },
    { label: 'Delete', iconName: 'Trash2', color: 'var(--color-error)', disabled: false, ariaLabel: 'Delete' },
  ];

  clickLog: any[] = [];

  clickCode = {
    html: `<!-- Listen to native (click) event on dzi-icon -->
<dzi-icon
  iconName="Download"
  iconColor="var(--color-primary)"
  ariaLabel="Download"
  (click)="onIconClick('Download')">
</dzi-icon>`,
    ts: `clickLog: string[] = [];

onIconClick(label: string): void {
  const time = new Date().toLocaleTimeString();
  this.clickLog = [\`[\${time}] "\${label}" icon clicked!\`, ...this.clickLog.slice(0, 4)];
}`,
    scss: `.click-icon {
  cursor: pointer;
  transition: transform 0.15s ease;

  &:hover  { transform: scale(1.15); }
  &:active { transform: scale(0.92); }
}`,
  };

  onIconClick(label: string): void {
    const timestamp = new Date().toLocaleTimeString();
    this.clickLog = [`[${timestamp}] "${label}" icon clicked!`, ...this.clickLog.slice(0, 4)];
  }
}
