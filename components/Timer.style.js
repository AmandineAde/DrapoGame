import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignContent: "center",
      marginBottom: 10
    },
    text:{
        fontSize:16,
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height:2},
        textShadowRadius: 10,
        marginVertical:5,
    },
    progress:{
        height:10,
        alignSelf: "center"
    }
});

export default styles;