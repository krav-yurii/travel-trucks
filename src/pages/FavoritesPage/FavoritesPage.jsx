import React from 'react';
import CampersList from '@components/CampersList';
import { useSelector } from 'react-redux';
import { selectFavoritesCampers } from '@store/favorites/favorite-selectors.js';
import css from './FavoritesPage.module.css';

const FavoritesPage = () => {
  const campers = useSelector(selectFavoritesCampers);

  return (
    <div className={css.favoritesPage}>
      <CampersList
        items={campers}
        onLoadMore={() => true}
        hasMore={false}
        isLoading={false}
        isLoadingMore={false}
        error={false}
      />
    </div>
  );
};

export default FavoritesPage;
