import React from "react";
import { Paystack } from "react-native-paystack-webview";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

const Payment = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Paystack
        paystackKey="pk_test_d39a127e8ed71cad242e85c10aa3b5234aa69e56"
        amount={"200"}
        currency="GHS"
        channel="card"
        billingEmail="paystackwebview@something.com"
        activityIndicatorColor="tomato"
        onCancel={(e) => {
          // handle response here
        }}
        onSuccess={(res) => {
          // handle response here
          // navigation.navigate()
        }}
        autoStart={true}
      />
    </View>
  );
};
export default Payment;
