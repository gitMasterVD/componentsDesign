import { Directive, Input, HostBinding, booleanAttribute } from '@angular/core';

@Directive({
    selector: '[zivaButton]',
    standalone: true,
})
export class ZivaButtonDirective {
    @Input() variant: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info' = 'primary';
    @Input() size?: 'sm' | 'md' | 'lg';
    @Input({ transform: booleanAttribute }) disabled: boolean = false;

    @HostBinding('class.ziva-button') readonly baseClass = true;

    @HostBinding('class')
    get variantClass() {
        return `ziva-button--${this.variant}`;
    }

    @HostBinding('class.ziva-button--sm')
    get isSmall() {
        return this.size === 'sm';
    }

    @HostBinding('class.ziva-button--md')
    get isMedium() {
        return this.size === 'md';
    }

    @HostBinding('class.ziva-button--lg')
    get isLarge() {
        return this.size === 'lg';
    }

    @HostBinding('class.disabled')
    @HostBinding('attr.disabled')
    get isDisabled() {
        return this.disabled ? true : null;
    }
}
