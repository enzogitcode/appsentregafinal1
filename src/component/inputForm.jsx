 import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../constants/colors.js';
const InputForm = ({
    label, 
    onChange, 
    error = "",
    isSecure = false
}) => {
    const [input, setInput] = useState("");
    const onChangeText = (text) => {
        setInput(text)
        onChange(text)
    }
    const onFocus = () => {

      }

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.subtitle}>{label}</Text>
      <TextInput
        style ={styles.input}
        value={input}
        onChangeText={onChangeText}
        secureTextEntry={isSecure}
        onFocus={onFocus}
      />
      {error ? 
        <Text style = {styles.error}>
            {error}
        </Text>
        :
        null
    }
    </View>
  )
}

export default InputForm

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        borderWidth: 2,
        alignItems: 'center',
        width: '100%',
        borderRadius: 10,
        marginVertical: 10
    },
    subtitle: {
        width: '90%',
        justifyContent: 'flex-start',
        fontSize: 20,
        fontFamily: 'retosta',
        textDecorationLine: 'underline'
        },
        error: {
            paddintTop: 2,
        fontSize: 20,
        color: 'red',
        fontFamily: 'retosta',
        },
        input: {
        margin: '2%',
        width: '90%',
        padding: 2,
        fontFamily: 'retosta',
        fontSize: 20
    }
})
