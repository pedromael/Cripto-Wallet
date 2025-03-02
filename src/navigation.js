import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/home";
import ProfileScreen from "./screens/profile";
import DepositScreen from "./screens/deposit";
import WithdrawScreen from "./screens/withdraw";

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Deposit" component={DepositScreen} />
        <Stack.Screen name="Withdraw" component={WithdrawScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
