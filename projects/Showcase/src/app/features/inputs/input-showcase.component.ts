import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZivaInputDirective } from '@ziva-components';

@Component({
    selector: 'app-input-showcase',
    standalone: true,
    imports: [CommonModule, ZivaInputDirective],
    templateUrl: './input-showcase.component.html',
    styleUrls: ['./input-showcase.component.scss']
})
export class InputShowcaseComponent {
    activeTabs: any = {
        appearance: 'html',
        sizes: 'html',
        states: 'html',
        colors: 'html',
        types: 'html',
        textarea: 'html'
    };

    setTab(section: string, tab: string): void {
        this.activeTabs[section] = tab;
    }

    apiProperties = [
        { name: 'appearance', type: "'outlined' | 'filled' | 'standard'", default: "'outlined'", description: 'Sets the visual style of the input.' },
        { name: 'size', type: "'sm' | 'md' | 'lg'", default: "—", description: 'Sets the size of the input.' },
        { name: 'disabled', type: 'boolean', default: 'false', description: 'Toggles the disabled state.' },
        { name: 'error', type: 'boolean', default: 'false', description: 'Native Material status: applies error styling.' },
    ];

    appearanceCode = {
        html: `<!-- Outlined (default) -->
<input zivaInput placeholder="Outlined input" />

<!-- Filled -->
<input zivaInput appearance="filled" placeholder="Filled input" />

<!-- Standard (underline) -->
<input zivaInput appearance="standard" placeholder="Standard input" />`,
    };

    sizeCode = {
        html: `<input zivaInput size="sm" placeholder="Small" />
<input zivaInput size="md" placeholder="Medium" />
<input zivaInput size="lg" placeholder="Large" />`,
    };

    statesCode = {
        html: `<!-- Error state (Native Material) -->
<input zivaInput error placeholder="Error input" />

<!-- Disabled state -->
<input zivaInput disabled placeholder="Disabled input" />`,
    };

    colorsCode = {
        html: `<!-- Custom Status Colors (User Side Example) -->
<!-- These are handled via custom classes in the application -->
<input zivaInput class="ziva-input-success" placeholder="Success input" />
<input zivaInput class="ziva-input-warning" placeholder="Warning input" />
<input zivaInput class="ziva-input-info" placeholder="Info input" />`,
    };

    typesCode = {
        html: `<!-- Native Types -->
<input zivaInput type="password" placeholder="Enter password" />
<input zivaInput type="number" placeholder="Enter amount" />

<!-- Native Limits -->
<input zivaInput maxlength="10" placeholder="Limit: 10 chars" />`,
    };

    textareaCode = {
        html: `<!-- Outlined textarea -->
<textarea zivaInput placeholder="Write something..."></textarea>

<!-- Filled textarea -->
<textarea zivaInput appearance="filled" placeholder="Filled textarea"></textarea>`,
    };
}
