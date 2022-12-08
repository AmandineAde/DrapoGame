import React, {useState, useCallback} from 'react';
import { View, ImageBackground } from 'react-native';
import styles from "./DrapoGame.style.js"
import { useFocusEffect } from '@react-navigation/native';
import RenderGame from './game/RenderGame.js';
import FinishGame from './game/GameFinish.js';

function DrapoGameScreen({ route, navigation }){
    const {data} = route.params;    

    const [count, setCount] = useState(0);  // Par défault à 0
    const [text, onChangeText] = useState(""); // Par défault vide
    const [playData, setPlayData] = useState([]) // Par défault vide, on récupérer lorsque le composant est bien montée !

    function newGame(num){
        const shuffled = [...data].sort(() => 0.5 - Math.random());

        return shuffled.slice(0, num);
    }

    useFocusEffect(
        useCallback(() => {
            setPlayData(newGame(10)) // Création d'une partie avec 10 Drapeaux
    
          return () => {
            setPlayData([]) // On vide la data quand la page n'est plus focus
          };
        }, [])
    );

    return(
        <View style={styles.container}>
            <ImageBackground source={require('../assets/wallpaper.jpg')} resizeMode="cover" style={styles.image} blurRadius={2}>
                <View style={styles.drapoFlex}>
                    { (count < playData.length) ?
                        <RenderGame 
                        gameData={playData} 
                        count={count} 
                        onTimerFinish={() => setCount(count + 1)}
                        text={text}
                        inputChange={onChangeText}
        
                        /> : <FinishGame
                        navigation={navigation}
                        />
                    }
                </View>
            </ImageBackground>
        </View>
    );
}
export default DrapoGameScreen;