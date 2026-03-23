import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ZivaIconComponent } from '@ziva-components';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [CommonModule, RouterModule, ZivaIconComponent],
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    guideItems = [
        { label: 'Introduction', icon: 'Info', link: '#' },
        { label: 'Colors', icon: 'Palette', link: '#' },
        { label: 'Icons', icon: 'Zap', link: '#' },
    ];

    componentItems = [
        { label: 'Icon', link: '/components/icons', icon: 'Image' },
        { label: 'Button', link: '/components/buttons', icon: 'Square' },
        { label: 'Input', link: '/components/inputs', icon: 'Type' },
        { label: 'Form Field', link: '/components/form-field', icon: 'TextSelect' },
        { label: 'Checkbox', link: '/components/checkbox', icon: 'Type' }
    ];
}
