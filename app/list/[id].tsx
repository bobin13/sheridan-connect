import { View, Text } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";

const newsfeedItem = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>newsfeedItem {id}</Text>
    </View>
  );
};

export default newsfeedItem;
