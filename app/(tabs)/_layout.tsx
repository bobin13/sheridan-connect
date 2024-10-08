import { Stack, Tabs } from "expo-router";

export default () => {
  return (
    <Tabs>
      <Tabs.Screen name="newsfeed" />
      <Tabs.Screen name="communities" />
      <Tabs.Screen name="map" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
};
