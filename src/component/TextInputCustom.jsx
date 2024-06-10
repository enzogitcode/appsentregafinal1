import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const TextInputCustom = () => {
  return (
    <Label>
    <TextInput 
    
      style={styles.input}>
    </TextInput>
    </Label>
  )
}

export default TextInputCustom

const styles = StyleSheet.create({
input: {
width: '90%',
borderWidth: 0.4,
alignSelf: 'center',
},
title: {
    alignSelf: 'flex-start',

}

})