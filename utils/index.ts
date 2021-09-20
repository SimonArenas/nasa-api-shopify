const FAVORITES = "favorites";

export const getFavorites = () => {
  return JSON.parse(localStorage.getItem(FAVORITES) || "[]");
};

export const addFavorites = (data: {}) => {
  let favorites = getFavorites();
  favorites.push(data);
  localStorage.setItem(FAVORITES, JSON.stringify(favorites));
};

export const removeFavorite = (id: any) => {
  let favorites = getFavorites();
  const index = favorites.findIndex(
    (favorite: any) => favorite.date === id.date
  );

  if (index > -1) {
    favorites.splice(index, 1);
  }

  localStorage.setItem(FAVORITES, JSON.stringify(favorites));
};

export const isFavorited = (id: any) => {
  let favorites = getFavorites();
  return favorites.some((item: any) => item.date === id.date);
};
