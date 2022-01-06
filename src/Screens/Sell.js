import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";

import ImagePicker from "../Components/Const/ImagePicker";

const Sell = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: "grey", flex: 1 }}>
      <View>
        <Text
          style={{
            fontSize: 28,
            fontWeight: "bold",
            marginLeft: 20,
            marginTop: 20,
          }}
        >
          New Listing
        </Text>
      </View>
      <TouchableOpacity style={styles.imgCon}>
        <View>
          <ImagePicker />
        </View>
      </TouchableOpacity>
      <View style={{ marginTop: 30, marginLeft: 20, flex: 1 }}>
        <View style={styles.formCon}>
          <Ionicons name="brush-outline" size={30} color="black" />
          <TextInput placeholder="Title :" style={styles.placeholder} />
        </View>
        <View style={styles.formCon}>
          <FontAwesome name="dollar" size={30} color="black" />
          <TextInput
            placeholder="Price :"
            style={styles.placeholder}
            keyboardType={"numeric"}
          />
        </View>
        <TouchableOpacity
          style={styles.formCon}
          onPress={() => navigation.navigate("CategoryModal")}
        >
          <MaterialIcons name="vertical-split" size={30} color="black" />
          <Text style={styles.placeholder}> Select Category</Text>
        </TouchableOpacity>
        <View style={styles.formCon}>
          <MaterialIcons name="description" size={30} color="black" />
          <TextInput placeholder="Description :" style={styles.placeholder} />
        </View>
        <TouchableOpacity style={styles.postBtn}>
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
    </SafeAreaView>
  );
};

export default Sell;

const styles = StyleSheet.create({
  imgCon: {
    backgroundColor: "#e9ecef",
    width: 100,
    height: 100,
    borderRadius: 10,
    marginLeft: 20,
    marginTop: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  placeholder: { flex: 1, fontSize: 24, marginLeft: 10 },
  formCon: {
    flexDirection: "row",
    backgroundColor: "#e9ecee",
    height: 50,
    width: "90%",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    marginBottom: 20,
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
    color: "#fff",
  },
  CancelBtn: {
    marginTop: 30,
    backgroundColor: "#adb5bd",
    width: "90%",
    height: 60,
    borderRadius: 10,
  },
});
