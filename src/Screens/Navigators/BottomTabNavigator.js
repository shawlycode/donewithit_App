import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";
import Feed from "../BottomTabs/Feed";
import Sell from "../BottomTabs/Sell";
import Account from "../BottomTabs/Account";

import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="feed"
        component={Feed}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="dynamic-feed" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="sell"
        component={Sell}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="attach-money" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen name="account " component={Account} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({});
