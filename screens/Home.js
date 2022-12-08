import * as React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import styles from "./Home.style.js"
//import { NavigationContainer } from '@react-navigation/native';

function HomeScreen({ navigation }){
    return(
        <View style={styles.container}>
            <ImageBackground source={require('../assets/wallpaper.jpg')} resizeMode="cover" style={styles.image} blurRadius={2}>
                <Text style={styles.gameText}> Drapo Game </Text>
                <TouchableOpacity
                    style={styles.button.background}
                    onPress={ () => navigation.navigate('Drapo Game')} 
                >
                <Text style={styles.button.text}>JOUER</Text>
                </TouchableOpacity>
            </ImageBackground>

            {/* <Button style={styles.button}
            title="JOUER"
            onPress={() => navigation.navigate('Drapo Game')}
            /> */}
        </View>
    );
}



export default HomeScreen