import { NavigationItem } from './navigation.model';


export const navigation: NavigationItem[] = [
  {
    id: 'applications',
    title: 'Applications',
    translate: 'NAV.APPLICATIONS',
    type: 'group',
    icon: 'apps',
    children: [
      {
        id: 'dashboards',
        title: 'Dashboards',
        translate: 'NAV.DASHBOARDS',
        type: 'collapsable',
        icon: 'dashboard'
      },
      {
        id: 'calendar',
        title: 'Calendar',
        translate: 'NAV.CALENDAR',
        type: 'item',
        icon: 'today',
        url: '/apps/calendar'
      },
      {
        id: 'e-commerce',
        title: 'E-Commerce',
        translate: 'NAV.ECOMMERCE',
        type: 'collapsable',
        icon: 'shopping_cart',
        children: [
          {
            id: 'products',
            title: 'Products',
            type: 'item',
            url: '/apps/e-commerce/products',
            exactMatch: true
          },
          {
            id: 'productDetail',
            title: 'Product Detail',
            type: 'item',
            url: '/apps/e-commerce/products/1/printed-dress',
            exactMatch: true
          },
          {
            id: 'orders',
            title: 'Orders',
            type: 'item',
            url: '/apps/e-commerce/orders',
            exactMatch: true
          },
          {
            id: 'orderDetail',
            title: 'Order Detail',
            type: 'item',
            url: '/apps/e-commerce/orders/1',
            exactMatch: true
          }
        ]
      }
    ]
  }
];
