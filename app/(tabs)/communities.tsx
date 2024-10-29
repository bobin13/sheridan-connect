import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import values from "../res/strings/values.json";

const communities = () => {
  const [community, setCommunity] = useState("");

  const onSearchButtonPress = () => {
    if (community != "") {
      //function only triggers while input field isn't empty.
    }
  };

  return (
    <View>
      <Text style={styles.title}>Communities</Text>
      <TextInput
        onChangeText={(val) => setCommunity(val)}
        placeholder="Search Your Community.."
        style={styles.input}
        onSubmitEditing={onSearchButtonPress}
      />

      <TouchableOpacity style={styles.button} onPress={onSearchButtonPress}>
        <Text style={{ color: "#fff", alignSelf: "center" }}>Search!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    marginVertical: 50,
  },
  input: {
    borderColor: values.colors["primary-color"],
    borderWidth: 3,
    padding: 8,
    margin: 10,
    width: 300,
    alignSelf: "center",
    borderRadius: 10,
    textAlign: "center",
  },
  button: {
    backgroundColor: values.colors["primary-color"],
    alignSelf: "center",
    padding: 6,
    borderRadius: 10,
    width: 200,
    shadowColor: "#000",
  },
});
export default communities;
