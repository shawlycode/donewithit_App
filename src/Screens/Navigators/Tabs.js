import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "../HomeScreen";
import { MaterialIcons } from "@expo/vector-icons";

import COLORS from "../../Components/Const/Colors";
import Feeds from "../Feeds";
import Sell from "../Sell";
import Account from "../Account";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Feeds"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="dynamic-feed"
              size={38}
              color={focused ? "#ff006e" : "#1b3a4b"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Sell"
        component={Sell}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="add-box"
              size={38}
              color={focused ? "#ff006e" : "#1b3a4b"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="switch-account"
              size={38}
              color={focused ? "#ff006e" : "#1b3a4b"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
