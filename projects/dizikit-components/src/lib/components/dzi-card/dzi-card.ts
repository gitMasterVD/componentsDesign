import {
    Component,
    ChangeDetectionStrategy,
    ViewEncapsulation
} from '@angular/core';

@Component({
    selector: 'dzi-card',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    templateUrl: './dzi-card.html',
    styleUrls: ['./dzi-card.scss']
})
export class DziCardComponent {
}
