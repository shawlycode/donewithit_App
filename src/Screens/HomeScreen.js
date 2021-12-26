import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

import Card from "./Card";

const HomeScreen = ({ navigation }) => {
  const [categoryList, setCategoryList] = useState([
    {
      id: "883228hi",
      type: "Cars",
      image: require("../../assets/troy.jpg"),
      about: "this is the best so far in the market",
      price: "$200",
      review: "243 reviews",
      ratings: "4.5 stars",
    },
    {
      id: "8832hi",
      type: "furniture",
      image: require("../../assets/jacket.jpg"),
      about: "this is the best so far in the market",
      price: "$200",
      review: "243 reviews",
      ratings: "4.5 stars",
    },
  ]);
  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        data={categoryList}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ListDetails", item)}
          >
            <Text>{item.type}</Text>
          </TouchableOpacity>
        )}
      />
      <Card />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EDE0FC",
  },
});
