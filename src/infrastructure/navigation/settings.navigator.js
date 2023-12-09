import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import SettingsScreen from "../../features/setting/screens/settings.screen";
import { FavouritesScreen } from "../../features/setting/screens/favourites.screen";
import { CameraScreen } from "../../features/setting/screens/camera.screen";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerMode: "screen",
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingsStack.Screen
        options={{ header: () => null }}
        name="Settings"
        component={SettingsScreen}
      />
      <SettingsStack.Screen
        options={{ headerMode: "screen" }}
        name="Favourites"
        component={FavouritesScreen}
      />
      <SettingsStack.Screen
        options={{ headerMode: "screen" }}
        name="Camera"
        component={CameraScreen}
      />
    </SettingsStack.Navigator>
  );
};
