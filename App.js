import { useEffect, useState } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import {
  Oswald_400Regular,
  useFonts as useOswald,
} from "@expo-google-fonts/oswald";
import { Lato_400Regular, useFonts as useLato } from "@expo-google-fonts/lato";
// import * as firebaseApp from "firebase/app";
// import * as firebaseAuth from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

import { theme } from "./src/infrastructure/theme";

import { Navigation } from "./src/infrastructure/navigation";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyBpoXNNTdG0Bg0B5hP_8yRZyETdp8gh1vk",
  authDomain: "mealstogo-a39c4.firebaseapp.com",
  projectId: "mealstogo-a39c4",
  storageBucket: "mealstogo-a39c4.appspot.com",
  messagingSenderId: "628252479180",
  appId: "1:628252479180:web:e77cb92f0a7bdfc5c7fc69",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

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
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
