import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Slot, SplashScreen } from "expo-router";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/PoppinsBlack.ttf"),
    "Poppins-Light": require("../assets/fonts/PoppinsLight.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontLoaded) SplashScreen.hideAsync();

    if (!fontLoaded && !error) return null;
  }, [fontLoaded, error]);

  return <Slot></Slot>;
};

export default RootLayout;

const styles = StyleSheet.create({});
