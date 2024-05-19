import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { colors } from '../constants/colors'
import { Header, ChangasLayout } from '../component/indexComponent.js'
import { useSelector } from 'react-redux'
const Home = ({ navigation }) => {
    return (
        <ChangasLayout style={styles.homeContainer}>
            <Header title={"ChangasApp"} />
            <View style={styles.homeContainer}>
                <Pressable onPress={() => {
                    navigation.navigate('Employer')
                }} style={styles.viewHomeContainer}>
                    <Text style={styles.textBtn}>Soy Empleador</Text>
                </Pressable>
                <Pressable onPress={() => {
                    navigation.navigate('Employee')
                }} style={styles.viewHomeContainer}>
                    <Text style={styles.textBtn}>Busco empleo</Text>
                </Pressable>
            </View>
        </ChangasLayout>
    )
}

export default Home;

const styles = StyleSheet.create({
    homeContainer: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textBtn: {
        fontFamily: 'kathen',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 40,
        color: colors.naranjaTitle,
        textAlign: 'center'

    },
    viewHomeContainer: {
        marginVertical: 20,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 18,
        padding: '2%',
        borderWidth: 5,
        borderColor: colors.naranjaTitle,
        textAlign: 'center',
        backgroundColor: colors.azulBackground
    }

}
)