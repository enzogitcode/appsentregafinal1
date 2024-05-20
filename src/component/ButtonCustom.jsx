import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { colors } from '../constants/colors'
import React from 'react'

const ButtonCustom = ({textTitle}) => {
    return (
        <TouchableOpacity style={styles.pressableBuscar}>
            <Text style={styles.textBuscar}>{textTitle}</Text>
        </TouchableOpacity>
    )
}

export default ButtonCustom

const styles = StyleSheet.create({
    pressableBuscar: {
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 15,
        borderColor: colors.naranjaTitle,
        borderWidth: 2
    },
    textBuscar: {
        fontSize: 25,
        fontFamily: 'retosta',
        color: colors.naranjaTitle,
        padding: 10
    }
})