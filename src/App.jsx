import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from '@components/Layout';
import router from '@router/routes/index.js';

function App() {
  return (
    <Layout>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path={router.root.homePage.path} element={router.root.homePage.component} />
          <Route path={router.catalog.catalogPage.path} element={router.catalog.catalogPage.component} />
          <Route
            path={`${router.catalog.catalogItemDetails.path}/:id`}
            element={router.catalog.catalogItemDetails.component}
          />

          <Route
            path={router.favorites.favoritesPage.path}
            element={router.favorites.favoritesPage.component}
          />

          <Route path={router.root.notFount.path} element={router.root.notFount.component} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
