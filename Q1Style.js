import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        margin: 10,
    
    },
    heading : {
        fontSize: 40,
        color: '#757375',
        fontWeight: '500',
    },
    productContainer:{
        flex: 1,
        flexDirection: 'row',
        marginBottom: 30,

        
    },
    image: {
        width: '100%',
        height: '100%',
        margin: 10,
        flex: 1,
    },
    inforProductContainer: {
        flex: 2,

    },
    imageCotainer: {
        flex: 1,
        height: 150,
       
  
    },
    buttonCotainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    button: {
        padding: 10,
    }

});