import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../constant/colors'
import React from 'react'


const Home = () => {
    return (
        <View homeContainer>
            <View style={styles.viewHomeContainer}><Text style={styles.textBtn}>Soy Empleador</Text></View>
            <View style={styles.viewHomeContainer}><Text style={styles.textBtn}>Busco Empleo</Text></View>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    homeContainer: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textBtn: {
        fontFamily: 'kathen',
        color: colors.naranjaTitle,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 40
    },
    viewHomeContainer: {
        margin: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.azulBackground,
        borderRadius: 10,
        padding: '2%'
    }

}
)