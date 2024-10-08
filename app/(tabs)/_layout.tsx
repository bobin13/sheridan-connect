import { Stack, Tabs } from "expo-router";

export default () => {
  return (
    <Tabs screenOptions={{headerShown: false}}>
      <Tabs.Screen name="newsfeed" />
      <Tabs.Screen name="communities" />
      <Tabs.Screen name="map" />
      <Tabs.Screen name="ProfilePage" />
    </Tabs>
  );
};
