import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function AlertButton() {
  const handlePress = () => {
    Alert.alert("Alert Button pressed");
  };

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={handlePress}
      activeOpacity={0.8}
    >
      <Text style={styles.text}>Alert Button</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#1DB954",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 30,
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 16,
  },
  text: {
    color: "#000",
    fontWeight: "700",
    fontSize: 14,
    letterSpacing: 0.5,
  },
});
