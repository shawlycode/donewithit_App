import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import SearchComponent from "../Components/Const/SearchComponent";
import { COLOURS, Items } from '../global/Database'
import { Badge } from "react-native-elements";
import { FontAwesome } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [accessory, setAccessory] = useState([]);

  //get called on screen loads
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);

  //get data from DB

  const getDataFromDB = () => {
    let productList = [];
    let accessoryList = [];
    for (let index = 0; index < Items.length; index++) {
      if (Items[index].category == "product") {
        productList.push(Items[index]);
      } else if (Items[index].category == "accessory") {
        accessoryList.push(Items[index]);
      }
    }

    setProducts(productList);
    setAccessory(accessoryList);
  };
  function Card({ item, index }) {
    return (
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={3}
          data={Items}
          renderItem={({ item, index }) => (
            <View
              style={{
                width: 134.5,
                justifyContent: "center",
                borderWidth: 2,
                borderColor: "#41D689",
                margin: 2,
                flex: 1
              }}
              keyExtractor={item => item.id}
            >
              <TouchableOpacity
                key={index}
                onPress={() =>
                  navigation.navigate("cardDetails", { productID: item.id })
                }
              >
                <Image source={item.productImage} style={styles.img} />
              </TouchableOpacity>
            </View>
          )
          }
        />
      </View>
    );
  }

  function renderHeader() {
    return (
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <View></View>
        <TouchableOpacity style={{ paddingRight: 15, paddingBottom: 10 }} onPress={() => navigation.navigate('cart')}>
          <View style={{ position: "absolute", left: 23, bottom: 30 }}>
            <Badge value="3" status="error" />
          </View>

          <FontAwesome name="shopping-basket" size={26} color={COLOURS.lemonGreen} />
        </TouchableOpacity>
      </View>
    )
  }

  return (

    <View style={styles.container}>
      {renderHeader()}
      {/* <SearchComponent /> */}
      <Card />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {

    flex: 1,
    paddingTop: 50,
    backgroundColor: "#0C004D",
  },
  img: {
    width: "100%",
    height: 150,
    resizeMode: "cover",

  },

});
