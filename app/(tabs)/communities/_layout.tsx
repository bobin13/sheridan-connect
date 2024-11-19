import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";

import CommunityItem from "./CommunityItem";

const communities = () => {
  const [searchBox, SetSearchBox] = useState("aa");
  const [communites, setCommunities] = useState([]);

  const getCommunities = async () => {
    try {
      fetch("http://10.0.2.2:5081/api/v1/Communities")
        .then(async (response) => {
          //throws an error if response not successful
          if (!response.ok) throw new Error(response.status + "");
          const json = await response.json();
          console.log(json);
          //setCommunities(json);
          return json;
        })
        .then((json) => setCommunities(json));
    } catch (error) {
      console.error("error: " + error);
    } finally {
      console.log(communites);
    }
  };

  const onSearchButtonPress = () => {
    if (searchBox != "") {
      //function only triggers while input field isn't empty.
      getCommunities();
    }
  };

  const navigateToLogin = () => {
    router.push("/LoginPage");
  };

  return (
    <View className="flex-1 items-center">
      <Text className="font-bold text-xl">Communities</Text>
      <TextInput
        onChangeText={(val) => SetSearchBox(val)}
        placeholder="Search Your Community.."
        onSubmitEditing={onSearchButtonPress}
      />

      <TouchableOpacity onPress={navigateToLogin} style={styles.iconButton}>
        <Ionicons name="log-in" size={25} color="black" />
      </TouchableOpacity>

      <TouchableOpacity onPress={navigateToLogin} style={styles.iconButton}>
        <Ionicons name="log-in" size={25} color="black" />
      </TouchableOpacity>

      <TouchableOpacity onPress={onSearchButtonPress}>
        <Text>Search!</Text>
      </TouchableOpacity>

      <FlatList
        data={communites}
        keyExtractor={(item: any) => item._id}
        renderItem={({ item }) => <CommunityItem community={item} />}
      />
    </View>
  );
};

export default communities;
