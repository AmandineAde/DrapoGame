import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignContent: "center"
    },
    button:{
        background:{
            backgroundColor: 'lightblue',
            borderRadius:5,
            paddingHorizontal:20,
            paddingVertical:10,
            height:40,
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
    fs21:{
        fontSize:21,
    },
    bold:{
        fontWeight:"bold"
    },
    drapeauFlex:{
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
    },
    imgDrapo:{
        width : 160,
        height: 100,
        alignSelf: "center"
    },
    input:{
        height:40,
        minWidth:200,
        margin: 10,
        borderWidth: 1,
        padding: 10,
        backgroundColor: "white",
        alignSelf: "center",
        borderRadius:5,
        
    },
    textTitle:{
        textAlign: "center",
        fontWeight: "bold",
        color: "white"
    },
    image:{
        flex:1,
        flexDirection: "column",
        justifyContent:'center',
        alignItems:"center"
    },
    form:{
        flex:1, 
        flexDirection: "row", 
        minWidth:200,
        maxWidth: 100,
        maxHeight:40
    }
});

export default styles;