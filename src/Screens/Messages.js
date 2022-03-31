import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import MessagesList from "../Components/Const/MessageList";
import { Alert } from "react-native-web";
import { COLOURS } from "../global/Database";

export const COLORS = {
  primary: "#b7e4c7",
  secondary: "#1b4332",
  background: "#e9f5db",
  completed: "#ff006e",
  done: "#38b000",
};

export default function Messages({ navigation }) {
  const [userInput, setUserInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addMessages = () => {
    if (userInput == "") {
      prompt("hi");
    } else {
      const newTodos = {
        id: Math.random(),
        task: userInput,
        completed: false,
      };
      setTodos([...todos, newTodos]);
      setUserInput("");
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.background,
      }}
    >
      <View
        style={{
          flexDirection: "row",

          backgroundColor: COLORS.background,
          width: "100%",
          height: 80,
          alignItems: "center",
          elevation: 10,
          marginRight: 20,
          paddingRight: 20,
          elevation: -20,
          shadowOpacity: 0.04,
          marginHorizontal: 20,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign
            name="leftcircle"
            size={30}
            color={COLOURS.backgroundDark}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: COLORS.secondary,
            paddingLeft: 20,
          }}
        >
          Messages
        </Text>
        {/* <TouchableOpacity>
          <AntDesign name="delete" size={30} color="red" />
        </TouchableOpacity> */}
      </View>
      {/* render flatlist */}
      <FlatList
        data={todos}
        contentContainerStyle={{ padding: 20 }}
        renderItem={({ item }) => <MessagesList todo={item} />}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.footer}>
        <View style={styles.footer_container}>
          <TextInput
            placeholder="chat with seller"
            style={{
              fontSize: 20,
              fontStyle: "italic",
              color: COLORS.secondary,
            }}
            onChangeText={(text) => setUserInput(text)}
            value={userInput}
          />
        </View>
        <TouchableOpacity
          style={{
            width: 70,
            height: 80,
            marginTop: 18,
            marginRight: 10,
          }}
          onPress={addMessages}
        >
          <Text
            style={{
              backgroundColor: COLOURS.backgroundDark,
              color: COLOURS.lemonGreen,
              fontSize: 20,
              padding: 10,
            }}
          >
            Send
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footer_container: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
});
