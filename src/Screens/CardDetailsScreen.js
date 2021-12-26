import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CardDetailsScreen = ({ route, navigation }) => {
  // console.log(route.params);
  return <View style={styles.container}>{route.params.item}</View>;
};

export default CardDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
