import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";

const userData = {
  profileImage:
    "https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2264922221.jpg", // Placeholder image URL
  name: "Arshdeep Singh",
  email: "sing7434@sheridancollege.ca",
  phone: "+1 (647) 327-2267",
  bio: "Mobile Developer with a passion for creating engaging user experiences.",
  address: "88 Mount Fuji Cres.",
};

const profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>

      <View style={styles.profileCard}>
        <View style={styles.profileImageContainer}>
          <Image
            source={{ uri: userData.profileImage }}
            style={styles.profileImage}
          />
        </View>
        <Text style={styles.nameText}>{userData.name}</Text>
      </View>

      {/* User Info Card */}
      <View style={styles.infoCard}>
        <Text style={styles.infoText}>Email: {userData.email}</Text>
        <Text style={styles.infoText}>Phone: {userData.phone}</Text>
        <Text style={styles.infoText}>Address: {userData.address}</Text>
      </View>

      {/* Bio Card */}
      <View style={styles.bioCard}>
        <Text style={styles.bioText}>{userData.bio}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  profileCard: {
    backgroundColor: "#C4D7FF",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  profileImageContainer: {
    borderRadius: 75,
    overflow: "hidden",
    marginBottom: 10,
  },
  profileImage: {
    width: 150,
    height: 150,
  },
  nameText: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  infoCard: {
    backgroundColor: "#4CAF50",
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
  },
  infoText: {
    fontSize: 16,
    color: "#ffffff",
    marginBottom: 5,
  },
  bioCard: {
    backgroundColor: "#2196F3",
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
  },
  bioText: {
    fontSize: 16,
    color: "#ffffff",
    textAlign: "center",
  },
  additionalInfoCard: {
    backgroundColor: "#FF9800",
    padding: 20,
    borderRadius: 10,
  },
  infoItem: {
    flexDirection: "row",
    marginVertical: 5,
  },
  infoKey: {
    fontWeight: "bold",
    color: "#ffffff",
  },
  infoValue: {
    fontSize: 16,
    color: "#ffffff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    marginVertical: 40,
  },
});
export default profile;
