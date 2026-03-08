import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'ziva-form-field',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './ziva-form-field.component.html',
    styleUrls: ['./ziva-form-field.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ZivaFormFieldComponent { }
