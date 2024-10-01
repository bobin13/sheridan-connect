import { View, Text } from "react-native";
import { Tabs, Redirect } from "expo-router";
import React from "react";

const TabsLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen name="news-feed" />
      </Tabs>
    </>
  );
};

export default TabsLayout;
