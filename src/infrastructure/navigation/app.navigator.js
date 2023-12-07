import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import MapScreen from "../../features/map/screens/map.screen";
import SettingsScreen from "../../features/resturants/screens/settings.screen";

import { RestaurantsNavigator } from "./restaurants.navigator";

const TAB_ICON = {
  Restaurants: "restaurant",
  Favourites: "heart",
  Map: "map",
  Settings: "settings",
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
    <NavigationContainer>
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
