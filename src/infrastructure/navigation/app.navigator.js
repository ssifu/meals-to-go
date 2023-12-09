import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { RestaurantContextProvider } from "../../services/restaurants/restaurants.context";
import { FavouritesConextProvider } from "../../services/favourites/favourites.context";
import { LocationContextProvider } from "../../services/location/location.context";
import MapScreen from "../../features/map/screens/map.screen";

import { RestaurantsNavigator } from "./restaurants.navigator";
import { SettingsNavigator } from "./settings.navigator";

const TAB_ICON = {
  Restaurants: "restaurant",
  Favourites: "heart",
  Map: "map",
  SettingsScreen: "settings",
};

const Tab = createBottomTabNavigator();

const createScreenOptions = ({ route }) => {
  const activeIconName = TAB_ICON[route.name];

  return {
    tabBarIcon: ({ color, size }) => {
      return <Ionicons name={activeIconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
    headerShown: false,
  };
};

export const AppNavigator = () => {
  return (
    <FavouritesConextProvider>
      <LocationContextProvider>
        <RestaurantContextProvider>
          <Tab.Navigator screenOptions={createScreenOptions}>
            <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="SettingsScreen" component={SettingsNavigator} />
          </Tab.Navigator>
        </RestaurantContextProvider>
      </LocationContextProvider>
    </FavouritesConextProvider>
  );
};
