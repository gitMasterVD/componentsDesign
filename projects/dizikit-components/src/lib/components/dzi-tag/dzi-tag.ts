import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DziIconComponent } from '../dzi-icon/dzi-icon.component';

@Component({
    selector: 'dzi-tag',
    standalone: true,
    imports: [CommonModule, DziIconComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    templateUrl: './dzi-tag.html',
    styleUrls: ['./dzi-tag.scss']
})
export class DziTagComponent {
    @Input() variant: 'primary' | 'success' | 'warning' | 'error' | 'neutral' = 'neutral';
    @Input() appearance: 'solid' | 'soft' | 'outline' = 'soft';
    @Input() size: 'sm' | 'md' | 'lg' = 'md';
    @Input() closable: boolean = false;
    
    @Output() closed = new EventEmitter<void>();

    @HostBinding('class')
    get hostClasses() {
        return [
            'dzi-tag',
            `dzi-tag--${this.variant}`,
            `dzi-tag--${this.appearance}`,
            `dzi-tag--${this.size}`
        ].filter(Boolean).join(' ');
    }

    onClose(event: Event) {
        event.stopPropagation();
        this.closed.emit();
    }
}
