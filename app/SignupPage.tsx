import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SIGNUP_URL } from "./models/api";
//import axios from 'axios';

const SignupPage = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const router = useRouter();

  const handleBackPress = () => {
    router.back();
  };

  // const handleSignUp = async () => {
  //   if (password !== confirmPassword) {
  //     Alert.alert('Passwords do not match!');
  //     return;
  //   }

  //   try {
  //     await api.register(name, email, age, password);
  //     Alert.alert('Success', 'User registered successfully');
  //     router.push("/LoginPage")
  //   } catch (error) {
  //     Alert.alert('Registration Error', String(error));
  //   }

  // };

  const handleSignup = async () => {
    // const userData = {
    //   name,
    //   email,
    //   password,
    //   age,
    // };

    console.log(name, email, password, age);
    const user = {
      _id: "",
      Name: name,
      Age: age,
      Email: email,
      Phone: "",
      Password: password,
      Username: "",
      Interests: [],
      JoinedCommunities: [],
      Profile_picture_url: "",
    }

    try {
      const response = await fetch(SIGNUP_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

    //   const rawText = await response.text(); 
    //   console.log("Raw Response:", rawText);

    //   const data = JSON.parse(rawText);

    //   if (response.ok) {
    //     Alert.alert("Success", "Signup successful!");
    //     console.log("Signup successful:", data);
    //     router.push("/LoginPage");
    //   } else {
    //     Alert.alert("Error", data.message || "Signup failed!");
    //     console.error("Signup error:", data);
    //   }
    // } catch (error) {
    //   Alert.alert("Error", "Something went wrong!");
    //   console.error("Signup request error:", error);
    // }
    const data = await response.json();

    if (response.ok) {
      Alert.alert("Success", data.message); // Backend returns { message: "..." }
      router.push("/LoginPage");
    } else {
      Alert.alert("Error", data.message || "Signup failed!");
    }
  } catch (error) {
    Alert.alert("Error", "Something went wrong!");
    console.error("Signup request error:", error);
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
        <Text style={styles.title}>Sign Up</Text>

        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="Age"
          keyboardType="numeric"
          value={age}
          onChangeText={setAge}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <Ionicons
            name="eye-off-outline"
            size={24}
            color="black"
            style={styles.icon}
          />
        </View>

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Re-enter Password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <Ionicons
            name="eye-off-outline"
            size={24}
            color="black"
            style={styles.icon}
          />
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleSignup}>
          <Text style={styles.loginButtonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/LoginPage")}
          style={styles.loginButton}
        >
          <Text style={styles.loginButtonText}>Log In</Text>
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
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 50,
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
  passwordContainer: {
    position: "relative",
  },
  passwordInput: {
    height: 50,
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
  icon: {
    position: "absolute",
    right: 10,
    top: 12,
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

export default SignupPage;
