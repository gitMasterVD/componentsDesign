import {
    Component,
    Input,
    Output,
    EventEmitter,
    booleanAttribute,
    ChangeDetectionStrategy,
    ViewEncapsulation,
    Inject,
    forwardRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DziIconComponent } from '../dzi-icon';

// ─── DZI SIDEBAR MAIN (Move up for DI) ──────────────────────────────────────
@Component({
    selector: 'dzi-sidebar',
    standalone: true,
    imports: [CommonModule, RouterModule, DziIconComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    templateUrl: './dzi-sidebar.html',
    styleUrls: ['./dzi-sidebar.scss'],
})
export class DziSidebarComponent {
    /** Whether the sidebar is collapsed */
    @Input({ transform: booleanAttribute }) collapsed = false;

    /** Emits when the collapsed state changes */
    @Output() collapsedChange = new EventEmitter<boolean>();

    toggleCollapse(): void {
        this.collapsed = !this.collapsed;
        this.collapsedChange.emit(this.collapsed);
    }
}

// ─── DZI SIDEBAR ITEM ───────────────────────────────────────────────────────
@Component({
    selector: 'a[dziSidebarItem], div[dziSidebarItem], button[dziSidebarItem]',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="dzi-sidebar__link-content">
            <!-- Icon Slot: This will always show -->
            <div class="dzi-sidebar__item-icon">
                <ng-content select="[dziSidebarIcon], dzi-icon"></ng-content>
            </div>
            
            <!-- Label Slot: Automatically hidden when sidebar is collapsed -->
            <div class="dzi-sidebar__item-label" *ngIf="!sidebar.collapsed">
                <ng-content></ng-content>
            </div>
        </div>
    `,
    host: {
        'class': 'dzi-sidebar__link',
        '[class.dzi-sidebar__link--active]': 'active',
        '[attr.title]': 'sidebar.collapsed ? null : null' // Optional: handle tooltips here later
    }
})
export class DziSidebarItemComponent {
    @Input({ transform: booleanAttribute }) active = false;

    constructor(@Inject(forwardRef(() => DziSidebarComponent)) public sidebar: DziSidebarComponent) {}
}

// ─── DZI SIDEBAR SECTION ────────────────────────────────────────────────────
@Component({
    selector: 'dzi-sidebar-section',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="dzi-sidebar__section">
            <h3 class="dzi-sidebar__section-title" *ngIf="title && !sidebar.collapsed">{{ title }}</h3>
            <div class="dzi-sidebar__list">
                <ng-content></ng-content>
            </div>
        </div>
    `
})
export class DziSidebarSectionComponent {
    @Input() title?: string;
    constructor(@Inject(forwardRef(() => DziSidebarComponent)) public sidebar: DziSidebarComponent) {}
}
