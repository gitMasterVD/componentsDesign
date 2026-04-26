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

/** Unique ID counter for radio instances */
let nextRadioId = 0;

@Component({
    selector: 'dzi-radio',
    standalone: true,
    imports: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    templateUrl: './dzi-radio.html',
    styleUrls: ['./dzi-radio.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DziRadioComponent),
            multi: true,
        },
    ],
})
export class DziRadioComponent implements ControlValueAccessor {
    @ViewChild('inputEl', { static: true }) inputEl!: ElementRef<HTMLInputElement>;

    /** Unique ID for this radio instance */
    readonly inputId = `dzi-radio-${nextRadioId++}`;

    // -------------------------------------------------------------------------
    // INPUTS
    // -------------------------------------------------------------------------

    /** Whether the radio is checked */
    @Input({ transform: booleanAttribute }) checked: boolean = false;

    /** Whether the radio is disabled */
    @Input({ transform: booleanAttribute }) disabled: boolean = false;

    /** Whether the radio is required (for form validation) */
    @Input({ transform: booleanAttribute }) required: boolean = false;

    /** Whether the radio has an error state */
    @Input({ transform: booleanAttribute }) error: boolean = false;

    /** Name attribute for the native input */
    @Input() name?: string;

    /** Value attribute for the native input */
    @Input() value?: any;

    /** Size variant */
    @Input() size?: 'sm' | 'md' | 'lg';

    /** Color variant */
    @Input() color: 'primary' | 'success' | 'error' | 'warning' = 'primary';

    /** Accessibility: aria-label for the radio */
    @Input() ariaLabel?: string;

    /** Accessibility: aria-labelledby for the radio */
    @Input() ariaLabelledBy?: string;

    /** Accessibility: aria-describedby for the radio */
    @Input() ariaDescribedBy?: string;

    // -------------------------------------------------------------------------
    // OUTPUTS
    // -------------------------------------------------------------------------

    /** Emits when checked state changes */
    @Output() checkedChange = new EventEmitter<boolean>();

    // -------------------------------------------------------------------------
    // INTERNAL STATE
    // -------------------------------------------------------------------------

    /** Whether the radio is currently focused */
    isFocused = false;

    /** ControlValueAccessor callbacks */
    private onChange: (value: any) => void = () => {};
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

        if (this.checked) {
            this.checkedChange.emit(this.checked);
            this.onChange(this.value !== undefined ? this.value : this.checked);
        }
        this.onTouched();
    }

    onFocus(): void {
        this.isFocused = true;
    }

    onBlur(): void {
        this.isFocused = false;
        this.onTouched();
    }

    /** Programmatically focus the radio */
    focus(): void {
        this.inputEl.nativeElement.focus();
    }

    // -------------------------------------------------------------------------
    // ControlValueAccessor
    // -------------------------------------------------------------------------

    writeValue(value: any): void {
        if (this.value !== undefined) {
            this.checked = value === this.value;
        } else {
            this.checked = !!value;
        }
    }

    registerOnChange(fn: (value: any) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }
}
