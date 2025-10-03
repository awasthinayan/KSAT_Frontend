import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MiddlemanRegisterScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Middleman Register Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0F8F5",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1B7F4C",
  },
});

export default MiddlemanRegisterScreen;
