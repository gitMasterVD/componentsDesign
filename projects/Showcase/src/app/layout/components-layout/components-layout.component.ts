import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ZivaIconComponent } from '@ziva-components';

@Component({
    selector: 'app-components-layout',
    standalone: true,
    imports: [CommonModule, RouterModule, ZivaIconComponent],
    templateUrl: './components-layout.component.html',
    styleUrls: ['./components-layout.component.scss']
})
export class ComponentsLayoutComponent {
    componentNav = [
        { label: 'Icon', path: '/components/icons', icon: 'TextSelect' },
        { label: 'Button', path: '/components/buttons', icon: 'TextSelect' },
        { label: 'Input', path: '/components/inputs', icon: 'TextSelect' },
        { label: 'Form Field', path: '/components/form-field', icon: 'TextSelect' },
        { label: 'Checkbox', path: '/components/checkbox', icon: 'TextSelect' },
        { label: 'Card', path: '/components/card', icon: 'TextSelect' }
    ];


    constructor(private router: Router) { }

    isActive(path: string): boolean {
        return this.router.url === path;
    }
}
