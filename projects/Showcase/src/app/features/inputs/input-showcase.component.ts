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
        textarea: 'html',
    };

    setTab(section: string, tab: string): void {
        this.activeTabs[section] = tab;
    }

    apiProperties = [
        { name: 'appearance', type: "'outlined' | 'filled' | 'standard'", default: "'outlined'", description: 'Sets the visual style of the input.' },
        { name: 'size', type: "'sm' | 'md' | 'lg'", default: "—", description: 'Sets the size of the input.' },
        { name: 'disabled', type: 'boolean', default: 'false', description: 'Toggles the disabled state.' },
        { name: 'error', type: 'boolean', default: 'false', description: 'Applies error styling to the input.' },
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
        html: `<!-- Error state -->
<input zivaInput [error]="true" placeholder="Error input" />

<!-- Disabled state -->
<input zivaInput disabled placeholder="Disabled input" />

<!-- Filled + Error -->
<input zivaInput appearance="filled" [error]="true" placeholder="Filled error" />

<!-- Standard + Disabled -->
<input zivaInput appearance="standard" disabled placeholder="Standard disabled" />`,
    };

    textareaCode = {
        html: `<!-- Outlined textarea -->
<textarea zivaInput placeholder="Write something..."></textarea>

<!-- Filled textarea -->
<textarea zivaInput appearance="filled" placeholder="Filled textarea"></textarea>`,
    };
}
