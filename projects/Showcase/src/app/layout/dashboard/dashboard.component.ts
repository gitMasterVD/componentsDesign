import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
    navItems = [
        { label: 'Components', path: '/components' },
        { label: 'Guide', path: '/guide' },
        { label: 'Resources', path: '/resources' }
    ];

    constructor(private router: Router) { }

    isActive(path: string): boolean {
        return this.router.url.startsWith(path);
    }
}
