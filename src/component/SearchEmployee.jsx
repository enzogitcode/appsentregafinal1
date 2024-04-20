import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { colors } from '../constant/colors'
import React from 'react'

const SearchEmployee = () => {


  return (
    <View style={styles.searchEmployeeContainer} >
      <TextInput placeholder='Escriba un nombre o una categoría' style={styles.inputSearchEmployee} />
      <Pressable style={styles.pressableBuscar}><Text style={styles.textBuscar}>Buscar</Text></Pressable>
    </View>
  )
}

export default SearchEmployee

const styles = StyleSheet.create({
  searchEmployeeContainer: {
    alignItems: 'center',
    gap: 10
  },
  inputSearchEmployee: {
    textAlign:'center',
    borderRadius: 5,
    minHeight: 15,
    minWidth: 15
  },
  pressableBuscar: {
    backgroundColor: colors.azulBackground,
    padding: 10,
    borderRadius: 15
  },
  textBuscar: { fontSize: 25, fontFamily: 'retosta', color: colors.naranjaTitle }
})