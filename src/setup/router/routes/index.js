import { rootRoute } from '@router/routes/root/root.jsx';
import { catalogRoute } from '@router/routes/catalog/catalog.jsx';
import { favoritesRoute } from '@router/routes/favorites/faforites.jsx';

const router = {
  root: rootRoute,
  catalog: catalogRoute,
  favorites: favoritesRoute,
};

export default router;
