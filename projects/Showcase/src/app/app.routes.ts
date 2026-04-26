import { Routes } from '@angular/router';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { ComponentsLayoutComponent } from './layout/components-layout/components-layout.component';
import { IconShowcaseComponent } from './features/icons/icon-showcase.component';
import { ButtonShowcaseComponent } from './features/buttons/button-showcase.component';
import { InputShowcaseComponent } from './features/inputs/input-showcase.component';
import { FormFieldShowcaseComponent } from './features/form-field/form-field-showcase.component';
import { CheckboxShowcaseComponent } from './features/checkbox/checkbox-showcase.component';
import { CardShowcaseComponent } from './features/card/card-showcase.component';
import { RadioShowcaseComponent } from './features/radio/radio-showcase.component';
import { SidebarShowcaseComponent } from './features/sidebar/sidebar-showcase.component';
import { ComingSoonComponent } from './features/common/coming-soon/coming-soon.component';

export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            { path: '', component: ComingSoonComponent, pathMatch: 'full' },
            { path: 'guide', component: ComingSoonComponent },
            { path: 'resources', component: ComingSoonComponent },
            {
                path: 'components',
                component: ComponentsLayoutComponent,
                children: [
                    { path: '', redirectTo: 'icons', pathMatch: 'full' },
                    { path: 'icons', component: IconShowcaseComponent },
                    { path: 'buttons', component: ButtonShowcaseComponent },
                    { path: 'inputs', component: InputShowcaseComponent },
                    { path: 'form-field', component: FormFieldShowcaseComponent },
                    { path: 'checkbox', component: CheckboxShowcaseComponent },
                    { path: 'radio', component: RadioShowcaseComponent },
                    { path: 'sidebar', component: SidebarShowcaseComponent },
                    { path: 'card', component: CardShowcaseComponent },
                ]
            }
        ]
    }
];
