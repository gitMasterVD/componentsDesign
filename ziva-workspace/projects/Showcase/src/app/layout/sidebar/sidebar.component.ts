import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZivaIconComponent } from '@ziva-components';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [CommonModule, ZivaIconComponent],
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    navItems = [
        { label: 'Introduction', icon: 'Info', link: '#' },
        { label: 'Colors', icon: 'Palette', link: '#' },
        { label: 'Icons', icon: 'Zap', link: '#', active: true },
    ];

    components = [
        { label: 'Icon', link: '#' },
        { label: 'Button', link: '#' }, // Placeholders
        { label: 'Input', link: '#' },
    ];
}
