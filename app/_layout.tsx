import React from "react";
import { Stack } from "expo-router";
import "./styles/global.css";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const StackLayout = () => {
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        <Stack.Screen name="LoginPage" options={{ headerShown: false }} />

        <Stack.Screen name="SignupPage" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaProvider>
  );
};

export default StackLayout;
