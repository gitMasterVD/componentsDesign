import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
    selector: 'ziva-icon',
    standalone: true,
    imports: [CommonModule, LucideAngularModule],
    templateUrl: './ziva-icon.component.html',
    styleUrls: ['./ziva-icon.component.scss'],
})
export class ZivaIconComponent {
    @Input() iconName: string = '';
    @Input() iconColor: string = '';
    @Input() disabled: boolean = false;
    @Input() ariaLabel: string | null = null;
    @Input() ariaLabelledby: string | null = null;
    @Input() svgSrc: string | null = null;
    @Input() imgSrc: string | null = null;

    get effectiveColor(): string {
        return this.disabled ? 'var(--color-disabled)' : this.iconColor;
    }
}
