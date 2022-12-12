import React, {useEffect, useState, useCallback} from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import styles from "./Home.style.js"
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
//import { NavigationContainer } from '@react-navigation/native';

function HomeScreen({ route, navigation }, props){
    const { user } = route.params;
    const [data, setData] = useState([]);

    useFocusEffect(
        useCallback(() => {
            axios.get("https://restcountries.com/v3.1/subregion/europe").then((res) => {
                let temp = [];
                let dataAPI = res.data;
                let o = 0;

                while (o < 11) {
                    let num = Math.floor(Math.random() * dataAPI.length);

                    let valueState =
                    temp.map((item) => {
                        if (item !== dataAPI[num]) {
                        return false;
                        }
                    }) | true;

                    if (valueState && dataAPI[num].flags.png !== undefined) {
                    let path = dataAPI[num].flags.png;
                    let str = dataAPI[num].translations.fra.common;

                    temp.push({
                        path: path,
                        pays: str,
                    });
                    o++;
                    }
                }
                setData(temp);
                console.log(data)
            }).catch((res) => 
                console.log("error")
            );
        }, [])
    );

    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../assets/wallpaper.jpg')} resizeMode="cover" style={styles.image} blurRadius={2}>
                <Text style={styles.gameText}> Drapo Game </Text>
                    <TouchableOpacity
                        style={styles.button.background}
                        onPress={ () => navigation.navigate('Drapo Game',{
                            data:data
                        })} 
                    >
                        <Text style={styles.button.text}>JOUER</Text>
                    </TouchableOpacity> 
            </ImageBackground>
        </SafeAreaView>
    );
}



export default HomeScreen