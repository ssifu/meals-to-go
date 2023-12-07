import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import {
  Oswald_400Regular,
  useFonts as useOswald,
} from "@expo-google-fonts/oswald";
import { Lato_400Regular, useFonts as useLato } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { RestaurantContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesConextProvider } from "./src/services/favourites/favourites.context";
import { Navigation } from "./src/infrastructure/navigation";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <FavouritesConextProvider>
          <LocationContextProvider>
            <RestaurantContextProvider>
              <Navigation />
            </RestaurantContextProvider>
          </LocationContextProvider>
        </FavouritesConextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
