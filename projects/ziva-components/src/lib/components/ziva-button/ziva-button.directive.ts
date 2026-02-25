import { Directive, Input, HostBinding, booleanAttribute } from '@angular/core';

@Directive({
    selector: '[zivaButton]',
    standalone: true,
})
export class ZivaButtonDirective {
    @Input() variant: 'primary' | 'secondary' = 'primary';
    @Input({ transform: booleanAttribute }) disabled: boolean = false;

    @HostBinding('class.ziva-button') readonly baseClass = true;

    @HostBinding('class.ziva-button--primary')
    get isPrimary() {
        return this.variant === 'primary';
    }

    @HostBinding('class.ziva-button--secondary')
    get isSecondary() {
        return this.variant === 'secondary';
    }

    @HostBinding('class.disabled')
    @HostBinding('attr.disabled')
    get isDisabled() {
        return this.disabled ? true : null;
    }
}
