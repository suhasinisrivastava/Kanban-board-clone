// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons';
import { orange } from '../assets/icons/orangee';
import { green } from '../assets/icons/green';
import {purple } from '../assets/icons/purple';
import { blue} from '../assets/icons/blue';
import { AddSquare1 } from 'assets/icons/AddSquare1';
// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
  id: 'utilities',
  title: 'MY PROJECTS',
  type: 'group',
  children: [
    {
      id: 'util-typography',
      title: 'Mobile App',
      type: 'item',
      url: '/dashboard/default',
      icon: orange
      ,
      style:{backgroundColor: 'rgba(80, 48, 229, 0.08)'},
      breadcrumbs: false
    },
    {
      id: 'util-color',
      title: 'Website Redesign',
      type: 'item',
      url: '/dashboard/default',
      icon: green,
      breadcrumbs: false
    },
    {
      id: 'util-shadow',
      title: 'Design System',
      type: 'item',
      url: '/dashboard/default',
      icon: purple,
      breadcrumbs: false
    },
    {
      id: 'icons',
      title: 'Wireframes',
      type: 'collapse',
      icon: blue,
      breadcrumbs: false
    }
  ]
};

export default utilities;

// import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons';

// // constant
// const icons = {
//   IconTypography,
//   IconPalette,
//   IconShadow,
//   IconWindmill
// };

// // ==============================|| UTILITIES MENU ITEMS ||============================== //

// const utilities = {
//   id: 'utilities',
//   title: 'MY PROJECTS',
//   type: 'group',
//   children: [
//     {
//       id: 'util-typography',
//       title: 'Mobile App',
//       type: 'item',
//       icon: E8,
//       breadcrumbs: false
//     },
//     {
//       id: 'util-color',
//       title: 'Website Redesign',
//       type: 'item',
//       icon: E9,
//       breadcrumbs: false
//     },
//     {
//       id: 'util-shadow',
//       title: 'Design System',
//       type: 'item',
//       icon: E10,
//       breadcrumbs: false
//     },
//     {
//       id: 'icons',
//       title: 'Wireframes',
//       type: 'item',
//       icon: E11,
//       breadcrumbs: false
//     }
//   ]
// };

// export default utilities;
