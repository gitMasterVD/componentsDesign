import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DziInputDirective } from '@dizikit';

@Component({
    selector: 'app-input-showcase',
    standalone: true,
    imports: [CommonModule, DziInputDirective],
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
<input dziInput placeholder="Outlined input" />

<!-- Filled -->
<input dziInput appearance="filled" placeholder="Filled input" />

<!-- Standard (underline) -->
<input dziInput appearance="standard" placeholder="Standard input" />`,
        ts: `import { DziInputDirective } from '@dizikit';

@Component({
  imports: [DziInputDirective],
  // ...
})`,
        scss: `/* Appearance is handled by the [appearance] input */`
    };

    sizeCode = {
        html: `<input dziInput size="sm" placeholder="Small" />
<input dziInput size="md" placeholder="Medium" />
<input dziInput size="lg" placeholder="Large" />`,
        ts: `import { DziInputDirective } from '@dizikit';

@Component({
  imports: [DziInputDirective],
  // ...
})`,
        scss: `/* Sizes are handled by the [size] input */`
    };

    statesCode = {
        html: `<!-- Error state (Native Material) -->
<input dziInput error placeholder="Error input" />

<!-- Disabled state -->
<input dziInput disabled placeholder="Disabled input" />`,
        ts: `import { DziInputDirective } from '@dizikit';

@Component({
  imports: [DziInputDirective],
  // ...
})`,
        scss: `/* States are handled by [error] and [disabled] attributes */`
    };

    colorsCode = {
        html: `<!-- Custom Status Colors (User Side Example) -->
<!-- These are handled via custom classes in the application -->
<input dziInput class="dzi-input-success" placeholder="Success input" />
<input dziInput class="dzi-input-warning" placeholder="Warning input" />
<input dziInput class="dzi-input-info" placeholder="Info input" />`,
        ts: `import { DziInputDirective } from '@dizikit';

@Component({
  imports: [DziInputDirective],
  // ...
})`,
        scss: `.dzi-input-success {
  --input-focus-border: var(--color-success);
  --input-focus-shadow: 0 0 0 4px var(--color-success-tertiary);
}
.dzi-input-warning {
  --input-focus-border: var(--color-warning);
  --input-focus-shadow: 0 0 0 4px var(--color-warning-tertiary);
}
.dzi-input-info {
  --input-focus-border: var(--color-info);
  --input-focus-shadow: 0 0 0 4px var(--color-info-tertiary);
}`
    };

    typesCode = {
        html: `<!-- Native Types -->
<input dziInput type="password" placeholder="Enter password" />
<input dziInput type="number" placeholder="Enter amount" />

<!-- Native Limits -->
<input dziInput maxlength="10" placeholder="Limit: 10 chars" />`,
        ts: `import { DziInputDirective } from '@dizikit';

@Component({
  imports: [DziInputDirective],
  // ...
})`,
        scss: `/* Native input types work seamlessly with dziInput */`
    };

    textareaCode = {
        html: `<!-- Outlined textarea -->
<textarea dziInput placeholder="Write something..."></textarea>

<!-- Filled textarea -->
<textarea dziInput appearance="filled" placeholder="Filled textarea"></textarea>`,
        ts: `import { DziInputDirective } from '@dizikit';

@Component({
  imports: [DziInputDirective],
  // ...
})`,
        scss: `/* dziInput directive also supports set of textarea styles */`
    };
}
