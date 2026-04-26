import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'dzi-form-field',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './dzi-form-field.component.html',
    styleUrls: ['./dzi-form-field.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class DziFormFieldComponent { }
