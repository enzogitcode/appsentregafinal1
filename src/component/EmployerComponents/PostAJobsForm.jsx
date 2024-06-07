import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { useState } from 'react'
import InputForm from '../InputForm'

const PostAJobForm = (
  
  { label,
    onChange,
    error = "",
    isSecure = false }
  ) => {
  /* ({

    jobTitle, 
    jobAge, 
    category, 
    firm, 
    location, 
    otherdata, 
    experience
  }) => {

*/
  const [input, setInput] = useState("");
  const onChangeText = (text) => {
    setInput(text)
    onChange(text)
  }

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.subtitle}>{label}</Text>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={onChangeText}
        secureTextEntry={isSecure}
      />
      {error ?
        <Text style={styles.error}>
          {error}
        </Text>
        :
        null
      }
    
    </View>
  )
}

export default PostAJobForm

const styles = StyleSheet.create({})