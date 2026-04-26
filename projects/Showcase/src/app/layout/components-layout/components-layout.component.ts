import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { DziIconComponent } from '@dizikit';

import { COMPONENT_NAV } from '../../core/constants/navigation';

@Component({
    selector: 'app-components-layout',
    standalone: true,
    imports: [CommonModule, RouterModule, DziIconComponent],
    templateUrl: './components-layout.component.html',
    styleUrls: ['./components-layout.component.scss']
})
export class ComponentsLayoutComponent {
    componentNav = COMPONENT_NAV;


    constructor(private router: Router) { }

    isActive(path: string | undefined): boolean {
        return !!path && this.router.url === path;
    }
}
