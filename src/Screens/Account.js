import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { FontAwesome5, MaterialIcons, AntDesign } from "@expo/vector-icons";

const Feeds = ({ navigation }) => {
  const account = [
    {
      name: "orlando",
      Img: require("../../assets/profile.jpeg"),
      listings: "4 listings",
      location: "Accra,Lapaz",
      phone: "+233 0500005003",
      email: "orlandoshawly@gmail.com",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.profileCon}>
        <Image
          source={require("../../assets/profile.jpeg")}
          style={{
            width: 80,
            height: 80,
            borderRadius: 40,
            resizeMode: "stretch",
            marginVertical: 10,
            marginHorizontal: 20,
          }}
        />
        <View style={{ justifyContent: "center", alignItems: "flex-start" }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Orlando</Text>
          <Text style={{ fontSize: 14, fontWeight: "bold", color: "blue" }}>
            Orlando@gmail.com
          </Text>
        </View>
      </View>
      <View style={styles.listingCon}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <FontAwesome5
            name="list"
            size={30}
            color="tomato"
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginHorizontal: 10,
              marginVertical: 15,
            }}
          />
          <Text
            style={{
              marginLeft: 20,
              fontSize: 24,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            My Listings
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("ListingPage")}
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 10,
            backgroundColor: "#fff",
            width: 50,
            height: 50,
            borderRadius: 25,
            marginVertical: 10,
          }}
        >
          <MaterialIcons name="keyboard-arrow-right" size={30} color="tomato" />
        </TouchableOpacity>
      </View>
      <View style={styles.listingCon}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <AntDesign
            name="message1"
            size={40}
            color="tomato"
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginHorizontal: 10,
              marginVertical: 15,
            }}
          />
          <Text
            style={{
              marginLeft: 20,
              fontSize: 24,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            My Messages
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("Messages")}
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 10,
            backgroundColor: "#fff",
            width: 50,
            height: 50,
            borderRadius: 25,
            marginVertical: 10,
          }}
        >
          <MaterialIcons name="keyboard-arrow-right" size={30} color="tomato" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("signin")}
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "tomato",
          width: "90%",
          height: 50,
          borderRadius: 10,
          marginHorizontal: 20,
        }}
      >
        <AntDesign name="logout" size={34} color="yellow" />
        <Text
          style={{
            fontSize: 26,
            color: "yellow",
            fontWeight: "bold",
            marginLeft: 10,
          }}
        >
          Log Out
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Feeds;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileCon: {
    marginTop: 50,
    marginBottom: 30,
    marginHorizontal: 20,
    borderRadius: 10,
    flexDirection: "row",
    width: "90%",
    height: 100,
    backgroundColor: "#EDE0FC",
  },
  listingCon: {
    width: "90%",
    height: 80,
    borderRadius: 10,
    marginBottom: 40,
    marginHorizontal: 20,
    flexDirection: "row",
    backgroundColor: "#EDE0FC",
    justifyContent: "space-between",
  },
});
