import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { 
    DziSidebarComponent, 
    DziSidebarItemComponent, 
    DziSidebarSectionComponent,
    DziIconComponent 
} from '@dizikit';

@Component({
  selector: 'app-sidebar-showcase',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    DziSidebarComponent, 
    DziSidebarItemComponent, 
    DziSidebarSectionComponent,
    DziIconComponent
  ],
  templateUrl: './sidebar-showcase.component.html',
  styleUrls: ['./sidebar-showcase.component.scss']
})
export class SidebarShowcaseComponent {
  activeTabs: any = {
    basic: 'html',
    layout: 'html',
  };

  setTab(section: string, tab: string): void {
    this.activeTabs[section] = tab;
  }

  isCollapsed = false;

  basicCode = {
    html: `<!-- A simple, clean sidebar with manual items -->
<dzi-sidebar>
  <a dziSidebarItem routerLink="/home">
    <dzi-icon iconName="Home"></dzi-icon>
    <span>Home</span>
  </a>
  <a dziSidebarItem routerLink="/analytics">
    <dzi-icon iconName="BarChart"></dzi-icon>
    <span>Analytics</span>
  </a>
  <a dziSidebarItem routerLink="/settings">
    <dzi-icon iconName="Settings"></dzi-icon>
    <span>Settings</span>
  </a>
</dzi-sidebar>`,
    ts: `// No complex data structures required. 
// Just project your components directly.`
  };

  layoutCode = {
    html: `<dzi-sidebar [(collapsed)]="isCollapsed">
  <!-- Top Branding Area -->
  <div dziSidebarHeader class="logo-area">
    <dzi-icon iconName="Layers" iconColor="var(--color-primary)"></dzi-icon>
    <span *ngIf="!isCollapsed">DIZIKIT UI</span>
  </div>

  <!-- Grouped Navigation -->
  <dzi-sidebar-section title="Main">
    <a dziSidebarItem routerLink="/dashboard" [active]="true">
      <dzi-icon iconName="Layout"></dzi-icon>
      <span *ngIf="!isCollapsed">Dashboard</span>
    </a>
  </dzi-sidebar-section>

  <dzi-sidebar-section title="Account">
    <a dziSidebarItem routerLink="/profile">
      <dzi-icon iconName="User"></dzi-icon>
      <span *ngIf="!isCollapsed">Profile</span>
      <!-- You can put badges anywhere -->
      <span *ngIf="!isCollapsed" class="dzi-sidebar__badge">NEW</span>
    </a>
  </dzi-sidebar-section>

  <!-- Bottom Action Area -->
  <div dziSidebarFooter *ngIf="!isCollapsed">
    <button class="logout-btn">
      <dzi-icon iconName="LogOut"></dzi-icon>
      <span>Logout</span>
    </button>
  </div>
</dzi-sidebar>`,
    ts: `isCollapsed = false;`,
    scss: `.logo-area {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 800;
}

.logout-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 10px;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  background: transparent;
  cursor: pointer;
}`
  };

  apiProperties = [
    { name: 'collapsed', type: 'boolean', default: 'false', description: 'Toggles the sidebar between expanded and mini modes.' },
    { name: 'collapsedChange', type: 'EventEmitter<boolean>', default: '—', description: 'Emits when the sidebar is toggled.' },
    { name: 'dziSidebarItem', type: 'Attribute Directive', default: '—', description: 'Applied to <a> or <button> to use sidebar styling.' },
    { name: 'dziSidebarHeader', type: 'Attribute Directive', default: '—', description: 'Selector for the top logo/branding area.' },
    { name: 'dziSidebarFooter', type: 'Attribute Directive', default: '—', description: 'Selector for the bottom action area.' },
  ];
}
