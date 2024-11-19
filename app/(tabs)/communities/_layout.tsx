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
import { StatusBar } from "expo-status-bar";
const communities = () => {
  const [searchBox, SetSearchBox] = useState("");
  const [communites, setCommunities] = useState([]);

  const getCommunities = async () => {
    try {
      fetch(`http://10.0.2.2:5081/api/v1/Communities/${searchBox}`)
        .then(async (response) => {
          //throws an error if response not successful
          if (!response.ok) throw new Error(response.status + "");
          const json = await response.json();
          //setCommunities(json);
          return json;
        })
        .then((json) => setCommunities(json));
    } catch (error) {
      console.error("error: " + error);
    } finally {
    }
  };

  const onSearchButtonPress = () => {
    if (searchBox != "" && searchBox != " ") {
      //function only triggers while input field isn't empty.
      getCommunities();
    }
  };

  return (
    <View className="flex-1 items-center bg-gray-800">
      <StatusBar style="light" backgroundColor="#1f2937" />
      <Text className="font-bold text-2xl text-white">Communities</Text>
      <TextInput
        className="border border-gray-300 rounded text-center p-2 mt-2 text-white w-80 font-bold"
        placeholderTextColor="gray"
        onChangeText={(val) => SetSearchBox(val)}
        placeholder="Search Your Community.."
        onSubmitEditing={onSearchButtonPress}
      />

      <TouchableOpacity
        className="border border-gray-300 p-1 pl-2 pr-2 rounded-lg mt-2 bg-blue-800"
        onPress={onSearchButtonPress}
      >
        <Text className="text-white">Search!</Text>
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
