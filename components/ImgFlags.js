import React from "react";
import { Image, Text } from "react-native";
import styles from "../screens/DrapoGame.style";

function ImgFlags(props){
    return(
        <Image style={styles.imgDrapo} source={{uri: props.drapeau.path}}/>
    )
}

export default ImgFlags