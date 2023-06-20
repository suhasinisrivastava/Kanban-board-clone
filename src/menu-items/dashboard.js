// assets
import { IconDashboard } from '@tabler/icons';
import { Home } from "../assets/icons/Home";
import { Message } from "../assets/icons/Message";
import { Task } from "../assets/icons/Task";
import { Profile } from "../assets/icons/Profile";
import { Setting } from "../assets/icons/Setting";

// constant
const dashboard = {
  id: 'dashboard',
  title: '',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Home',
      type: 'item',
      url: '/dashboard/default',
      icon: Home,
      breadcrumbs: false,
      
    },
    {
      id: 'default4',
      title: 'Messages',
      type: 'item',
      url: '/dashboard/default',
      icon: Message,
      breadcrumbs: false,
      style: {
        color: '#787486',
        width: '78px',
        height: '19px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: '19px'
      }
    },
    {
      id: 'default1',
      title: 'Tasks',
      type: 'item',
      url: '/dashboard/default',
      icon: Task,
      breadcrumbs: false,
      style: {
        color: '#787486',
        width: '78px',
        height: '19px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: '19px'
      }
    },
    {
      id: 'default2',
      title: 'Members',
      type: 'item',
      url: '/dashboard/default',
      icon: Profile,
      breadcrumbs: false,
      style: {
        color: '#787486',
        width: '78px',
        height: '19px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: '19px'
      }
    },
    {
      id: 'default3',
      title: 'Settings',
      type: 'item',
      url: '/dashboard/default',
      icon: Setting,
      breadcrumbs: false,
      style: {
        color: '#787486',
        width: '78px',
        height: '19px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: '19px'
      }
    }
  ]
};

export default dashboard;


