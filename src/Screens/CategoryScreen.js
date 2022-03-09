import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { COLOURS } from "../global/Database";

const CategoryScreen = ({ route, navigation }) => {
  console.log(route.params);
  return (
    <View style={styles.container}>
      <Text>{route.params.type}</Text>
      <Text>{route.params.img}</Text>
      <Text>{route.params.about}</Text>
      <Text>{route.params.ratings}</Text>
      <Text>{route.params.price}</Text>
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  container: { backgroundColor: COLOURS.backgroundDark }
});
