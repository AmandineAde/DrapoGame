import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import HomeScreen from './screens/Home';
import DrapoGameScreen from './screens/DrapoGame';


const Stack = createNativeStackNavigator();

export default function App() {
  //Liason de l'api
  const [data, setData] = useState([]);

  useEffect(()=> {
    axios.get("https://restcountries.com/v3.1/all").then((res)=>
        setData(res.data)
    ).catch( (res)=>
        console.log("error")
    )
  },[])

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Drapo Game" component={DrapoGameScreen} initialParams={{ data: data }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}