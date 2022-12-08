import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import axios from "axios";
import HomeScreen from "./screens/Home";
import DrapoGameScreen from "./screens/DrapoGame";

const Stack = createNativeStackNavigator();

export default function App() {
  

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Drapo Game"
          component={DrapoGameScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
