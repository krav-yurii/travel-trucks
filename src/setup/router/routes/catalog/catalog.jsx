import { lazy } from 'react';
import { componentLoader } from '@/shared/utils/componentLoader.js';
import { catalogRoutesPath } from '@router/routes/catalog/catalog-routes-path.js';

const CatalogPage = lazy(() => componentLoader(() => import('@pages/CatalogPage')));
const CamperDetailsPage = lazy(() => componentLoader(() => import('@pages/CamperDetailsPage')));
export const catalogRoute = {
  catalogPage: {
    path: catalogRoutesPath.catalog,
    component: <CatalogPage />,
  },
  catalogItemDetails: {
    path: catalogRoutesPath.catalogItemDetails,
    component: <CamperDetailsPage />,
  },
};
