import React, { useState } from "react";

import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Modal,
  Alert,
  Pressable,
  FlatList,
  Image,
} from "react-native";

import ImagePicker from "../Components/Const/ImagePicker";
import { showMessage, hideMessage } from "react-native-flash-message";
import { COLOURS } from "../global/Database";

export default function Sell({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  const [categoryList, setCategoryList] = useState([
    {
      id: "883228hi",
      type: "Cars",
      image: require("../../assets/troy.jpg"),
      about: "this is the best so far in the market",
      price: "$200",
      review: "243 reviews",
      ratings: "4.5 stars",
      Image: require("../../assets/sport-car.png"),
    },
    {
      id: "883hi",
      type: "Camera's",
      image: require("../../assets/troy.jpg"),
      about: "this is the best so far in the market",
      price: "$200",
      review: "243 reviews",
      ratings: "4.5 stars",
      Image: require("../../assets/camera.png"),
    },
    {
      id: "8838hi",
      type: "Clothes",
      image: require("../../assets/troy.jpg"),
      about: "this is the best so far in the market",
      price: "$200",
      review: "243 reviews",
      ratings: "4.5 stars",
      Image: require("../../assets/fashion-design.png"),

    },
    {
      id: "883228h",
      type: "Toys",
      image: require("../../assets/troy.jpg"),
      about: "this is the best so far in the market",
      price: "$200",
      review: "243 reviews",
      ratings: "4.5 stars",
      Image: require("../../assets/toys.png"),

    },
    {
      id: "8832hi",
      type: "Electronics",
      image: require("../../assets/jacket.jpg"),
      about: "this is the best so far in the market",
      price: "$200",
      review: "243 reviews",
      ratings: "4.5 stars",
      Image: require("../../assets/electronics.png"),
    },
    {
      id: "8832hi",
      type: "Phones",
      image: require("../../assets/jacket.jpg"),
      about: "this is the best so far in the market",
      price: "$200",
      review: "243 reviews",
      ratings: "4.5 stars",
      Image: require("../../assets/iphone.png"),
    },
    {
      id: "8832hi",
      type: "Foot Wears",
      image: require("../../assets/jacket.jpg"),
      about: "this is the best so far in the market",
      price: "$200",
      review: "243 reviews",
      ratings: "4.5 stars",
      Image: require("../../assets/shoes.png"),
    },
    {
      id: "8832hi",
      type: "Jewelery",
      image: require("../../assets/jacket.jpg"),
      about: "this is the best so far in the market",
      price: "$200",
      review: "243 reviews",
      ratings: "4.5 stars",
      Image: require("../../assets/treasure.png"),
    },
    {
      id: "8832hi",
      type: "Accessories",
      image: require("../../assets/jacket.jpg"),
      about: "this is the best so far in the market",
      price: "$200",
      review: "243 reviews",
      ratings: "4.5 stars",
      Image: require("../../assets/wireless-headphones.png"),
    },
    {
      id: "86665832hi",
      type: "Foot Wears",
      image: require("../../assets/jacket.jpg"),
      about: "this is the best so far in the market",
      price: "$200",
      review: "243 reviews",
      ratings: "4.5 stars",
      Image: require("../../assets/shoes.png"),
    },
    {
      id: "883hi",
      type: "Jewelery",
      image: require("../../assets/jacket.jpg"),
      about: "this is the best so far in the market",
      price: "$200",
      review: "243 reviews",
      ratings: "4.5 stars",
      Image: require("../../assets/treasure.png"),
    },
    {
      id: "8832hidgfdg",
      type: "Accessories",
      image: require("../../assets/jacket.jpg"),
      about: "this is the best so far in the market",
      price: "$200",
      review: "243 reviews",
      ratings: "4.5 stars",
      Image: require("../../assets/wireless-headphones.png"),
    },
  ]);
  return (
    <SafeAreaView style={{ backgroundColor: COLOURS.backgroundDark, flex: 1 }}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        onBackdropPress={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={{
                width: "100%",
                justifyContent: "space-evenly",
                marginTop: 20,
              }}
            >
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={false}
                numColumns={3}
                data={categoryList}
                renderItem={({ item }) => (
                  <TouchableOpacity style={styles.modalCon}>
                    <Image
                      source={item.Image}
                      style={{ width: 80, height: 80, resizeMode: "contain" }}
                    />
                    <Text style={styles.categoryText}>{item.type}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Ionicons
                name="close-circle-sharp"
                size={30}
                color="red"
                style={{ position: "absolute", left: 175, top: -540 }}
              />
            </Pressable>
          </View>
        </View>
      </Modal>
      <View>
        <Text
          style={{
            fontSize: 28,
            fontWeight: "bold",
            marginLeft: 20,
            marginTop: 20,
            color: COLOURS.lemonGreen
          }}
        >
          New Listing
        </Text>
      </View>

      <View style={styles.imgCon}>
        <ImagePicker />
      </View>

      <View style={{ marginTop: 30, marginLeft: 20, flex: 5 }}>
        <View style={styles.formCon}>
          <Ionicons name="brush-outline" size={30} color="tomato" />
          <TextInput placeholder="Title :" style={styles.placeholder} />
        </View>
        <View style={styles.formCon}>
          <FontAwesome name="dollar" size={30} color="tomato" />
          <TextInput
            placeholder="Price :"
            style={styles.placeholder}
            keyboardType={"numeric"}
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.formCon}
            onPress={() => setModalVisible(true)}
          >
            <Ionicons name="options" size={30} color="tomato" />
          </TouchableOpacity>
          <TextInput placeholder="Category :" style={styles.placeholder} />
        </View>

        <View style={styles.formCon}>
          <MaterialIcons name="description" size={30} color="tomato" />
          <TextInput placeholder="Description :" style={styles.placeholder} />
        </View>
        <View style={{ flex: 2 }}>
          <TouchableOpacity
            style={styles.postBtn}
            onPress={() => {
              showMessage({
                message: "Listing Successful",
                description: "Your add has been posted successfully",
                type: "success",
                backgroundColor: "tomato",
                color: "#fff",
                hideStatusBar: true,
                animated: true,
                animationDuration: 1500,
                duration: 3000,
              });
            }}
          >
            <Text style={styles.postText}>Post</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.CancelBtn}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Text style={styles.postText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imgCon: {
    flex: 0.5,
    flexDirection: "row",
    backgroundColor: COLOURS.lemonGreen,
    width: 60,
    height: 60,
    borderRadius: 5,
    marginLeft: 20,
    marginTop: 28,
    alignItems: "center",
  },
  placeholder: { flex: 1, fontSize: 24, marginLeft: 10 },
  formCon: {
    flexDirection: "row",
    backgroundColor: COLOURS.lemonGreen,
    height: 50,
    width: "90%",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    marginBottom: 20,
  },
  modalView: {
    marginTop: 25,
    position: "absolute",
    top: 10,
    backgroundColor: COLOURS.backgroundDark,
    borderRadius: 15,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    width: "100%",
    height: "65%",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalCon: {
    backgroundColor: "green",
    borderWidth: 0.6,
    borderColor: COLOURS.lemonGreen,
    margin: 4,
    width: 120,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 3,
    borderRadius: 10
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  postBtn: {
    marginTop: 30,
    backgroundColor: "#e71d36",
    width: "90%",
    height: 60,
    borderRadius: 10,
  },
  postText: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    fontSize: 24,
    fontWeight: "bold",
    color: COLOURS.lemonGreen,
  },
  CancelBtn: {
    marginTop: 30,
    backgroundColor: "#adb5bd",
    width: "90%",
    height: 60,
    borderRadius: 10,
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
    color: COLOURS.lemonGreen,
    fontWeight: "bold",
  },
});
