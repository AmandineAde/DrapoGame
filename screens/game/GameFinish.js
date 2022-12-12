import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "../DrapoGame.style";
import stylesHome from "../Home.style";

function FinishGame(props){
    return(
        <View style={styles.container}>
            <Text style={[styles.fs21, styles.bold, styles.textTitle, styles.textCenter, styles.textShadow]}>Partie terminée !</Text>
            <TouchableOpacity
                    style={stylesHome.button.background}
                    onPress={ () => props.navigation.navigate('Home')} 
            >
                <Text style={stylesHome.button.textScore}>Afficher le tableau des scores</Text>
            </TouchableOpacity>
        </View>
        
    )
}

export default FinishGame