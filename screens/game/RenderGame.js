import React, { useEffect, useState, useRef } from "react"
import styles from "../DrapoGame.style"
import {Text,Image,View, TouchableOpacity, TextInput} from "react-native"
import { Formik } from "formik";
import Timer from "../../components/Timer";
import ImgFlags from "../../components/ImgFlags";

function RenderGame(props){
    const [text, onChangeText] = useState("");
    const [notification, setNotification] = useState("");
    const [timer, setTimer] = useState(0);

    const correctName = () => {
        setNotification("");
        props.addCount();
        onChangeText("");
        setTimer(30);
    }
    
    const incorrectName = () => {
        if (typeof notification == "string" && notification.length === 0){
            setNotification("Mauvaise réponse !");
            window.setTimeout(() => {
                setNotification("")
            }, 3000)
            
        }
    }

    onSubmitEdit = (inputText) => {
        let country = props.gameData[props.count]
        if(country){
            console.log(country.pays)
            if (country.pays.toLowerCase() == inputText.toLowerCase()){
                correctName();
            } else {
                incorrectName();
            }
        }
    }

    return(
        <>
            { props.drapeau ?
                <View>
                    <Text style={[styles.fs18, styles.bold, styles.textCenter, styles.textShadow, styles.textWhite]}>Drapeau : {props.count - 1} sur 10</Text>
                    <Text style={[styles.fs21, styles.bold, styles.textShadow, styles.textTitle, styles.textCenter]}>Trouvez le pays de ce drapeau !</Text>
                    {(typeof notification == "string" && notification.length === 0) ? 
                        null : <Text style={[styles.fs18, styles.bold, styles.textShadow, styles.textCenter, styles.error]}>⚠️ {notification}</Text>
                    }
                    <ImgFlags key={props.count} drapeau={props.drapeau}></ImgFlags>
                    <Timer 
                        time={timer} 
                        setTimer={setTimer} 
                        resetTimer={() => setTimer(30)} 
                        onFinish={() => {
                            setNotification("");
                            onChangeText(""); 
                            props.addCount();
                        }}
                    />
                    <Formik
                        initialValues={{ input: '' }}
                        onSubmit={values => onSubmitEdit(values.input)}
                    >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <View style={styles.form}>
                            {(notification != "")}
                            <TextInput
                                name="pays"
                                placeholder="Entrer le pays"
                                style={styles.input}
                                onSubmitEditing={handleSubmit}
                                onChangeText={handleChange('input')}
                                onBlur={handleBlur('input')}
                                value={values.input}
                                
                            />
                            <TouchableOpacity
                                style={styles.button.background}
                                onPress={handleSubmit}
                            >
                                <Text style={styles.button.textScore}>Valider</Text>
                            </TouchableOpacity>
                        </View>
                        )}
                    </Formik>
                </View>
                :
                null
            }
        </>
    );
}

export default RenderGame;