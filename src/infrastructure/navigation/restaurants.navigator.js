import React from "react";
import { Text } from "react-native";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import RestaurantsScreen from "../../features/resturants/screens/restaurants.screen";
import { RestaurantsDetailScreen } from "../../features/resturants/screens/restaurants-details.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
        headerShown: false,
      }}
    >
      <RestaurantStack.Screen
        name="RestaurantsScreen"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantsDetail"
        component={RestaurantsDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
