import { lazy } from 'react';
import { componentLoader } from '@/shared/utils/componentLoader.js';
import { favoritesRoutesPath } from '@router/routes/favorites/favorites-routes-path.js';

const FavoritesPage = lazy(() => componentLoader(() => import('@pages/FavoritesPage')));

export const favoritesRoute = {
  favoritesPage: {
    path: favoritesRoutesPath.favorites,
    component: <FavoritesPage />,
  },
};
