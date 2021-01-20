import { HomeScreen } from '../components/pages/home';
import { ItemDetail } from '../components/pages/item-detail';
import { Items } from '../components/pages/items';
import { NotFound } from '../components/pages/not-found';

export const routes: Array<RoutesCustom> = [
  {
    exact: true,
    path: '/',
    component: HomeScreen,
  },
  {
    exact: true,
    path: '/items',
    component: Items,
  },
  {
    exact: true,
    path: '/items/:id',
    component: ItemDetail,
  },
  {
    exact: false,
    path: '*',
    component: NotFound,
  },
];
