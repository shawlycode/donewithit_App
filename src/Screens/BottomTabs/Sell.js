import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const Sell = () => {
  return (
    <View style={styles.container}>
      <View style={styles.upLoadImg}>
        <Text style={styles.text}>Upload Img</Text>
        <Text
          style={{ fontSize: 20, paddingHorizontal: 20, fontWeight: "bold" }}
        >
          +
        </Text>
        <View style={{ backgroundColor: "red" }}></View>
      </View>
      <View
        style={{
          flex: 4,
          marginHorizontal: 20,
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            marginVertical: 20,
            backgroundColor: "grey",
            height: 40,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              paddingHorizontal: 10,
              marginTop: 10,
              fontSize: 16,
            }}
          >
            Title:
          </Text>
          <TextInput placeholder="e.g red jacket" />
        </View>
        <View style={{ flexDirection: "row", marginVertical: 20 }}>
          <Text>Price:</Text>
          <TextInput placeholder="e.g red jacket" />
        </View>
        <View style={{ flexDirection: "row", marginVertical: 20 }}>
          <Text>Details:</Text>
          <TextInput placeholder="e.g red jacket" />
        </View>
        <View style={{ flexDirection: "row", marginVertical: 20 }}>
          <Text>Contact:</Text>
          <TextInput placeholder="e.g +233 54010010" />
        </View>
        <View style={{ flexDirection: "row", marginVertical: 20 }}>
          <Text>Location:</Text>
          <TextInput placeholder="e.g red jacket" />
        </View>
      </View>
    </View>
  );
};

export default Sell;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upLoadImg: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: 30,
    marginVertical: 20,
  },
  text: {
    backgroundColor: "grey",
    borderRadius: 10,
    width: 100,
    height: 40,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
