import {
    Component,
    ChangeDetectionStrategy,
    ViewEncapsulation
} from '@angular/core';

@Component({
    selector: 'ziva-card',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    templateUrl: './ziva-card.html',
    styleUrls: ['./ziva-card.scss']
})
export class ZivaCardComponent {
}
