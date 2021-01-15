import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        label: 'Navigation',
        isTitle: true
    },
    {
        label: 'Dashboard',
        icon: 'home',
        link: '/',
        badge: {
            variant: 'success',
            text: '1',
        }
    },
    {
        label: 'Menus',
        isTitle: true
    },
    {
        label: 'Menus1',
        icon: 'file-text',
        link: '/menus1',
    },
    {
        label: 'Menus2',
        icon: 'file-text',
        subItems: [
            {
                label: 'Sub Menu 1',
                link: '/submenu1',
            },
            {
                label: 'Sub Menu 2',
                link: '/submenu2'
            },
            {
                label: 'Sub Menu 3',
                link: '/submenu3'
            },
        ]
    },
];
