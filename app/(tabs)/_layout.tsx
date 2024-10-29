import { Stack, Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import values from "../res/strings/values.json";

export default () => {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false, // Keep header hidden
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = "home";

          // Assign icons for different tabs
          if (route.name === "newsfeed") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "communities") {
            iconName = focused ? "people" : "people-outline";
          } else if (route.name === "map") {
            iconName = focused ? "map" : "map-outline";
          } else if (route.name === "ProfilePage") {
            iconName = focused ? "person" : "person-outline";
          }

          // Return the icon component
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "blue", // Color for active tab
        tabBarInactiveTintColor: "gray", // Color for inactive tab
        tabBarLabelStyle: {
          fontSize: values.fonts["tab-bar-font-size"],
        },
      })}
    >
      <Tabs.Screen name="communities" options={{ title: "Communities" }} />
      <Tabs.Screen name="newsfeed" options={{ title: "News Feed" }} />
      <Tabs.Screen name="map" options={{ title: "Map" }} />
      <Tabs.Screen name="ProfilePage" options={{ title: "Profile" }} />
    </Tabs>
  );
};
