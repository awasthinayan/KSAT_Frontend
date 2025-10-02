import React, { useState } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Alert 
} from "react-native";
import styles from "./CommonLoginScreen.styles";

const CommonLoginScreen = ({ route, navigation }) => {
  const { role } = route.params || { role: "User" };
  const [contactNo, setContactNo] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // 👇 Add this helper function
  const navigateToDashboard = (role, user) => {
    if (role === "Farmer") {
      navigation.navigate("FarmerDashboard", { user });
    } else if (role === "Retailer") {
      navigation.navigate("RetailerDashboard", { user });
    } else if (role === "Wholesaler") {
      navigation.navigate("WholesalerDashboard", { user });
    } else {
      navigation.navigate("Welcome");
    }
  };

  const handleLogin = async () => {
    if (!contactNo || !password) {
      Alert.alert("Error", "Please enter both contact number and password");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `http://localhost:3000/api/auth/${role.toLowerCase()}/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ contactNo, password }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        Alert.alert("Success", `${role} Login successful!`);
        console.log("User Data:", data);

        // ✅ Now using helper function
        navigateToDashboard(role, data);
      } else {
        Alert.alert("Login Failed", data.message || "Invalid credentials");
      }
    } catch (error) {
      console.log("Backend not available, using dummy login...");

      // ✅ Dummy data for offline login
      const dummyUser = {
        id: "12345",
        name: `${role} User`,
        role,
        contactNo,
      };

      Alert.alert("Offline Login", `Welcome ${dummyUser.name}!`);
      navigateToDashboard(role, dummyUser);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* 👇 Dynamic title */}
      <Text style={styles.title}>{role} Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Contact Number"
        keyboardType="numeric"
        value={contactNo}
        onChangeText={setContactNo}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={[styles.button, loading && { opacity: 0.6 }]}
        onPress={handleLogin}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? `Logging in as ${role}...` : "Login"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CommonLoginScreen;
