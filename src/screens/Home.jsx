import React from 'react'
import { StyleSheet, Text, Touchable, View, Pressable } from 'react-native'
import { colors } from '../constants/colors'


const Home = ({navigation}) => {

    return (
        <View style= {styles.homeContainer}>
            <Pressable onPress={()=> {
                navigation.navigate('Employer')
            }} style={styles.viewHomeContainer}>
                <Text style={styles.textBtn}>Soy Empleador</Text>
            </Pressable>
            <Pressable onPress={()=> {
                navigation.navigate('Employee')
            }} style={styles.viewHomeContainer}>
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
        flex:1
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