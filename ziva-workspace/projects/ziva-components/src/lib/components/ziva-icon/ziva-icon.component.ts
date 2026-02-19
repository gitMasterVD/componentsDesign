import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, icons, LucideIconData } from 'lucide-angular';

@Component({
    selector: 'ziva-icon',
    standalone: true,
    imports: [CommonModule, LucideAngularModule],
    templateUrl: './ziva-icon.component.html',
    styleUrls: ['./ziva-icon.component.scss'],
})
export class ZivaIconComponent implements OnChanges {
    /** Lucide icon name, e.g. 'Home', 'Star', 'AlertCircle' */
    @Input() iconName: string = 'Circle';

    /** CSS color value. Defaults to var(--color-primary). */
    @Input() iconColor: string = 'var(--color-primary)';

    /** When true, renders the icon in the disabled color and prevents interaction. */
    @Input() disabled: boolean = false;

    /** ARIA label for accessibility. If provided, role will be set to 'img'. */
    @Input() ariaLabel: string | null = null;

    /** ARIA labelledby for accessibility. If provided, role will be set to 'img'. */
    @Input() ariaLabelledby: string | null = null;

    /** Resolved lucide icon data */
    resolvedIcon: LucideIconData | null = null;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['iconName']) {
            this.resolvedIcon = (icons as Record<string, LucideIconData>)[this.iconName] ?? null;
        }
    }

    get effectiveColor(): string {
        return this.disabled ? 'var(--color-disabled)' : this.iconColor;
    }
}
