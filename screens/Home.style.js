import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignContent: "center"
    },
    gameText: {
        fontSize: 48,
        color:"white",
        fontWeight:"bold",
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height:2},
        textShadowRadius: 10
        
    },
    button:{
        background:{
            backgroundColor: 'lightblue',
            borderRadius:5,
            paddingHorizontal:20,
            paddingVertical:10,
            marginVertical:20,
        },
        text:{
            fontSize:25,
            color: "white",
        },
        textScore:{
            fontSize:20,
            color:"white",
            fontWeight:"bold"
        }
    },
    image:{
        flex:1,
        justifyContent:'center',
        alignItems:"center"
    }
});

export default styles;