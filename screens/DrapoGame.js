import React, {useState} from 'react';
import { ImageBackground, View, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Text } from 'react-native';
import styles from "./DrapoGame.style.js"
import RenderGame from './game/RenderGame.js';
import FinishGame from './game/GameFinish.js';

function DrapoGameScreen({ route, navigation }){

    const { data } = route.params;
    const [count, setCount] = useState(0);  // Par défault à 0

    return(
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.keyboardContainer}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <ImageBackground source={require('../assets/wallpaper.jpg')} resizeMode="cover" style={styles.image} blurRadius={2}>
                        <View style={styles.drapoFlex}>
                            { (count < data.length) ?
                                <RenderGame 
                                    gameData={data}
                                    count={count}
                                    addCount={() => setCount(count + 1)}
                                    drapeau={data[count]}
                                /> : 
                                <FinishGame
                                    navigation={navigation}
                                />
                            }
                        </View>
                    </ImageBackground>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}
export default DrapoGameScreen;