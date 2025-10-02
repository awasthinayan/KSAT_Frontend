import React, { useState, useCallback, useMemo } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Image,
  Dimensions,
  Pressable,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./LanguageSelectScreen.styles";

// Assuming these local assets are correctly linked in your project structure
const FarmerIcon = require("../../assets/farmer.png");
const WholesalerIcon = require("../../assets/wholesaler.png");
const TransportationIcon = require("../../assets/transportation.png");
const RetailerIcon = require("../../assets/retailer.png");
const LogoIcon = require("../../assets/farmer.png");

const roleIcons = {
  Farmer: FarmerIcon,
  "Middleman/Wholesaler": WholesalerIcon,
  "Transport Partner": TransportationIcon,
  Retailer: RetailerIcon,
};

const { width } = Dimensions.get("window");

const getScreenName = (role, type) => {
  const baseName = role.replace(/\/.*/, "").replace(/\s/g, "");

  if (type === "Register") {
    return `${baseName}RegisterScreen`;
  }
  if (type === "Login") {
    return `${baseName}LoginScreen`;
  }
  return null;
};

const LanguageSelectScreen = ({ navigation }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [selectedRole, setSelectedRole] = useState("Farmer"); // Default to Farmer

  // General UI States
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const languages = ["English", "Hindi", "Marathi", "Tamil"];
  const roles = [
    "Farmer",
    "Middleman/Wholesaler",
    "Transport Partner",
    "Retailer",
  ];

  // Derived state for button enablement (requires a role to be selected)
  const isActionDisabled = useMemo(() => {
    return !selectedRole || loading;
  }, [selectedRole, loading]);

  // --- NAVIGATION HANDLERS ---

  //--- Login handlers 

  const handleLoginPress = () => {
    if (!selectedRole) {
      Alert.alert(
        "Selection Required",
        "Please select your role before logging in."
      );
      return;
    }
    const screenName = getScreenName(selectedRole, "Login");

      console.log(`Navigating to Login Screen with role: ${selectedRole}`);
  navigation.navigate("CommonLoginScreen", {
    role: selectedRole,
    language: selectedLanguage,
  });
};

    // Register handlers

  const handleRegisterPress = () => {
    if (!selectedRole) {
      Alert.alert(
        "Selection Required",
        "Please select your role before registering."
      );
      return;
    }

    const screenName = getScreenName(selectedRole, "Register");

    if (screenName) {
      // Navigate to the dynamic Register screen, passing current selections
      console.log(`Navigating to Register Screen: ${screenName}`);
      navigation.navigate(screenName, {
        role: selectedRole,
        language: selectedLanguage,
      });
    } else {
      Alert.alert("Error", "Invalid role selected for registration.");
    }
  };
  // ------------------------------

  // --- Language Modal Component ---
  const LanguageModal = () => (
    <Modal
      visible={showLanguageModal}
      transparent
      animationType="slide"
      onRequestClose={() => setShowLanguageModal(false)}
    >
      <View style={styles.modalOverlay}>
        <Pressable
          style={StyleSheet.absoluteFill}
          onPress={() => setShowLanguageModal(false)}
        />
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Select Language</Text>
          {languages.map((language) => (
            <TouchableOpacity
              key={language}
              style={styles.modalOption}
              onPress={() => {
                setSelectedLanguage(language);
                setShowLanguageModal(false);
              }}
            >
              <Text style={styles.modalOptionText}>{language}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Modal>
  );

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={["#F0F8F5", "#D0EDE5"]} style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.card}>
            {/* Logo/Image */}
            <Image
              source={LogoIcon}
              style={{
                width: width * 0.3,
                height: width * 0.3,
                marginBottom: 15,
                resizeMode: "contain",
              }}
            />

            <Text style={styles.title}>Farm Connect</Text>
            <Text style={styles.subtitle}>Agricultural Supply Chain</Text>

            {/* Language Select */}
            <View style={styles.section}>
              <Text style={styles.label}>Select Language</Text>
              <TouchableOpacity
                style={styles.dropdown}
                onPress={() => setShowLanguageModal(true)}
                disabled={loading}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={styles.dropdownText}>{selectedLanguage}</Text>
                  <Text style={styles.dropdownArrow}>{" \u25BC"}</Text>
                </View>
              </TouchableOpacity>
            </View>

            {/* Role Select */}
            <View style={styles.section}>
              <Text style={styles.label}>Select Your Role</Text>
              <View style={styles.roleContainer}>
                {roles.map((role) => (
                  <TouchableOpacity
                    key={role}
                    style={[
                      styles.roleButton,
                      role === "Farmer" && styles.farmerButton,
                      role === "Retailer" && styles.RetailerButton,
                      role === "Middleman/Wholesaler" && styles.MiddlemanButton,
                      role === "Transport Partner" && styles.transportButton,
                      selectedRole === role && styles.roleButtonSelected,
                    ]}
                    onPress={() => setSelectedRole(role)}
                    activeOpacity={0.7}
                    disabled={loading}
                  >
                    <Text
                      style={[
                        styles.roleText,
                        selectedRole === role && styles.roleTextSelected,
                      ]}
                    >
                      {role === "Middleman/Wholesaler"
                        ? "Wholesaler/MiddleMan"
                        : role}
                    </Text>
                    <Image
                      source={roleIcons[role]}
                      style={[
                        styles.roleIcon,
                        role === "Farmer" && styles.farmerIcon,
                        role === "Retailer" && styles.retailerIcon,
                        role === "Middleman/Wholesaler" && styles.middlemanIcon,
                        role === "Transport Partner" && styles.transportIcon,
                      ]}
                    />
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* LOGIN AND REGISTER BUTTONS */}
            <View style={{ width: "100%", marginTop: 20 }}>
              {/* Register Button (Primary Action) */}
              <TouchableOpacity
                style={[
                  {
                    backgroundColor: "#1B7F4C", // Primary Green
                    paddingVertical: 18,
                    borderRadius: 30,
                    alignItems: "center",
                    width: "100%",
                    marginBottom: 15,
                    // Shadow for emphasis
                    shadowColor: "#1B7F4C",
                    shadowOpacity: 0.4,
                    shadowOffset: { width: 0, height: 4 },
                    shadowRadius: 8,
                    elevation: 8,
                  },
                  isActionDisabled && styles.loginButtonDisabled,
                ]}
                onPress={handleRegisterPress} // Dynamic Navigation
                disabled={isActionDisabled}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 18,
                    fontWeight: "700",
                  }}
                >
                  Register Now
                </Text>
              </TouchableOpacity>

              {/* Login Button (Secondary Action) */}
              <TouchableOpacity
                style={[
                  {
                    backgroundColor: "#FFFFFF",
                    paddingVertical: 18,
                    borderRadius: 30,
                    alignItems: "center",
                    width: "100%",
                    borderWidth: 2,
                    borderColor: "#1B7F4C",
                    elevation: 2,
                  },
                  isActionDisabled && { opacity: 0.7, borderColor: "#A5D6BA" },
                ]}
                onPress={handleLoginPress} // Dynamic Navigation
                disabled={isActionDisabled}
              >
                <Text
                  style={{
                    color: "#1B7F4C",
                    fontSize: 18,
                    fontWeight: "700",
                  }}
                >
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>

      {/* Language Modal */}
      <LanguageModal />
    </View>
  );
};

export default LanguageSelectScreen;
