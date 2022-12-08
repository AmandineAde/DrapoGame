import React, { useEffect, useState, useRef } from "react"
import styles from "../DrapoGame.style"
import {Text,Image,View, TouchableOpacity, TextInput} from "react-native"
import Timer from "../../components/Timer";
import ImgFlags from "../../components/ImgFlags";

function RenderGame(props){

    const inputRef = useRef(null)
    const [text, onChangeText] = useState("")
    const [notification, setNotification] = useState("");


    const returnDrapeau = () => {
        return props.drapeau.flags.png
    }

    const correctName = () => {
        console.log("correct !")
    }
    
    const incorrectName = () => {
        console.log("incorrect !")
    }

    onSubmitEdit = (inputText) => {
        let country = props.gameData[props.count]
        if(country){
            console.log(inputText)
            if (country.pays.toLowerCase() == inputRef.current.value){
                correctName();
            } else {
                incorrectName();
            }
        }
    }

    return(
        <>
            { (props.drapeau != []) ?
                <View>
                    <Text style={[styles.fs21, styles.bold, styles.textTitle]}>Trouvez le pays de ce drapeau !</Text>
                    <ImgFlags key={props.count} drapeau={props.drapeau}></ImgFlags>
                    {<Timer onFinish={props.onTimerFinish} clearText={() => onChangeText("")}/>}
                    <View style={styles.form}>
                        {(notification != "")}
                        <TextInput
                            ref={inputRef}
                            name="pays"
                            placeholder="Entrer le pays"
                            style={styles.input}
                            value={text}
                            onChange={onChangeText}
                            onSubmitEditing={() => onSubmitEdit(text)}
                            
                        />
                        <TouchableOpacity
                            style={styles.button.background}
                            onPress={() => onSubmitEdit(text)} 
                        >
                            <Text style={styles.button.textScore}>Valider</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                :
                ""
            }
        </>
    );
}

export default RenderGame;