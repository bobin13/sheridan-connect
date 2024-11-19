import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ObjectId } from "bson";

type CommunityProps = {
  community: {
    name: string;
    description: string;
    admins: string;
    members: string[];
  };
};

export default function CommunityItem(props: CommunityProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{props.community.name}</Text>
      <Text style={styles.bio}>{props.community.description}</Text>
      <View style={styles.footer}>
        <Text style={styles.author}>By: {props.community.admins} </Text>
        <Text style={styles.members}>
          Members : {props.community.members.length}
        </Text>
      </View>
    </View>
  );
}
//test
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  bio: {
    fontSize: 14,
    color: "#666",
    marginBottom: 12,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  author: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  members: {
    fontSize: 14,
    color: "#888",
  },
});
