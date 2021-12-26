import React, { useState } from "react";
import { FlatList, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Card({ navigation }) {
  const [cardData, setCardData] = useState([
    {
      id: "bd7acbea-c1b1-46c2-aed5-3a53abb",
      img: require("../../assets/jacket.jpg"),
      name: "Black Jacket",
      price: "$120",
    },
    {
      id: "bd7acbea-c1-c2-aed5-3ad53abb28ba",
      img: require("../../assets/nike1.jpeg"),
      name: "Nike",
      price: "$100",
    },
  ]);
  return (
    <FlatList
      data={cardData}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={{
            backgroundColor: "grey",
            justifyContent: "center",
            alignItems: "center",
            width: "90%",
            height: 300,
            borderRadius: 10,
            marginTop: 20,
          }}
          onPress={() => navigation.navigate("ListDetails", item)}
        >
          <Image
            source={item.img}
            style={{ resizeMode: "cover", width: "90%", height: 250 }}
          />
          <Text>{item.name}</Text>
          <Text>{item.price}</Text>
        </TouchableOpacity>
      )}
    />
  );
}
