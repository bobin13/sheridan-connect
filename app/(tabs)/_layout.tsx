import { Stack, Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import values from "../res/strings/values.json";
import { SafeAreaView } from "react-native-safe-area-context";

export default () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
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
            } else if (route.name === "profilepage") {
              iconName = focused ? "person" : "person-outline";
            }

            // Return the icon component
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: values.tabs["tab-active-color"], // Color for active tab
          tabBarInactiveTintColor: values.tabs["tab-inactive-color"], // Color for inactive tab
          tabBarLabelStyle: {
            fontSize: values.fonts["tab-bar-font-size"],
          },
          tabBarStyle: {
            backgroundColor: values.colors["primary-color"],
            height: 60,
          },
          tabBarItemStyle: {
            padding: 5,
          },
        })}
      >
        <Tabs.Screen name="communities" options={{ title: "Communities" }} />
        <Tabs.Screen name="newsfeed" options={{ title: "News Feed" }} />
        <Tabs.Screen name="map" options={{ title: "Map" }} />
        <Tabs.Screen name="profilepage" options={{ title: "Profile" }} />
      </Tabs>
    </SafeAreaView>
  );
};
