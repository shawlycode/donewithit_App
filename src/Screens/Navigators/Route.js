import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../HomeScreen";
import SignInScreen from "../AuthScreens/SignInScreen";
import RegisterScreen from "../AuthScreens/RegisterScreen";
import CategoryScreen from "../CategoryScreen";
import CardDetailsScreen from "../CardDetailsScreen";
import CategoryModal from "../../Components/Const/CategoryModal";
import Tabs from "../Navigators/Tabs";
import CheckOutScreen from "../../Screens/CheckOutScreen";
import ListingPage from "../ListingPage";
import Messages from "../Messages";
import Payment from "../Payment";
import SearchScreen from "../SearchScreen";
import SearchFilterScreen from "../SearchFilterScreen";

const Stack = createStackNavigator();

const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="signIn" component={SignInScreen} />
        <Stack.Screen name="home" component={Tabs} />
        <Stack.Screen name="cardDetails" component={CardDetailsScreen} />
        <Stack.Screen name="ListDetails" component={CategoryScreen} />
        <Stack.Screen name="CategoryModal" component={CategoryModal} />
        <Stack.Screen name="CheckOut" component={CheckOutScreen} />
        <Stack.Screen name="ListingPage" component={ListingPage} />
        <Stack.Screen name="Messages" component={Messages} />
        <Stack.Screen name="payment" component={Payment} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="filteredData" component={SearchFilterScreen} />

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
