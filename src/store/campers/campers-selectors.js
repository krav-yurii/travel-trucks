export const selectCampers = (state) => state.campers.campers;
export const selectCampersPagination = (state) => state.campers.pagination;
export const selectCampersPage = (state) => state.campers.pagination.page;
export const selectCampersLimit = (state) => state.campers.pagination.limit;
export const selectCampersHasMore = (state) => state.campers.pagination.hasMore;

export const selectCampersIsLoading = (state) => state.campers.isLoading;
export const selectCampersIsLoadingMore = (state) => state.campers.isLoadingMore;
export const selectCampersError = (state) => state.campers.error;
