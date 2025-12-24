import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

const SignUpScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>
          Track your food items smartly 🍽️
        </Text>
      </View>

      {/* Card */}
      <View style={styles.card}>
        <TextInput
          placeholder="Full Name"
          placeholderTextColor="#9CA3AF"
          style={styles.input}
        />

        <TextInput
          placeholder="Email Address"
          placeholderTextColor="#9CA3AF"
          keyboardType="email-address"
          style={styles.input}
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor="#9CA3AF"
          secureTextEntry
          style={styles.input}
        />

        <TextInput
          placeholder="Confirm Password"
          placeholderTextColor="#9CA3AF"
          secureTextEntry
          style={styles.input}
        />

        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Already have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.loginText}> Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F7FB",
    paddingHorizontal: 20,
  },

  header: {
    marginTop: 100,
    marginBottom: 70,
    justifyContent:"center",
    alignItems:"center"
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#111827",
  },

  subtitle: {
    marginTop: 6,
    fontSize: 15,
    color: "#6B7280",
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,

    // soft shadow (same feel as item cards)
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },

  input: {
    backgroundColor: "#F3F4F6",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 15,
    color: "#111827",
    marginBottom: 14,
  },

  primaryButton: {
    backgroundColor: "#6D5DF6", // same purple tone as +
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 10,
  },

  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },

  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },

  footerText: {
    color: "#6B7280",
    fontSize: 14,
  },

  loginText: {
    color: "#6D5DF6",
    fontSize: 14,
    fontWeight: "600",
  },
});


export default SignUpScreen;
