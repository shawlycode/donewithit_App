import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Benz car",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Nikon Camera",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Rolex Watch",
  },
  {
    id: "58694a0f-3da1-471f-145571e29d72",
    title: "Nike Sneakers",
  },
  {
    id: "58694a0f-3d1-471f-bd96-145571e29d72",
    title: "Black Jacket",
  },
  {
    id: "58694a0f-3da1-4f-bd96-145571e29d72",
    title: "Xioami Electric Scooter",
  },
];

const Item = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item]}>
    <Text style={[styles.title]}>{item.title}</Text>
  </TouchableOpacity>
);

const ListingPage = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    return <Item item={item} onPress={() => setSelectedId(item.id)} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialIcons
          name="arrow-back-ios"
          size={30}
          color="tomato"
          style={{ marginLeft: 30, marginBottom: 20 }}
        />
      </TouchableOpacity>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 30,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: "#EDE0FC",
    borderRadius: 5,
  },
  title: {
    fontSize: 32,
  },
});

export default ListingPage;
