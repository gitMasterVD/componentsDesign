import { Component, Input, HostBinding, HostListener, booleanAttribute, ViewEncapsulation } from '@angular/core';

@Component({
    selector: '[dziInput]',
    standalone: true,
    template: '',
    styleUrls: ['./dzi-input.scss'],
    encapsulation: ViewEncapsulation.None
})
export class DziInputDirective {

    @Input() appearance: 'outlined' | 'filled' | 'standard' = 'outlined';
    @Input() size?: 'sm' | 'md' | 'lg';
    @Input({ transform: booleanAttribute }) disabled: boolean = false;
    @Input({ transform: booleanAttribute }) error: boolean = false;

    private isFocused = false;

    @HostBinding('class.dzi-input') readonly baseClass = true;

    @HostBinding('class')
    get appearanceClass() {
        return `dzi-input--${this.appearance}`;
    }

    @HostBinding('class.dzi-input--sm')
    get isSmall() {
        return this.size === 'sm';
    }

    @HostBinding('class.dzi-input--md')
    get isMedium() {
        return this.size === 'md';
    }

    @HostBinding('class.dzi-input--lg')
    get isLarge() {
        return this.size === 'lg';
    }

    @HostBinding('class.disabled')
    @HostBinding('attr.disabled')
    get isDisabled() {
        return this.disabled ? true : null;
    }

    @HostBinding('class.dzi-input--error')
    get hasError() {
        return this.error;
    }

    @HostBinding('class.dzi-input--focused')
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
