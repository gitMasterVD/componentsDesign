import { Directive, Input, HostBinding, booleanAttribute } from '@angular/core';

@Directive({
    selector: '[zivaIconButton]',
    standalone: true,
})
export class ZivaIconButtonDirective {
    @Input() variant: 'primary' | 'secondary' = 'primary';
    @Input({ transform: booleanAttribute }) disabled: boolean = false;

    @HostBinding('class.ziva-icon-button') readonly baseClass = true;

    @HostBinding('class.ziva-icon-button--primary')
    get isPrimary() {
        return this.variant === 'primary';
    }

    @HostBinding('class.ziva-icon-button--secondary')
    get isSecondary() {
        return this.variant === 'secondary';
    }

    @HostBinding('class.disabled')
    @HostBinding('attr.disabled')
    get isDisabled() {
        return this.disabled ? true : null;
    }
}
