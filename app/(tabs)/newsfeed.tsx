import { View } from "react-native";
import { Link } from "expo-router";

const newsfeed = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Link href="/list/1">item 1</Link>
      <Link href="/list/2">item 2</Link>
      <Link href="/list/3">item 3</Link>
      <Link href="/list/4">item 4</Link>
    </View>
  );
};

export default newsfeed;
