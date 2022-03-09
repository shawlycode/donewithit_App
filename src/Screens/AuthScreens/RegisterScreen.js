import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { COLOURS } from "../../global/Database";

const RegisterScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Sign-Up</Text>
        <View>
          <Text
            style={{
              fontSize: 18,
              marginHorizontal: 20,
              paddingTop: 10,
              fontWeight: "500",
              color: COLOURS.lemonGreen
            }}
          >
            Please sign up with your details and start earning with DoneWithIt
          </Text>
        </View>
      </View>
      <View style={{ flex: 5 }}>
        <View style={styles.form}>
          <TextInput
            placeholder="Full Name"
            style={styles.inputText}
            name="name"
          />
          <TextInput
            placeholder="Email"
            style={styles.inputText}
            name="email"
          />
          <TextInput
            placeholder="password"
            style={styles.inputText}
            name="password"
            secureTextEntry={true}
          />
          <TextInput
            placeholder="Confirmed Password"
            style={styles.inputText}
            name="password"
            secureTextEntry={true}
          />
          <TextInput
            placeholder="Phone Number"
            style={styles.inputText}
            name="number"
            keyboardType="numeric"
          />
        </View>
        <View>
          <View></View>
          <Text
            style={{
              fontSize: 18,
              textAlign: "center",
              marginHorizontal: 20,
              marginVertical: 10,
              color: COLOURS.lemonGreen
            }}
          >
            By signing up you accept the
            <Text
              style={{ color: "#FA510D", fontWeight: "bold", fontSize: 20 }}
            >
              Terms of Service
            </Text>
            and
            <Text
              style={{ color: "#FA510D", fontWeight: "bold", fontSize: 20 }}
            >
              Private Policy
            </Text>
          </Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FA4B04",
          width: "91%",
          height: 50,
          marginVertical: 10,
          marginLeft: 20,
          borderRadius: 8,
        }}
      >
        <Text style={{ fontSize: 24, color: COLOURS.lemonGreen, fontWeight: "bold" }}>
          Sing-Up
        </Text>
      </View>
      <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 18, color: COLOURS.lemonGreen, }}>
          Already have an account?
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("signIn");
            }}
          >
            <Text
              style={{ color: COLOURS.lemonGreen, fontWeight: "bold", fontSize: 20 }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOURS.backgroundDark,
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    color: COLOURS.lemonGreen,
  },
  form: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginHorizontal: 20,
  },
  inputText: {
    fontSize: 20,
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: COLOURS.lemonGreen,
    width: "100%",
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 20,
    backgroundColor: COLOURS.lemonGreen,
    marginVertical: 10,
  },
});
