import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { LOGIN_URL } from "./models/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
//import axios from 'axios';

const LoginPage = () => {
  const router = useRouter();

  const handleBackPress = () => {
    router.back();
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleLogin = async () => {
  //   try {
  //     const response = await api.login(email, password);
  //     const { token } = response.data;
  //     await AsyncStorage.setItem('jwtToken', token);
  //     Alert.alert('Success', 'Logged in successfully');
  //     router.push('/newsFeed');
  //   } catch (error) {
  //     Alert.alert('Login Error', String(error));
  //   }
  // };

  const handleLogin = async () => {
    const credentials = {
      _id: "",
      Name: "",
      Age: 0,
      Email: email,
      Phone: "",
      Password: password,
      Username: "",
      Interests: [],
      JoinedCommunities: [],
      Profile_picture_url: "",
    };

    // const token = await AsyncStorage.getItem("jwtToken");
    //   try {
    //     const response = await fetch(LOGIN_URL, {
    //       method: "POST",
    //       headers: {
    //         "Authorization": `Bearer ${token}`,
    //         "Content-Type": "application/json"
    //       },
    //       body: JSON.stringify(credentials),
    //     });

    //     const data = await response.json();

    //     if (response.ok) {
    //       // Store token in AsyncStorage
    //       await AsyncStorage.setItem("jwtToken", data.Token);
    //       Alert.alert("Success", "Login successful!");
    //       router.push("/newsFeed");
    //     } else {
    //       Alert.alert("Error", data.message || "Login failed!");
    //     }
    //   } catch (error) {
    //       Alert.alert("Error", "Something went wrong!");
    //       console.error("Login error:", error);
    //   }

    try {
      const response = await fetch(LOGIN_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (response.ok) {
        if (data && data.token) {
          await AsyncStorage.setItem("jwtToken", data.token);
          Alert.alert("Success", "Login successful!");
          console.log("Login successful:", data);
          router.push("/communities");
        } else {
          Alert.alert("Error", "No token received.");
          console.error("No token received from the backend.");
        }
      } else {
        Alert.alert("Error", data.message || "Login failed!");
        console.error("Login error:", data);
      }
    } catch (error) {
      Alert.alert("Error", "Something went wrong!");
      console.error("Login request error:", error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleBackPress}
        style={{ position: "absolute", top: 40, left: 20 }}
      >
        <Ionicons name="arrow-back-outline" size={30} color="black" />
      </TouchableOpacity>

      <View style={styles.logCard}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/SignupPage")}>
          <Text style={styles.registerLink}>
            Don't have an account? Register here
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  logCard: {
    width: "100%",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  registerLink: {
    marginTop: 15,
    color: "#007BFF",
    textAlign: "center",
  },

  loginButton: {
    height: 40,
    width: 90,
    borderRadius: 5,
    backgroundColor: "#007BFF",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginVertical: 10,
  },

  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default LoginPage;
