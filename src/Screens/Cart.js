import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLOURS, Items } from "../global/Database";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FlashMessage, { showMessage } from "react-native-flash-message";
import Counter from "./counter/Counter";
import CartItems from "./CartItems";

const Cart = ({ navigation, route }) => {
  const [product, setProduct] = useState();
  const [total, setTotal] = useState(null);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getDataFromDB();
    });
    return unsubscribe;
  }, [navigation]);

  //get data from local DB by ID
  const getDataFromDB = async () => {
    let items = await AsyncStorage.getItem("cartItems");
    items = JSON.parse(items);
    let productData = [];
    if (items) {
      Items.forEach((data) => {
        if (items.includes(data.id)) {
          productData.push(data);
          return;
        }
      });
      setProduct(productData);
      getTotal(productData);
    } else {
      setProduct(false);
      getTotal(false);
    }
  };

  //get total price of all items in the cart
  const getTotal = (productData) => {
    let total = 0;
    for (let index = 0; index < productData.length; index++) {
      let productPrice = productData[index].productPrice;
      total = total + productPrice;
    }
    setTotal(total);
  };

  //checkout

  const checkOut = async () => {
    try {
      await AsyncStorage.removeItem("cartItems");
    } catch (error) {
      return error;
    }

    navigation.navigate("homeScreen");
  };

  const renderProducts = (data, index) => {
    return (
      <CartItems data={data} index={index} getDataFromDB={getDataFromDB} />
    );
  };

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: COLOURS.backgroundDark,
        position: "relative",
      }}
    >
      <ScrollView>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            paddingTop: 30,
            paddingHorizontal: 16,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons
              name="chevron-left"
              style={{
                fontSize: 30,
                color: COLOURS.lemonGreen,
                padding: 12,
              }}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 24,
              color: COLOURS.lemonGreen,
              fontWeight: "400",
            }}
          >
            Order Details
          </Text>
          <View></View>
        </View>
        <Text
          style={{
            fontSize: 20,
            color: COLOURS.lemonGreen,
            fontWeight: "500",
            letterSpacing: 1,
            paddingTop: 20,
            paddingLeft: 16,
            marginBottom: 15,
          }}
        >
          My Cart
        </Text>
        <View style={{ paddingHorizontal: 16 }}>
          {product ? product.map(renderProducts) : null}
        </View>
        <View>
          <View
            style={{
              paddingHorizontal: 16,
              marginVertical: 10,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: COLOURS.lemonGreen,
                fontWeight: "500",
                letterSpacing: 1,
                marginBottom: 20,
              }}
            >
              Delivery Location
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
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
                    color: COLOURS.blue,
                    backgroundColor: COLOURS.lemonGreen,
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 12,
                    borderRadius: 10,
                    marginRight: 18,
                  }}
                >
                  <MaterialCommunityIcons
                    name="truck-delivery-outline"
                    style={{
                      fontSize: 30,
                      color: COLOURS.blue,
                    }}
                  />
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      color: COLOURS.lemonGreen,
                      fontWeight: "500",
                    }}
                  >
                    {Items.location}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: COLOURS.lemonGreen,
                      fontWeight: "bold",
                      lineHeight: 20,
                      opacity: 0.5,
                    }}
                  >
                    0162, Tbilisi
                  </Text>
                </View>
              </View>
              <MaterialCommunityIcons
                name="chevron-right"
                style={{ fontSize: 30, color: COLOURS.lemonGreen }}
              />
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 16,
              marginVertical: 10,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: COLOURS.lemonGreen,
                fontWeight: "500",
                letterSpacing: 1,
                marginBottom: 20,
              }}
            >
              Select Payment Method
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
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
                    color: COLOURS.blue,
                    backgroundColor: COLOURS.lemonGreen,
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 12,
                    borderRadius: 10,
                    marginRight: 18,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "900",
                      color: COLOURS.blue,
                      letterSpacing: 1,
                    }}
                  >
                    VISA
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      color: COLOURS.lemonGreen,
                      fontWeight: "500",
                    }}
                  >
                    Visa Classic
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: COLOURS.lemonGreen,
                      fontWeight: "400",
                      lineHeight: 20,
                      opacity: 0.5,
                    }}
                  >
                    ****-9092
                  </Text>
                </View>
              </View>
              <MaterialCommunityIcons
                name="chevron-right"
                style={{ fontSize: 30, color: COLOURS.lemonGreen }}
              />
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 16,
              marginTop: 40,
              marginBottom: 80,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: COLOURS.lemonGreen,
                fontWeight: "500",
                letterSpacing: 1,
                marginBottom: 20,
              }}
            >
              Order Info
            </Text>
            {/* <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                marginBottom: 8,
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 18,
                                    fontWeight: "400",
                                    maxWidth: "80%",
                                    color: COLOURS.lemonGreen,
                                    opacity: 0.5,
                                }}
                            >
                                Subtotal
                            </Text>
                            <Text
                                style={{
                                    fontSize: 18,
                                    fontWeight: "400",
                                    color: COLOURS.lemonGreen,
                                    opacity: 0.8,
                                }}
                            >
                                &#x20B5;{total}.00
                            </Text>
                        </View> */}
            {/* <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                marginBottom: 22,
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 18,
                                    fontWeight: "400",
                                    maxWidth: "80%",
                                    color: COLOURS.lemonGreen,
                                    opacity: 0.5,
                                }}
                            >
                                Shipping Tax
                            </Text>
                            <Text
                                style={{
                                    fontSize: 18,
                                    fontWeight: "400",
                                    color: COLOURS.lemonGreen,
                                    opacity: 0.8,
                                }}
                            >
                                &#x20B5;{0}.00
                            </Text>
                        </View> */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "400",
                  maxWidth: "80%",
                  color: COLOURS.lemonGreen,
                  opacity: 0.5,
                }}
              >
                Total
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "500",
                  color: COLOURS.lemonGreen,
                }}
              >
                &#x20B5;{total}.00
              </Text>
            </View>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: 100,
                height: 40,
                marginTop: 30,
                marginLeft: 20,
                borderRadius: 10,
                backgroundColor: "pink",
              }}
              onPress={() => navigation.navigate("homeScreen")}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>Add More</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          position: "absolute",
          bottom: 10,
          height: "8%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() =>
            // total != 0 ? checkOut() : null,
            navigation.navigate("payment", "homeScreen")
          }
          style={{
            width: "86%",
            height: "90%",
            backgroundColor: COLOURS.blue,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "500",
              letterSpacing: 1,
              color: COLOURS.lemonGreen,
              textTransform: "uppercase",
            }}
          >
            CHECKOUT (&#x20B5;{total} )
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;
