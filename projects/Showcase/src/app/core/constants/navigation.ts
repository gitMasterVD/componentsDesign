export interface NavItem {
    label: string;
    link?: string;
    path?: string; // used for internal router links
    icon: string;
}

export const COMPONENT_NAV: NavItem[] = [
    { label: 'Icon', path: '/components/icons', link: '/components/icons', icon: 'Image' },
    { label: 'Button', path: '/components/buttons', link: '/components/buttons', icon: 'Square' },
    { label: 'Input', path: '/components/inputs', link: '/components/inputs', icon: 'Type' },
    { label: 'Form Field', path: '/components/form-field', link: '/components/form-field', icon: 'TextSelect' },
    { label: 'Checkbox', path: '/components/checkbox', link: '/components/checkbox', icon: 'Type' },
    { label: 'Radio', path: '/components/radio', link: '/components/radio', icon: 'CircleDot' },
    { label: 'Card', path: '/components/card', link: '/components/card', icon: 'Layout' }
];

export const GUIDE_NAV: NavItem[] = [
    { label: 'Introduction', icon: 'Info', link: '#' },
    { label: 'Colors', icon: 'Palette', link: '#' },
    { label: 'Icons', icon: 'Zap', link: '#' },
];
