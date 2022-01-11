import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import Maps from "../Components/Const/Maps";
import cardData from "../Screens/HomeScreen";

const CardDetailsScreen = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgCon}>
        <ImageBackground
          source={route.params.img}
          style={{ width: "100%", height: 300 }}
        />
        <MaterialIcons
          name="cancel"
          size={40}
          color="red"
          style={{ position: "absolute", top: 35, left: 25 }}
          onPress={() => navigation.navigate("home")}
        />
      </View>
      <View style={{ flex: 2, marginHorizontal: 20, marginTop: 30 }}>
        <Text style={styles.detailsText}>{route.params.name}</Text>
        <Text style={{ fontSize: 18 }}>{route.params.about}</Text>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <View
            style={{
              marginVertical: 5,
              justifyContent: "center",
              alignItems: "center",
              width: 80,
              height: 40,
              backgroundColor: "red",
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
            }}
          >
            <Text style={{ color: "yellow", fontWeight: "bold", fontSize: 20 }}>
              {route.params.price}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={{
                marginVertical: 5,
                justifyContent: "center",
                alignItems: "center",
                width: 50,
                height: 40,
                backgroundColor: "tomato",
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
              }}
            >
              <Text style={{ fontSize: 22, fontWeight: "bold", color: "#fff" }}>
                -
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                marginVertical: 5,
                justifyContent: "center",
                alignItems: "center",
                width: 50,
                height: 40,
                backgroundColor: "tomato",
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
              }}
            >
              <Text style={{ fontSize: 22, fontWeight: "bold", color: "#fff" }}>
                +
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              marginVertical: 5,
              justifyContent: "center",
              alignItems: "center",
              width: 120,
              height: 40,
              backgroundColor: "red",
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
            }}
            onPress={() => navigation.navigate("CheckOut")}
          >
            <Text style={{ color: "yellow", fontWeight: "bold", fontSize: 24 }}>
              Buy
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.profile}>
        <View>
          <Image
            source={require("../../assets/paul.jpg")}
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              marginHorizontal: 20,
              marginVertical: 20,
            }}
          />
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Orlando</Text>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#f4978e" }}>
            4 listings
          </Text>
        </View>
      </View>

      <View style={styles.contactSeller}>
        <TouchableOpacity
          style={{
            width: "90%",
            height: 50,
            backgroundColor: "#f46036",
            borderRadius: 10,
            marginLeft: 20,
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 20,
          }}
        >
          <Text style={{ fontSize: 28, fontWeight: "bold", color: "#fff" }}>
            Contact Seller
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.map}>
        <Maps />
      </View>
    </View>
  );
};

export default CardDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgCon: {
    flex: 4,
  },
  img: {
    width: "100%",
    height: 200,
  },
  profile: {
    flex: 1,
    flexDirection: "row",
  },
  contactSeller: {
    flex: 1,
  },
  map: {
    flex: 4,
    marginTop: 20,
  },
  detailsText: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
