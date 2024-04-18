import { StyleSheet, Text, Touchable, View, Pressable } from 'react-native'
import { colors } from '../constant/colors'
import React from 'react'
import { Employer, Employee, JobsCategories } from './indexScreens.js'

const Home = () => {

    /* return (
    VER SI SE PUEDE RENDERIZAR UN LOGIN
    
    //ENTRAR COMO INVITADO
    //LOGUEARSE
    ) */



    return (
        <View homeContainer>
            <Pressable onPress={Employer} style={styles.viewHomeContainer}>
                <Text style={styles.textBtn}>Soy Empleador</Text>
            </Pressable>
            <Pressable style={styles.viewHomeContainer}>
                <Text style={styles.textBtn}>Busco empleo</Text>
            </Pressable>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    homeContainer: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textBtn: {
        fontFamily: 'kathen',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 40,
        color: colors.naranjaTitle
    },
    viewHomeContainer: {
        marginVertical: 25,
        marginHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 18,
        padding: '2%',
        borderWidth: 5,
        borderColor: '#fff',
        backgroundColor: '#000'

    }

}
)