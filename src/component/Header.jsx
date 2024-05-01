import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../constants/colors'
import React from 'react'

const Header = ({ title }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.mainTitle}>{title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 70,
        backgroundColor: colors.azulBackground,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    mainTitle: {
        fontFamily: 'retosta',
        fontSize: 40,
        color: colors.naranjaTitle,
    },
})