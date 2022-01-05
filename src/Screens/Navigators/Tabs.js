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
    <Tab.Navigator screenOptions={{}}>
      <Tab.Screen
        name="Feeds"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons name="dynamic-feed" size={30} />
          ),
        }}
      />
      <Tab.Screen name="Sell" component={Sell} />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="switch-account"
              size={30}
              color={focused ? COLORS.primary : COLORS.secondary}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
