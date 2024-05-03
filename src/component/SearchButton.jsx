import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { colors } from '../constants/colors'
import React from 'react'

const SearchButton = () => {
    return (
        <TouchableOpacity style={styles.pressableBuscar}>
            <Text style={styles.textBuscar}>Buscar</Text>
        </TouchableOpacity>
    )
}

export default SearchButton

const styles = StyleSheet.create({
    pressableBuscar: {
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 15
    },
    textBuscar: {
        fontSize: 25,
        fontFamily: 'retosta',
        color: colors.naranjaTitle,
        padding: 10
    }
})