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
    iconButton: {
      position: "absolute",
      top: 47,
      right: 20,
      backgroundColor: "#fff",
      borderRadius: 40,
      padding: 10,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 5,
    }
  });
