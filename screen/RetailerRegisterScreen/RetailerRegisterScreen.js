import React, { useState, useCallback, useMemo } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import registerStyles from "./RetailerRegisterScreen.styles"; // make a new styles file or reuse farmer one

const API_URL = "http://localhost:3000/api/auth/retailer/register";

const InputField = React.memo(
  ({
    label,
    value,
    onChangeText,
    keyboardType = "default",
    secureTextEntry = false,
    maxLength,
    required = true,
    placeholder,
    editable = true,
    showPassword,
    setShowPassword,
  }) => (
    <View style={registerStyles.section}>
      <Text style={registerStyles.label}>
        {label} {required && <Text style={{ color: "#E53935" }}>*</Text>}
      </Text>
      <View
        style={[
          registerStyles.inputContainer,
          secureTextEntry && registerStyles.passwordContainer,
        ]}
      >
        <TextInput
          style={registerStyles.input}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry && !showPassword}
          placeholder={placeholder}
          placeholderTextColor="#999"
          maxLength={maxLength}
          editable={editable}
        />
        {secureTextEntry && (
          <TouchableOpacity
            style={registerStyles.passwordToggle}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Text style={registerStyles.passwordToggleText}>
              {showPassword ? "HIDE" : "SHOW"}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
);

const RetailerRegisterScreen = ({ navigation, route }) => {
  const { role, language } = route.params || {
    role: "Retailer",
    language: "English",
  };

  const [form, setForm] = useState({
    name: "",
    password: "",
    contact: "",
    location: "",
    shop_name: "",
    shop_address: "",
    gst_number: "",
    license_number: "",
    aadhar_number: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const updateForm = useCallback((key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  }, []);

  // --- Validation ---
  const isFormValid = useMemo(() => {
    const {
      name,
      password,
      contact,
      location,
      shop_name,
      shop_address,
      gst_number,
      license_number,
      aadhar_number,
    } = form;

    if (
      !name ||
      !password ||
      !contact ||
      !location ||
      !shop_name ||
      !shop_address ||
      !gst_number ||
      !license_number ||
      !aadhar_number
    ) {
      return false;
    }
    if (password.length < 6) return false;
    if (contact.length !== 10) return false;
    if (aadhar_number.length !== 12) return false;

    return true;
  }, [form]);

  // --- Registration Handler ---
  const handleRegister = async () => {
    if (!isFormValid) {
      Alert.alert(
        "Incomplete Form",
        "Please fill in all required fields and ensure formats (phone, Aadhar, GST, license) are correct."
      );
      return;
    }

    setLoading(true);

    try {
      const payload = { ...form };

      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        let errorMessage = "Registration failed due to a server error.";
        try {
          const errorData = await response.json();
          errorMessage = errorData.message || errorData.error || errorMessage;
        } catch (e) {
          errorMessage = `Registration failed: HTTP ${response.status} (${response.statusText})`;
        }
        throw new Error(errorMessage);
      }

      const result = await response.json();
      console.log("Registration Response:", result);
      Alert.alert(
        "Registration Successful!",
        `Welcome, ${form.name}. You can now log in.`
      );
      navigation.navigate("RetailerDashboard", { user: result });
    } catch (error) {
      Alert.alert(
        "Registration Failed",
        error.message || "A network error occurred."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <LinearGradient
        colors={["#F0F8F5", "#D0EDE5"]}
        style={registerStyles.container}
      >
        <KeyboardAvoidingView
          style={{ flexGrow: 1, width: "100%", height: "100%" }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 20}
        >
          <ScrollView
            contentContainerStyle={registerStyles.scrollContent}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            <View style={registerStyles.card}>
              <Text style={registerStyles.title}>Retailer Registration</Text>
              <Text style={registerStyles.subtitle}>
                Join the Farm Connect network. Selected Role: {role}
              </Text>
              <Text style={registerStyles.infoText}>
                Fields marked with <Text style={{ color: "#E53935" }}>*</Text>{" "}
                are mandatory.
              </Text>

              {/* --- Form Fields --- */}
              <InputField
                label="Full Name"
                value={form.name}
                onChangeText={(text) => updateForm("name", text)}
                placeholder="Enter your full name"
                editable={!loading}
              />

              <InputField
                label="Contact Number (10 digits)"
                value={form.contact}
                onChangeText={(text) => updateForm("contact", text)}
                keyboardType="phone-pad"
                maxLength={10}
                placeholder="e.g., 9876543210"
                editable={!loading}
              />

              <InputField
                label="Password (min 6 characters)"
                value={form.password}
                onChangeText={(text) => updateForm("password", text)}
                secureTextEntry={true}
                maxLength={20}
                placeholder="Create a secure password"
                editable={!loading}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
              />

              <InputField
                label="Location / City"
                value={form.location}
                onChangeText={(text) => updateForm("location", text)}
                placeholder="e.g., Lucknow, UP"
                editable={!loading}
              />

              <InputField
                label="Shop Name"
                value={form.shop_name}
                onChangeText={(text) => updateForm("shop_name", text)}
                placeholder="Enter shop name"
                editable={!loading}
              />

              <InputField
                label="Shop Address"
                value={form.shop_address}
                onChangeText={(text) => updateForm("shop_address", text)}
                placeholder="Enter full shop address"
                editable={!loading}
              />

              <InputField
                label="GST Number"
                value={form.gst_number}
                onChangeText={(text) => updateForm("gst_number", text)}
                placeholder="Enter GST number"
                editable={!loading}
              />

              <InputField
                label="License Number"
                value={form.license_number}
                onChangeText={(text) => updateForm("license_number", text)}
                placeholder="Enter license number"
                editable={!loading}
              />

              <InputField
                label="Aadhar Number (12 digits)"
                value={form.aadhar_number}
                onChangeText={(text) => updateForm("aadhar_number", text)}
                keyboardType="numeric"
                maxLength={12}
                placeholder="Enter 12-digit Aadhar number"
                editable={!loading}
              />

              {/* Register Button */}
              <TouchableOpacity
                style={[
                  registerStyles.registerButton,
                  !isFormValid && registerStyles.registerButtonDisabled,
                ]}
                onPress={handleRegister}
                disabled={!isFormValid || loading}
              >
                {loading ? (
                  <ActivityIndicator color="#FFFFFF" />
                ) : (
                  <Text style={registerStyles.registerButtonText}>
                    Register
                  </Text>
                )}
              </TouchableOpacity>

              <View style={{ flexDirection: "row", padding: 16 }}>
                <Text style={registerStyles.loginLinkText}>
                  Already have an account?{" "}
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("CommonLoginScreen", { role: "Retailer" })
                  }
                >
                  <Text
                    style={[
                      registerStyles.loginLinkText,
                      { color: "blue", fontWeight: "bold" },
                    ]}
                  >
                    Login Here
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

export default RetailerRegisterScreen;
