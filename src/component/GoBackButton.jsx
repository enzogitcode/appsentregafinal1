import { StyleSheet, Text, TouchableHighlight } from 'react-native'
import { colors } from '../constants/colors'
import React from 'react'

const GoBackButton = ({textTitle}) => {
    return (
        <TouchableHighlight title="Go back" style={styles.goBackPressable}>
            <Text style={styles.goBackText}>{textTitle}</Text>
        </TouchableHighlight>

    )
}

export default GoBackButton

const styles = StyleSheet.create({
    goBackPressable: {
      backgroundColor: '#000',
          padding: 10,
          borderRadius: 15,
          borderColor: colors.naranjaTitle,
          borderWidth: 2
    },
    goBackText: {
      fontSize: 25,
          fontFamily: 'retosta',
          color: colors.naranjaTitle,
          padding: 10
    }})