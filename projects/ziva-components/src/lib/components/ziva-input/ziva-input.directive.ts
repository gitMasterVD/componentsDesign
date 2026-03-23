import { Component, Input, HostBinding, HostListener, booleanAttribute, ViewEncapsulation } from '@angular/core';

@Component({
    selector: '[zivaInput]',
    standalone: true,
    template: '',
    styleUrls: ['./ziva-input.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ZivaInputDirective {

    @Input() appearance: 'outlined' | 'filled' | 'standard' = 'outlined';
    @Input() size?: 'sm' | 'md' | 'lg';
    @Input({ transform: booleanAttribute }) disabled: boolean = false;
    @Input({ transform: booleanAttribute }) error: boolean = false;

    private isFocused = false;

    @HostBinding('class.ziva-input') readonly baseClass = true;

    @HostBinding('class')
    get appearanceClass() {
        return `ziva-input--${this.appearance}`;
    }

    @HostBinding('class.ziva-input--sm')
    get isSmall() {
        return this.size === 'sm';
    }

    @HostBinding('class.ziva-input--md')
    get isMedium() {
        return this.size === 'md';
    }

    @HostBinding('class.ziva-input--lg')
    get isLarge() {
        return this.size === 'lg';
    }

    @HostBinding('class.disabled')
    @HostBinding('attr.disabled')
    get isDisabled() {
        return this.disabled ? true : null;
    }

    @HostBinding('class.ziva-input--error')
    get hasError() {
        return this.error;
    }

    @HostBinding('class.ziva-input--focused')
    get focused() {
        return this.isFocused;
    }

    @HostListener('focus')
    onFocus() {
        if (!this.disabled) {
            this.isFocused = true;
        }
    }

    @HostListener('blur')
    onBlur() {
        this.isFocused = false;
    }
}
