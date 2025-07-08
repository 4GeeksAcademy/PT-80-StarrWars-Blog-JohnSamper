// src/Context/FavoriteContext.jsx
import React, { createContext, useState, useContext } from 'react';
// Create the context
const FavoritesContext = createContext();
// Custom hook to consume the context
export const useFavorites = () => useContext(FavoritesContext);
// Context provider component
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const addFavorite = (item) => {
    setFavorites([...favorites, item]);
  };
  const removeFavorite = (item) => {
    setFavorites(favorites.filter(fav => fav.name !== item.name));
  };
  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
// Export the context itself (if needed)
export default FavoritesContext;