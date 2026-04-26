import { Component, Input, HostBinding, HostListener, booleanAttribute, ElementRef, inject, ViewEncapsulation } from '@angular/core';

@Component({
    selector: '[dziIconButton]',
    standalone: true,
    template: '<ng-content></ng-content>',
    styleUrls: ['./dzi-button.scss'],
    encapsulation: ViewEncapsulation.None
})
export class DziIconButtonDirective {
    private el = inject(ElementRef);

    @Input() variant: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info' | 'tertiary' = 'primary';
    @Input() size?: 'sm' | 'md' | 'lg';
    @Input({ transform: booleanAttribute }) disabled: boolean = false;
    @Input({ transform: booleanAttribute }) pulse: boolean = true;

    private isPulsing = false;

    @HostBinding('class.dzi-icon-button') readonly baseClass = true;

    @HostBinding('class')
    get variantClass() {
        return `dzi-icon-button--${this.variant}`;
    }

    @HostBinding('class.dzi-icon-button--sm')
    get isSmall() {
        return this.size === 'sm';
    }

    @HostBinding('class.dzi-icon-button--md')
    get isMedium() {
        return this.size === 'md';
    }

    @HostBinding('class.dzi-icon-button--lg')
    get isLarge() {
        return this.size === 'lg';
    }

    @HostBinding('class.disabled')
    @HostBinding('attr.disabled')
    get isDisabled() {
        return this.disabled ? true : null;
    }

    @HostBinding('class.dzi-pulse-active')
    get pulsing() {
        return this.isPulsing;
    }

    @HostBinding('style.--ripple-x') rippleX = '0px';
    @HostBinding('style.--ripple-y') rippleY = '0px';
    @HostBinding('style.--ripple-size') rippleSize = '0px';

    @HostListener('click', ['$event'])
    onClick(event: MouseEvent) {
        if (this.disabled || !this.pulse || this.isPulsing) return;

        const rect = this.el.nativeElement.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        // Calculate the maximum possible distance from (x, y) to any corner
        const cornerDistances = [
            Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)),
            Math.sqrt(Math.pow(rect.width - x, 2) + Math.pow(y, 2)),
            Math.sqrt(Math.pow(x, 2) + Math.pow(rect.height - y, 2)),
            Math.sqrt(Math.pow(rect.width - x, 2) + Math.pow(rect.height - y, 2))
        ];
        const maxDist = Math.max(...cornerDistances);

        this.rippleX = `${x}px`;
        this.rippleY = `${y}px`;
        this.rippleSize = `${maxDist * 2}px`;

        this.isPulsing = true;
        setTimeout(() => {
            this.isPulsing = false;
        }, 800);
    }
}
