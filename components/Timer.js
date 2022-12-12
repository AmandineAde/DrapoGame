import React, { useEffect, useRef, useState } from "react";
import * as Progress from 'react-native-progress';
import {View, Text} from "react-native";
import styles from "./Timer.style";

function Timer(props){
  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current); // On supprime le timer
    props.onFinish(); // Fait en sorte le compteur augmente
    props.resetTimer();
    createInterval(); // On recrée un timer
  }

  function createInterval(){
    props.resetTimer(); 
    id.current = window.setInterval(() => {
      props.setTimer((time) => time - 1);
    }, 1000)
  }

  useEffect(() => {
    createInterval();
  }, [])

  useEffect(() => {
    if (props.time === 0) {
      clear();
    }
  }, [props.time]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.time} secondes</Text>
      <Progress.Bar style={styles.progress} progress={(props.time / 30)} width={200} height={10}/>
    </View>
  );
}

export default Timer