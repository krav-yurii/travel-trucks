import React, { useEffect } from 'react';
import FiltersPanel from '@components/FiltersPanel/index.js';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilters } from '@store/filters/filters-selectors.js';
import { getCampers } from '@store/campers/campers-actions.js';
import {
  selectCampers,
  selectCampersError,
  selectCampersIsLoading,
  selectCampersIsLoadingMore,
  selectCampersPagination,
} from '@store/campers/campers-selectors.js';
import { reformatFiltersForRequest } from '@/shared/utils/reformatFiltersForRequest.js';
import { resetCampers } from '@store/campers/capmers-slice.js';
import CampersList from '@components/CampersList';
import css from './CatalogPage.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const { limit, page, hasMore } = useSelector(selectCampersPagination);
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectCampersIsLoading);
  const isLoadingMore = useSelector(selectCampersIsLoadingMore);
  const error = useSelector(selectCampersError);

  const handleLoadMore = () => {
    const reformatedFilters = reformatFiltersForRequest(filters);
    dispatch(getCampers({ page: page + 1, limit, filters: reformatedFilters }));
  };

  useEffect(() => {
    dispatch(resetCampers());
    const reformatedFilters = reformatFiltersForRequest(filters);
    dispatch(getCampers({ page: 1, limit, filters: reformatedFilters }));
  }, [dispatch, filters, limit]);

  useEffect(() => {
    return () => {
      dispatch(resetCampers());
    };
  }, [dispatch]);

  return (
    <div className={css.catalog}>
      <FiltersPanel />
      <CampersList
        items={campers}
        onLoadMore={handleLoadMore}
        hasMore={hasMore}
        isLoading={isLoading}
        isLoadingMore={isLoadingMore}
        error={error}
      />
    </div>
  );
};

export default CatalogPage;
