import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        label: 'Workplace',
        isTitle: true
    },
    {
        label: 'Tasks',
        icon: 'file-text',
        link: '/',
        badge: {
            variant: 'success',
            text: '1',
        }
    },
    {
        label: 'Apps',
        isTitle: true
    },
    {
        label: 'Accounting',
        icon: 'book-open',
        link: '/accounting',
    },
    {
        label: 'Point of Sales',
        icon: 'shopping-cart',
        link: '/accounting',
    },
    {
        label: 'Manage Apps',
        icon: 'settings',
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
