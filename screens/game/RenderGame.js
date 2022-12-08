import React from "react"
import styles from "../DrapoGame.style"
import {Text,Image,View, TouchableOpacity, TextInput} from "react-native"
import Timer from "../../components/Timer";

function RenderGame(props){
    

    return(
        <>
            <Text style={[styles.fs21, styles.bold, styles.textTitle]}>Trouvez le pays de ce drapeau !</Text>
            { props.gameData && props.gameData.map((country, index) => {
                    if(props.count == index){ // On sélectionne l'image correspondante
                        return <Image key={props.count} style={styles.imgDrapo} source={{uri: country.flags.png }}></Image>
                    }
                }) 
            }
            {<Timer onFinish={props.onTimerFinish}/>}
            <View style={styles.form}>
                <TextInput
                    multiline
                    numberOfLines={2}
                    name="pays"
                    placeholder="Entrer le pays"
                    style={styles.input}
                    value={props.text}
                    onChange={props.onChangeText}
                />
                <TouchableOpacity
                    style={styles.button.background}
                    onPress={()=> console.log("valide")} 
                >
                    <Text style={styles.button.textScore}>Valider</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

export default RenderGame;