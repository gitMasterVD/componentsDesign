import { Directive, Input, HostBinding, booleanAttribute } from '@angular/core';

@Directive({
    selector: '[zivaIconButton]',
    standalone: true,
})
export class ZivaIconButtonDirective {
    @Input() variant: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info' = 'primary';
    @Input() size?: 'sm' | 'md' | 'lg';
    @Input({ transform: booleanAttribute }) disabled: boolean = false;

    @HostBinding('class.ziva-icon-button') readonly baseClass = true;

    @HostBinding('class')
    get variantClass() {
        return `ziva-icon-button--${this.variant}`;
    }

    @HostBinding('class.ziva-icon-button--sm')
    get isSmall() {
        return this.size === 'sm';
    }

    @HostBinding('class.ziva-icon-button--md')
    get isMedium() {
        return this.size === 'md';
    }

    @HostBinding('class.ziva-icon-button--lg')
    get isLarge() {
        return this.size === 'lg';
    }

    @HostBinding('class.disabled')
    @HostBinding('attr.disabled')
    get isDisabled() {
        return this.disabled ? true : null;
    }
}
