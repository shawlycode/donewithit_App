import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  function Card() {
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        data={cardData}
        renderItem={({ item }) => (
          <View
            style={{
              width: "90%",
              marginHorizontal: 20,
              marginBottom: 15,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("cardDetails", item)}
            >
              <Image source={item.img} style={styles.img} />

              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#f35b04",
                  height: 70,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                  shadowOffset: 10,
                  shadowOpacity: 4,
                  elevation: 0.6,
                }}
              >
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.textPrice}>{item.price}</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    );
  }
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
      id: "883hi",
      type: "Camera's",
      image: require("../../assets/troy.jpg"),
      about: "this is the best so far in the market",
      price: "$200",
      review: "243 reviews",
      ratings: "4.5 stars",
    },
    {
      id: "8838hi",
      type: "Clothes",
      image: require("../../assets/troy.jpg"),
      about: "this is the best so far in the market",
      price: "$200",
      review: "243 reviews",
      ratings: "4.5 stars",
    },
    {
      id: "883228h",
      type: "Toys",
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
  const [cardData, setCardData] = useState([
    {
      id: "bd7acbea-c1b1-46c2-aed5-3abb",
      img: require("../../assets/jacket.jpg"),
      name: "Black Jacket",
      about:
        "This is one of the best you can find on this plat form .Is made of pure cotton. Is also water proof",
      price: "$400",
      ratings: "4 stars",
    },
    {
      id: "bd7acbea-c1-c2-aed5-d53abb28ba",
      img: require("../../assets/nike1.jpeg"),
      name: "Nike",
      about: "This is one of the best you can find on this plat form ",
      price: "$299",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3a53abb",
      img: require("../../assets/jacket.jpg"),
      name: "Black Jacket",
      about:
        "This is one of the best you can find on this plat form .Is made of pure cotton.",
      price: "$120",
    },
  ]);

  return (
    // category list section
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={categoryList}
        renderItem={({ item }) => (
          <View
            style={{ marginTop: 50, marginBottom: 30, marginHorizontal: 8 }}
          >
            <TouchableOpacity
              style={styles.categoryCon}
              onPress={() => navigation.navigate("CategoryModal")}
            >
              <Text style={styles.categoryText}>{item.type}</Text>
            </TouchableOpacity>
          </View>
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
  img: {
    width: "100%",
    height: 280,
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  text: {
    paddingTop: 5,
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  textPrice: {
    fontSize: 25,
    fontWeight: "bold",
    color: "yellow",
    paddingBottom: 10,
  },
  categoryCon: {
    justifyContent: "center",
    alignItems: "center",
    width: 85,
    height: 40,
    backgroundColor: "tomato",
    borderRadius: 5,
  },
  categoryText: {
    fontSize: 18,
    color: "yellow",
    fontWeight: "bold",
  },
});
