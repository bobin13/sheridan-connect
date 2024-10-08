import React from 'react';
import { Stack } from 'expo-router';




const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="newsfeed" options={{ headerShown: false }} />
      <Stack.Screen name="communities" options={{ headerShown: false }} />
      <Stack.Screen name="LoginPage" options={{ headerShown: false }} />
      <Stack.Screen name="ProfilePage" options={{ headerShown: false }} />
      <Stack.Screen name="SignupPage" options={{ headerShown: false }} />

    </Stack>
  );
};

export default StackLayout;
