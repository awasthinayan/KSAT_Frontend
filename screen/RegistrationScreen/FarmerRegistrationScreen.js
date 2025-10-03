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
import registerStyles from "./FarmerRegistrationScreen.styles"; // New styles file

const API_URL = "http://localhost:3000/api/auth/farmer/register";

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
    //props for onFocus and onBlur callbacks
    onFocus,
    onBlur,
    isFocused,
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
          onFocus={onFocus} 
          onBlur={onBlur}
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

const FarmerRegisterScreen = ({ navigation, route }) => {
  const { role, language } = route.params || {
    role: "Farmer",
    language: "English",
  };

  const [form, setForm] = useState({
    name: "",
    password: "",
    contact: "",
    location: "",
    landSize: "",
    farming_exp: "",
    prefered_crop_type: "",
    certifications: "",
    aadhar_number: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [focusedField, setFocusedField] = useState(null);
  const [isRegisteringActive, setIsRegisteringActive] = useState(false);
  const [isLoginLinkActive, setIsLoginLinkActive] = useState(false);


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
      landSize,
      farming_exp,
      aadhar_number,
    } = form;

    if (
      !name ||
      !password ||
      !contact ||
      !location ||
      !landSize ||
      !farming_exp ||
      !aadhar_number
    ) {
      return false;
    }
    if (password.length < 6) return false;
    if (contact.length !== 10) return false;
    if (aadhar_number.length !== 12) return false;
    if (isNaN(parseFloat(landSize)) || parseFloat(landSize) <= 0) return false;
    if (isNaN(parseInt(farming_exp, 10)) || parseInt(farming_exp, 10) < 0)
      return false;

    return true;
  }, [form]);

  // --- Registration Handler ---
  const handleRegister = async () => {
    if (!isFormValid) {
      Alert.alert(
        "Incomplete Form",
        "Please fill in all required fields and ensure formats (phone, Aadhar, land size) are correct."
      );
      return;
    }

    setLoading(true);

    try {
      const payload = {
        name: form.name,
        password: form.password,
        contact: form.contact,
        location: form.location,
        landSize: parseFloat(form.landSize),
        farming_exp: parseInt(form.farming_exp, 10),
        prefered_crop_type: form.prefered_crop_type || "N/A",
        certifications: form.certifications || "None",
        aadhar_number: form.aadhar_number,
      };

      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        let errorMessage = "Registration failed due to a server error.";
        try {
          const errorData = await response.json();
        errorMessage = errorData.msg || errorData.message || errorData.error || errorMessage;
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
      navigation.navigate("FarmerDashboard", { user: result });
    } catch (error) {
      Alert.alert(
        "Registration Failed",
        `${
          error.message || "A network error occurred."
        }\n\nRedirecting to dashboard with offline data.`
      );

      navigation.navigate("FarmerDashboard", { user: form });
    } finally {
      setLoading(false);
    }
  };

   const getInputProps = (key) => ({
    value: form[key],
    onChangeText: (text) => updateForm(key, text),
    onFocus: () => setFocusedField(key),
    onBlur: () => setFocusedField(null),
    isFocused: focusedField === key,
    editable: !loading,
  });

  

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <LinearGradient
        colors={["#F0F8F5", "#D0EDE5"]}
        style={registerStyles.container}
      >
        <KeyboardAvoidingView
          style={{ flexGrow: 1, width: "100%", height: "100%" }}
          behavior={Platform.OS === "ios" ? "padding" : "height"} // ✅ safer for Android
          keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 20}
        >
          <ScrollView
            contentContainerStyle={registerStyles.scrollContent}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            <View style={registerStyles.card}>
              <Text style={registerStyles.title}>Farmer Registration</Text>
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
                placeholder="Enter your full name"
                {...getInputProps("name")}
              />

              <InputField
                label="Contact Number (10 digits)"
                keyboardType="phone-pad"
                maxLength={10}
                placeholder="e.g., 7266016650"
                {...getInputProps("contact")}
              />

              <InputField
                label="Password (min 6 characters)"
                secureTextEntry={true}
                maxLength={20}
                placeholder="Create a secure password"
                showPassword={showPassword}
                setShowPassword={setShowPassword}
                {...getInputProps("password")}
              />

              <InputField
                label="Location / City"
                placeholder="e.g., Lucknow, Uttar Pradesh"
                {...getInputProps("location")}
              />

              <InputField
                label="Land Size (Acres/Hectares)"
                keyboardType="numeric"
                placeholder="e.g., 85.0"
                {...getInputProps("landSize")}
              />

              <InputField
                label="Farming Experience (Years)"
                keyboardType="numeric"
                maxLength={2}
                placeholder="e.g., 8"
                {...getInputProps("farming_exp")}
              />

              <InputField
                label="Preferred Crop Type"
                required={false}
                placeholder="e.g., Oranges, Wheat, etc."
                {...getInputProps("prefered_crop_type")}
              />

              <InputField
                label="Certifications (Optional)"
                required={false}
                placeholder="e.g., Organic Certification (if applicable)"
                {...getInputProps("certifications")}
              />

              <InputField
                label="Aadhar Number (12 digits)"
                keyboardType="numeric"
                maxLength={12}
                placeholder="Enter your 12-digit Aadhar number"
                {...getInputProps("aadhar_number")}
              />

              {/* Register Button with Press Animation */}
              <TouchableOpacity
                style={[
                  registerStyles.registerButton,
                  !isFormValid && registerStyles.registerButtonDisabled,
                  // Apply active style (includes scale transform)
                  isRegisteringActive && registerStyles.registerButtonActive,
                ]}
                onPress={handleRegister}
                disabled={!isFormValid || loading}
                onPressIn={() => setIsRegisteringActive(true)}
                onPressOut={() => setIsRegisteringActive(false)}
              >
                {loading ? (
                  <ActivityIndicator color="#FFFFFF" />
                ) : (
                  <Text style={registerStyles.registerButtonText}>
                    Register
                  </Text>
                )}
              </TouchableOpacity>

              <View style={{ flexDirection: "row", padding:16 }}>
                <Text style={registerStyles.loginLinkText}>
                  Already have an account?{" "}
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("CommonLoginScreen", { role: "Farmer" })
                  }
                  // Apply active state for text color change
                  onPressIn={() => setIsLoginLinkActive(true)}
                  onPressOut={() => setIsLoginLinkActive(false)}
                >
                  <Text
                    style={[
                      registerStyles.loginLinkText,
                      { color: "blue", fontWeight: "bold" },
                      // Apply active style when pressed
                      isLoginLinkActive && registerStyles.loginLinkActive,
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

export default FarmerRegisterScreen;
