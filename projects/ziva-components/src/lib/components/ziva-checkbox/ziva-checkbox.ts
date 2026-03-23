import {
    Component,
    Input,
    Output,
    EventEmitter,
    booleanAttribute,
    forwardRef,
    ChangeDetectionStrategy,
    ViewEncapsulation,
    ElementRef,
    ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

/** Unique ID counter for checkbox instances */
let nextCheckboxId = 0;

@Component({
    selector: 'ziva-checkbox',
    standalone: true,
    imports: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    templateUrl: './ziva-checkbox.html',
    styleUrls: ['./ziva-checkbox.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ZivaCheckboxComponent),
            multi: true,
        },
    ],
})
export class ZivaCheckboxComponent implements ControlValueAccessor {
    @ViewChild('inputEl', { static: true }) inputEl!: ElementRef<HTMLInputElement>;

    /** Unique ID for this checkbox instance */
    readonly inputId = `ziva-checkbox-${nextCheckboxId++}`;

    // -------------------------------------------------------------------------
    // INPUTS
    // -------------------------------------------------------------------------

    /** Whether the checkbox is checked */
    @Input({ transform: booleanAttribute }) checked: boolean = false;

    /** Whether the checkbox is disabled */
    @Input({ transform: booleanAttribute }) disabled: boolean = false;

    /** Whether the checkbox is in indeterminate state */
    @Input({ transform: booleanAttribute }) indeterminate: boolean = false;

    /** Whether the checkbox is required (for form validation) */
    @Input({ transform: booleanAttribute }) required: boolean = false;

    /** Whether the checkbox has an error state */
    @Input({ transform: booleanAttribute }) error: boolean = false;

    /** Name attribute for the native input */
    @Input() name?: string;

    /** Value attribute for the native input */
    @Input() value?: string;

    /** Size variant */
    @Input() size?: 'sm' | 'md' | 'lg';

    /** Color variant */
    @Input() color: 'primary' | 'success' | 'error' | 'warning' = 'primary';

    /** Accessibility: aria-label for the checkbox */
    @Input() ariaLabel?: string;

    /** Accessibility: aria-labelledby for the checkbox */
    @Input() ariaLabelledBy?: string;

    /** Accessibility: aria-describedby for the checkbox */
    @Input() ariaDescribedBy?: string;

    // -------------------------------------------------------------------------
    // OUTPUTS
    // -------------------------------------------------------------------------

    /** Emits when checked state changes (supports two-way binding via [(checked)]) */
    @Output() checkedChange = new EventEmitter<boolean>();

    /** Emits when indeterminate state changes */
    @Output() indeterminateChange = new EventEmitter<boolean>();

    // -------------------------------------------------------------------------
    // INTERNAL STATE
    // -------------------------------------------------------------------------

    /** Whether the checkbox is currently focused */
    isFocused = false;

    /** ControlValueAccessor callbacks */
    private onChange: (value: boolean) => void = () => {};
    private onTouched: () => void = () => {};

    // -------------------------------------------------------------------------
    // EVENT HANDLERS
    // -------------------------------------------------------------------------

    onInputChange(event: Event): void {
        if (this.disabled) {
            event.preventDefault();
            return;
        }

        const input = event.target as HTMLInputElement;
        this.checked = input.checked;

        // Reset indeterminate when user explicitly toggles
        if (this.indeterminate) {
            this.indeterminate = false;
            this.indeterminateChange.emit(false);
        }

        this.checkedChange.emit(this.checked);
        this.onChange(this.checked);
        this.onTouched();
    }

    onFocus(): void {
        this.isFocused = true;
    }

    onBlur(): void {
        this.isFocused = false;
        this.onTouched();
    }

    /** Programmatically focus the checkbox */
    focus(): void {
        this.inputEl.nativeElement.focus();
    }

    /** Programmatically toggle the checkbox */
    toggle(): void {
        if (!this.disabled) {
            this.checked = !this.checked;
            this.checkedChange.emit(this.checked);
            this.onChange(this.checked);
        }
    }

    // -------------------------------------------------------------------------
    // ControlValueAccessor
    // -------------------------------------------------------------------------

    writeValue(value: boolean): void {
        this.checked = !!value;
    }

    registerOnChange(fn: (value: boolean) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }
}
