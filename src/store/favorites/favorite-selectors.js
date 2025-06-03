export const selectFavoritesCampers = (state) => state.favorites;
export const isFavoritePresent = (state, id) => {
  return state.favorites.some((favorite) => favorite.id === id);
};
