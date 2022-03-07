import React from "react";
import { View, StyleSheet } from "react-native";
import Route from "./src/Screens/Navigators/Route";
import FlashMessage from "react-native-flash-message";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Route />
      <FlashMessage position="top" style={{ width: "100%", height: 100, alignItems: "center" }} />
    </View>
  );
};

const styles = StyleSheet.create({
  flash: {
    flex: 1,
    position: "absolute",
    top: 300,
    left: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    opacity: 1,
    fontWeight: "bold",
  },
});
export default App;
