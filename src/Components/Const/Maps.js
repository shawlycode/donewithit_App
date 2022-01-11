import * as React from "react";
import MapView from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Maps() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
      <View style={styles.mapZoomBtn}>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "tomato",
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              width: 35,
              height: 35,
              fontSize: 30,
              fontWeight: "bold",
              color: "yellow",
            }}
          >
            -
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "tomato",

            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              width: 35,
              height: 35,
              fontSize: 30,
              fontWeight: "bold",
              color: "yellow",
            }}
          >
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    flex: 1,
    bottom: 0,
    top: 0,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  mapZoomBtn: {
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    position: "absolute",
    top: 50,
    right: 20,
    width: 35,
    height: 35,
  },
  // mapZoomBtn1: {
  //   justifyContent: "center",
  //   alignItems: "center",
  //   zIndex: 1,
  //   position: "absolute",
  //   top: 0.5,
  //   right: 20,
  //   backgroundColor: "tomato",
  //   width: 35,
  //   height: 35,
  // },
  // zoom: {
  //   backgroundColor: "tomato",
  //   width: 50,
  //   height: 50,
  //   borderTopRightRadius: 10,
  //   borderTopLeftRadius: 10,
  // },
});
