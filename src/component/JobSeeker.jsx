import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const JobSeeker = () => {

  return (
    <View>
      <Text>Buscador de empleos</Text>
      <TextInput placeholder='Escriba el nombre de un empleo o una Categoría'></TextInput>
    </View>
  )
}

export default JobSeeker

const styles = StyleSheet.create({})