import { categoriesSubMenu } from './categories';

export const menu = [
  { id: 1, name: 'Home', url: '/' },
  { id: 2, name: 'About', url: '/about' },
  { id: 3, name: 'Categories', url: null, subMenu: categoriesSubMenu },
  { id: 4, name: 'Contact', url: '/contact' },
];
