import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FavouritesConext = createContext();

export const FavouritesConextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const saveFavourites = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@favourites", jsonValue);
    } catch (error) {
      console.log("error storing", error);
    }
  };

  const loadFavourites = async () => {
    try {
      const value = await AsyncStorage.getItem("@favourites");
      if (value !== null) {
        setFavourites(JSON.parse(value));
      }
    } catch (error) {
      console.log("error loading", error);
    }
  };

  const add = (restaurant) => {
    setFavourites((prev) => {
      return [...prev, restaurant];
    });
  };

  const remove = (restaurant) => {
    const newFavourites = favourites.filter(
      (x) => x.placeId !== restaurant.placeId
    );
    setFavourites(() => newFavourites);
  };

  useEffect(() => {
    loadFavourites();
  }, []);

  useEffect(() => {
    saveFavourites(favourites);
  }, [favourites]);

  return (
    <FavouritesConext.Provider
      value={{
        favourites,
        addToFavourites: add,
        removeFromFavourties: remove,
      }}
    >
      {children}
    </FavouritesConext.Provider>
  );
};
