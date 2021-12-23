import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../HomeScreen";
import Categories from "../Categories";
import SignInScreen from "../SignInScreen";

const Stack = createStackNavigator();

const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="categories" component={Categories} />
        <Stack.Screen name="signin" component={SignInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
