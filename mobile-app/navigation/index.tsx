import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/Homepage";
import ProfileScreen from "../screens/Profile";
import CarConfig from "../screens/CarConfig";
import FavoritesScreen from "../screens/Favorites";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ClusterDetailsScreen from "../screens/ClusterDetails";
import LoginScreen from "../screens/Login";
import { useSecureStore } from "../hooks/useStorage";

const screenOptionStyle = {
  headerShown: false,
  animation: "none",
};

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={screenOptionStyle}
        initialRouteName="Login"
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Favorites" component={FavoritesScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="CarConfig" component={CarConfig} />
        <Stack.Screen name="ClusterDetails" component={ClusterDetailsScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
