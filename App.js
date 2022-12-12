import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import axios from "axios";
import styles from "./screens/Home.style";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// Screens
import HomeScreen from "./screens/Home";
import DrapoGameScreen from "./screens/DrapoGame";

import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";

WebBrowser.maybeCompleteAuthSession();

// web: 138324831907-i7266cfkqhu3bpo29ib9icb4sp6tfrvv.apps.googleusercontent.com
// iOS : 138324831907-qulnbmqo5fhbmktnnvvgp06bic45f3rg.apps.googleusercontent.com
// Android : 138324831907-rta6nb5pnsk962kdmt604ukdpef63spa.apps.googleusercontent.com

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState(null);

  const [request, response, promtAsync] = Google.useIdTokenAuthRequest({
    clientId: "138324831907-i7266cfkqhu3bpo29ib9icb4sp6tfrvv.apps.googleusercontent.com",
    iosClientId: "138324831907-qulnbmqo5fhbmktnnvvgp06bic45f3rg.apps.googleusercontent.com",
    androidClientId: "138324831907-rta6nb5pnsk962kdmt604ukdpef63spa.apps.googleusercontent.com"
  });

  useEffect(() => {
    console.log(response)
    if (response?.type === "success"){
      setAuth(response)
      const persistAuth = async () => {
        await AsyncStorage.setItem("auth", JSON.stringify(response));
      }
      persistAuth();
    }
  }, [response]);

  useEffect(() => {
    const getPersistedAuth = async () => {
      const jsonValue = await AsyncStorage.getItem("auth");
      if (jsonValue != null){
        setAuth(JSON.parse(jsonValue));
        console.log(auth);
      }
    }
  }, [])

  const getUserData = async () => {
    let response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: { Authorization: `Bearer ${auth.authentication.accessToken}` }
    });

    response.json().then(data => {
      setUser(data)
    })
  }

  return (
    <SafeAreaProvider>
    {/* { user === null ?

    <SafeAreaView>
      <TouchableOpacity
        style={styles.button.background}
        onPress={()=>promtAsync({useProxy: false, showInRecents: false})}
      >
          <Text style={styles.button.text}>Me connecter avec Google</Text>
      </TouchableOpacity>
      <Text>{response}</Text>
    </SafeAreaView>


    : */}
      <NavigationContainer>
        <Stack.Navigator>
          
          <Stack.Group>
            
            <Stack.Screen name="Home" componentinitialParams={{ user: user }}>
              {(props) => <HomeScreen {...props} LoginBtn={LoginBtn()}/>}
            </Stack.Screen>
            <Stack.Screen
              name="Drapo Game"
              component={DrapoGameScreen}
              initialParams={{ user: user }}
            />
          </Stack.Group>
          
        </Stack.Navigator>
      </NavigationContainer>
      {/* } */}
    </SafeAreaProvider>
  );
}
