import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DziIconComponent } from '@dizikit';

import { GUIDE_NAV, COMPONENT_NAV } from '../../core/constants/navigation';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [CommonModule, RouterModule, DziIconComponent],
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    guideItems = GUIDE_NAV;
    componentItems = COMPONENT_NAV;
}
