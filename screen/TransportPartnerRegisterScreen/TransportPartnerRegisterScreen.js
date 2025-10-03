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
  Switch,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import registerStyles from "./TransportPartnerRegisterScreen.styles"; // reuse same styles




const API_URL = "http://localhost:3000/api/auth/transportpartner/register";

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

const TransportPartnerRegisterScreen = ({ navigation, route }) => {
  const { role, language } = route.params || {
    role: "TransportPartner",
    language: "English",
  };

  const [form, setForm] = useState({
    name: "",
    password: "",
    contact: "",
    location: "",
    vehicle_number: "",
    license_number: "",
    vehicle_type: "",
    capacity_tons: "",
    available: true,
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const updateForm = useCallback((key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  }, []);

  const isFormValid = useMemo(() => {
    const {
      name,
      password,
      contact,
      location,
      vehicle_number,
      license_number,
      vehicle_type,
      capacity_tons,
    } = form;
    if (
      !name ||
      !password ||
      !contact ||
      !location ||
      !vehicle_number ||
      !license_number ||
      !vehicle_type ||
      !capacity_tons
    )
      return false;
    if (password.length < 6) return false;
    if (contact.length !== 10) return false;
    if (isNaN(capacity_tons)) return false;
    return true;
  }, [form]);

  const handleRegister = async () => {
    if (!isFormValid) {
      Alert.alert(
        "Incomplete Form",
        "Please fill all required fields correctly."
      );
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.msg || "Registration failed");
      }
      const result = await response.json();
      Alert.alert("Registration Successful!", `Welcome, ${form.name}.`);
      navigation.navigate("TransportPartnerDashboard", { user: result });
    } catch (error) {
      Alert.alert("Registration Failed", error.message || "Network error");
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
              <Text style={registerStyles.title}>
                Transport Partner Registration
              </Text>
              <Text style={registerStyles.subtitle}>
                Join the Farm Connect network. Selected Role: {role}
              </Text>

              <InputField
                label="Full Name"
                value={form.name}
                onChangeText={(text) => updateForm("name", text)}
                placeholder="Enter full name"
                editable={!loading}
              />
              <InputField
                label="Contact Number"
                value={form.contact}
                onChangeText={(text) => updateForm("contact", text)}
                keyboardType="phone-pad"
                maxLength={10}
                placeholder="10-digit contact"
                editable={!loading}
              />
              <InputField
                label="Password"
                value={form.password}
                onChangeText={(text) => updateForm("password", text)}
                secureTextEntry={true}
                maxLength={20}
                placeholder="Enter password"
                editable={!loading}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
              />
              <InputField
                label="Location / City"
                value={form.location}
                onChangeText={(text) => updateForm("location", text)}
                placeholder="Enter city"
                editable={!loading}
              />
              <InputField
                label="Vehicle Number"
                value={form.vehicle_number}
                onChangeText={(text) => updateForm("vehicle_number", text)}
                placeholder="Enter vehicle number"
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
                label="Vehicle Type"
                value={form.vehicle_type}
                onChangeText={(text) => updateForm("vehicle_type", text)}
                placeholder="Truck, Van, etc."
                editable={!loading}
              />
              <InputField
                label="Capacity (Tons)"
                value={form.capacity_tons}
                onChangeText={(text) => updateForm("capacity_tons", text)}
                keyboardType="numeric"
                placeholder="Vehicle capacity"
                editable={!loading}
              />

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginVertical: 10,
                }}
              >
                <Text style={registerStyles.label}>Available</Text>
                <Switch
                  value={form.available}
                  onValueChange={(val) => updateForm("available", val)}
                  disabled={loading}
                />
              </View>

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
                    navigation.navigate("CommonLoginScreen", {
                      role: "TransportPartner",
                    })
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

export default TransportPartnerRegisterScreen;
