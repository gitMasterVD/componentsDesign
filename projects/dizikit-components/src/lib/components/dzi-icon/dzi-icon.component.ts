import { Component, Input, OnChanges, SimpleChanges, booleanAttribute, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
    selector: 'dzi-icon',
    standalone: true,
    imports: [CommonModule, LucideAngularModule],
    templateUrl: './dzi-icon.component.html',
    styleUrls: ['./dzi-icon.component.scss'],
})
export class DziIconComponent {
    @Input() iconName: string = '';
    @Input() iconColor: string = '';
    @Input({ transform: booleanAttribute }) disabled: boolean = false;

    @HostBinding('class.dzi-icon') readonly hostClass = true;
    @HostBinding('class.disabled') get isDisabled() { return this.disabled; }
    @HostBinding('attr.disabled') get isDisabledAttr() { return this.disabled ? '' : null; }
    @Input() ariaLabel: string | null = null;
    @Input() ariaLabelledby: string | null = null;
    @Input() svgSrc: string | null = null;
    @Input() imgSrc: string | null = null;

    get effectiveColor(): string {
        if (this.disabled) return 'var(--color-disabled)';
        return this.iconColor || 'var(--color-primary)';
    }
}
