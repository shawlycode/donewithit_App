import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Counter from "./counter/Counter";
import { COLOURS, Items } from "../global/Database";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const CartItems = ({ data, index, getDataFromDB }) => {
  const [totalPrice, setTotalPrice] = useState([]);
  const [productPrice, setProductPrice] = useState(data.productPrice);
  const [numberOfItems, setNumberOfItems] = useState(1);

  const navigation = useNavigation();

  useEffect(() => {
    setProductPrice(data.productPrice * numberOfItems);
  }, [numberOfItems]);

  //remove data from Cart

  const removeItemFromCart = async (id) => {
    let itemArray = await AsyncStorage.getItem("cartItems");
    itemArray = JSON.parse(itemArray);
    if (itemArray) {
      let array = itemArray;
      for (let index = 0; index < array.length; index++) {
        if (array[index] == id) {
          array.splice(index, 1);
        }

        await AsyncStorage.setItem("cartItems", JSON.stringify(array));
        getDataFromDB();
      }
    }
  };

  return (
    <TouchableOpacity
      key={data.key}
      onPress={() => navigation.navigate("ProductInfo", { productID: data.id })}
      style={{
        width: "100%",
        height: 100,
        marginVertical: 6,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: "30%",
          height: 100,
          padding: 14,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: COLOURS.lemonGreen,
          borderRadius: 10,
          marginRight: 22,
        }}
      >
        <Image
          source={data.productImage}
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "cover",
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          height: "100%",
          justifyContent: "space-around",
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 18,
              maxWidth: "100%",
              color: COLOURS.lemonGreen,
              fontWeight: "600",
              letterSpacing: 1,
            }}
          >
            {data.productName}
          </Text>
          <View
            style={{
              marginTop: 4,
              flexDirection: "row",
              alignItems: "center",
              opacity: 0.6,
            }}
          >
            <Text
              style={{
                color: COLOURS.lemonGreen,
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              &#x20B5; {productPrice}.00
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* increase cart qty btn */}
          <Counter
            numberOfItems={numberOfItems}
            setNumberOfItems={setNumberOfItems}
          />
          {/* increase cart qty btn end */}

          {/* delete cart section */}
          <View>
            <TouchableOpacity onPress={() => removeItemFromCart(data.id)}>
              <MaterialCommunityIcons
                name="delete-outline"
                style={{
                  fontSize: 30,
                  color: COLOURS.blue,
                  backgroundColor: "pink",
                  padding: 5,
                  width: 40,
                  height: 40,
                }}
              />
            </TouchableOpacity>
          </View>
          {/* delete cart end */}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CartItems;

const styles = StyleSheet.create({});
