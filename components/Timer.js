import React, { useEffect, useRef, useState } from "react";
import * as Progress from 'react-native-progress';
import {View, Text} from "react-native";
import styles from "./Timer.style";

function Timer(props){
  const [timer, setTimer] = useState(0);
  const id = useRef(null);

  const clear = () => {
    console.log("clear")
    window.clearInterval(id.current); // On supprime le timer
    props.onFinish(); // Fait en sorte le compteur augmente
    props.clearText();
    createInterval(); // On recrée un timer
  }

  function createInterval(){
    setTimer(11);
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000)
  }

  useEffect(() => {
    createInterval();
  }, [])

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{timer} secondes</Text>
      <Progress.Bar style={styles.progress} progress={(timer / 11)} width={200} height={10}/>
    </View>
  );
}

export default Timer