import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../HomeScreen";
import SignInScreen from "../AuthScreens/SignInScreen";
import RegisterScreen from "../AuthScreens/RegisterScreen";
import Card from "../Card";
import CategoryScreen from "../CategoryScreen";
import CardDetailsScreen from "../CardDetailsScreen";
import CategoryModal from "../../Components/Const/CategoryModal";
import Tabs from "../Navigators/Tabs";

const Stack = createStackNavigator();

const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="home" component={Tabs} />
        <Stack.Screen name="signin" component={SignInScreen} />
        <Stack.Screen name="ListDetails" component={CategoryScreen} />
        <Stack.Screen name="cardDetails" component={CardDetailsScreen} />
        <Stack.Screen name="CategoryModal" component={CategoryModal} />

        <Stack.Screen
          name="register"
          component={RegisterScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
