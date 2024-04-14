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
        borderRadius: 10,
        padding: '2%',
        backgroundColor: colors.azulBackground
        
    }

}
)