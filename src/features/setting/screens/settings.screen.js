import { View, Text } from "react-native";
import React, { useContext } from "react";
import { Button } from "react-native-paper";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { SafeArea } from "../../../components/utils/safe-area.component";

export default function SettingsScreen() {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <Text>settings.screen</Text>
      <Button mode="contained" onPress={onLogout}>
        Logout
      </Button>
    </SafeArea>
  );
}
