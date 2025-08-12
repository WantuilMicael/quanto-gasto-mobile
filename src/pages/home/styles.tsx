import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({

    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    boxTop:{
        height: Dimensions.get('window').height/5,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    boxMid:{
        height: Dimensions.get('window').height/1.5,
        width: '100%',
    },

    boxBotton:{
        height: Dimensions.get('window').height/7,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    textUser:{
        fontWeight: 'bold',
        paddingRight: 150,
        paddingLeft: 30,
        fontSize: 20
    },

    titleMid:{
        backgroundColor: themas.colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
        height: 80,
        marginLeft: 20,
        marginRight: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },

    textTitle:{
        fontWeight: 'bold',
        fontSize: 28
    },

    formMid:{
        backgroundColor: themas.colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        height: 350,
        marginLeft: 20,
        marginRight: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        paddingLeft: 10,
        paddingRight: 10,
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    inputGroup: {
        flex: 1
    },

    inputGroupFull: {
        width: '100%',
        marginTop: 10,
        marginBottom: 10,
    },

    input: {
        backgroundColor: themas.colors.secondary,
        borderRadius: 10,
        paddingHorizontal: 10,
        height: 40,
        marginTop: 5,
    },

    inputFull: {
        backgroundColor: themas.colors.secondary, // corrigido
        borderRadius: 10,
        paddingHorizontal: 10,
        height: 40,
        marginTop: 5,
    },

    botao: {
        backgroundColor: themas.colors.secondary,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignSelf: 'center',
        marginTop: 30,
        marginBottom: 30,
        height: 50,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    botaoTexto: {
        color: themas.colors.textcolor,
        fontWeight: 'bold',
        fontSize: 22
    },

    resultMid:{
        backgroundColor: themas.colors.textcolor,
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        marginTop: -20,
        marginLeft: 20,
        marginRight: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },

    textResult:{
        color: themas.colors.secondary,
        fontWeight: 'bold',
        fontSize: 18
    },

    textValue:{
        color: themas.colors.primary,
    }

})