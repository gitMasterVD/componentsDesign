import {
    Component,
    ChangeDetectionStrategy,
    ViewEncapsulation,
    Input,
    HostBinding
} from '@angular/core';

@Component({
    selector: 'dzi-badge',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    templateUrl: './dzi-badge.html',
    styleUrls: ['./dzi-badge.scss']
})
export class DziBadgeComponent {
    @Input() variant: 'primary' | 'success' | 'warning' | 'error' = 'primary';
    @Input() size: 'sm' | 'md' | 'lg' = 'md';

    @HostBinding('class')
    get hostClasses() {
        return [
            'dzi-badge',
            `dzi-badge--${this.variant}`,
            `dzi-badge--${this.size}`
        ].filter(Boolean).join(' ');
    }
}
