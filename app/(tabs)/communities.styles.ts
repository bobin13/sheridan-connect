import values from "../res/strings/values.json";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
