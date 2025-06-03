import { lazy } from 'react';
import { componentLoader } from '@/shared/utils/componentLoader.js';
import { rootRoutesPath } from './root-routess-path.js';

const HomePage = lazy(() => componentLoader(() => import('@pages/HomePage')));
const NotFoundPage = lazy(() => componentLoader(() => import('@pages/NotFoundPage')));
export const rootRoute = {
  homePage: {
    path: rootRoutesPath.root,
    component: <HomePage />,
  },
  notFount: {
    path: rootRoutesPath.notFount,
    component: <NotFoundPage />,
  },
};
