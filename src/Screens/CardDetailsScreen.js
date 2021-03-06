import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  Animated,
  ImageBackground,
} from "react-native";
import { COLOURS, Items } from "../global/Database";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showMessage, hideMessage } from "react-native-flash-message";
import { FontAwesome } from "@expo/vector-icons";
import Maps from "../Components/Const/Maps";

const CardDetailsScreen = ({ route, navigation }) => {
  const { productID } = route.params;

  const [product, setProduct] = useState({});

  const width = Dimensions.get("window").width;

  const scrollX = new Animated.Value(0);

  let position = Animated.divide(scrollX, width);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);

  //get product data by productID

  const getDataFromDB = async () => {
    for (let index = 0; index < Items.length; index++) {
      if (Items[index].id == productID) {
        await setProduct(Items[index]);
        return;
      }
    }
  };

  //add to cart

  const addToCart = async (id) => {
    let itemArray = await AsyncStorage.getItem("cartItems");
    itemArray = JSON.parse(itemArray);
    if (itemArray) {
      let array = itemArray;
      array.push(id);

      try {
        await AsyncStorage.setItem("cartItems", JSON.stringify(array));
        showMessage({
          message: "Item Added Successfully to cart",
          fontSize: 40,

          // animated: "true",
          backgroundColor: COLOURS.backgroundDark,
          animationDuration: 500,
        });
        navigation.navigate("Home");
      } catch (error) {
        return error;
      }
    } else {
      let array = [];
      array.push(id);
      try {
        await AsyncStorage.setItem("cartItems", JSON.stringify(array));
        showMessage.show("", showMessage.SHORT);
        navigation.navigate("Home");
      } catch (error) {
        return error;
      }
    }
  };

  //product horizontal scroll product card
  const renderProduct = ({ item, index }) => {
    return (
      <View
        style={{
          width: width,
          height: 300,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flex: 1,
            width: "100%",
            height: "100%",
            borderBottomColor: COLOURS.lemonGreen,
            borderBottomEndRadius: 30,
            borderBottomLeftRadius: 30,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack("Home")}
            style={{ position: "absolute", top: 40, bottom: 0, left: -810 }}
          >
            <FontAwesome
              name="arrow-circle-left"
              size={40}
              color={COLOURS.lemonGreen}
            />
          </TouchableOpacity>

          <Image
            source={item}
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "cover",
              padding: 20,
              borderBottomEndRadius: 20,
              borderBottomLeftRadius: 20,
            }}
          />
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "#0C004D",
        position: "relative",
      }}
    >
      <StatusBar
        backgroundColor={COLOURS.backgroundLight}
        barStyle="dark-content"
      />
      <ScrollView>
        <View
          style={{
            width: "100%",
            backgroundColor: COLOURS.backgroundDark,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 4,
          }}
        >
          <FlatList
            data={product.productImageList ? product.productImageList : null}
            horizontal
            renderItem={renderProduct}
            showsHorizontalScrollIndicator={false}
            decelerationRate={0.8}
            snapToInterval={width}
            bounces={false}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false }
            )}
          />
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 16,
              marginTop: 20,
            }}
          >
            {product.productImageList
              ? product.productImageList.map((data, index) => {
                  let opacity = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [0.2, 1, 0.2],
                    extrapolate: "clamp",
                  });
                  return (
                    <Animated.View
                      key={index}
                      style={{
                        width: 15,
                        height: 15,
                        backgroundColor: COLOURS.lemonGreen,
                        opacity,
                        marginHorizontal: 2,
                        borderRadius: 10,
                      }}
                    ></Animated.View>
                  );
                })
              : null}
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 16,
            marginTop: 6,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 14,
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: "500",
                maxWidth: "85%",
                color: COLOURS.lemonGreen,
                marginBottom: 4,
              }}
            >
              &#x20B5;{product.productPrice}.00
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginVertical: 4,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: "600",
                letterSpacing: 0.5,
                marginVertical: 4,
                color: COLOURS.lemonGreen,
                maxWidth: "84%",
              }}
            >
              {product.productName}
            </Text>
            <Ionicons
              name="link-outline"
              style={{
                fontSize: 24,
                color: COLOURS.lemonGreen,
                backgroundColor: COLOURS.lemonGreen + 10,
                padding: 8,
                borderRadius: 100,
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 18,
              color: COLOURS.lemonGreen,
              fontWeight: "400",
              letterSpacing: 1,
              opacity: 0.5,
              lineHeight: 20,
              maxWidth: "85%",
              maxHeight: 44,
              marginBottom: 18,
              fontWeight: "bold",
            }}
          >
            {product.description}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 14,
              borderBottomColor: COLOURS.backgroundLight,
              borderBottomWidth: 1,
              paddingBottom: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                width: "80%",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  color: COLOURS.lemonGreen,
                  backgroundColor: COLOURS.lemonGreen,
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 12,
                  borderRadius: 100,
                  marginRight: 10,
                }}
              >
                <Entypo
                  name="location-pin"
                  style={{
                    fontSize: 16,
                    color: COLOURS.blue,
                  }}
                />
              </View>
              <Text style={{ color: COLOURS.lemonGreen, fontSize: 18 }}>
                {product.location}
              </Text>
            </View>
            <Entypo
              name="chevron-right"
              style={{
                fontSize: 22,
                color: COLOURS.lemonGreen,
              }}
            />
          </View>
          <View>
            <Maps />
          </View>
          {/* <View
            style={{
              paddingHorizontal: 16,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "500",
                maxWidth: "85%",
                color: COLOURS.lemonGreen,
                marginBottom: 4,
              }}
            >
              &#x20B5;{product.productPrice}.00
            </Text>
            {/* <Text style={{ color: COLOURS.lemonGreen }}>
              &#x20B5;{product.productPrice}
            </Text> */}
          {/* </View> } */}
        </View>
      </ScrollView>

      <View
        style={{
          position: "absolute",
          bottom: 10,
          height: "8%",
          width: "100%",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={{
            width: "40%",
            height: "70%",
            backgroundColor: COLOURS.lemonGreen,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("Messages")}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              letterSpacing: 1,
              color: COLOURS.blue,
              textTransform: "uppercase",
            }}
          >
            make Offer
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => (
            product.isAvailable ? addToCart(product.id) : null,
            navigation.navigate("homeScreen")
          )}
          style={{
            width: "40%",
            height: "70%",
            backgroundColor: COLOURS.lemonGreen,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              letterSpacing: 1,
              color: COLOURS.blue,
              textTransform: "uppercase",
            }}
          >
            Add to card
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CardDetailsScreen;
