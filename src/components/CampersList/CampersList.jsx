import React from 'react';
import CamperCard from '@components/CamperCard';
import css from './CampersList.module.css';

const CampersList = ({ items, error, isLoadingMore, isLoading, onLoadMore, hasMore }) => {
  return (
    <div style={{ width: '100%' }}>
      {!isLoading && !error && items.length === 0 && <p className={css.noCampers}>No campers found</p>}
      {isLoading && <p className={css.loading}>Loading...</p>}
      {items?.length > 0 && (
        <div className={css.list}>
          {items.map((camper) => (
            <CamperCard key={camper.id} camper={camper} />
          ))}
        </div>
      )}

      {hasMore && !isLoading && (
        <button disabled={isLoadingMore} onClick={onLoadMore} className={css.loadMore}>
          {isLoadingMore ? 'Loading...' : 'Load More'}
        </button>
      )}
    </div>
  );
};

export default CampersList;
