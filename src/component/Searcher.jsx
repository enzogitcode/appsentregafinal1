import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'
import ButtonCustom from './ButtonCustom'

const Searcher = ({ title, placeholder }) => {

  return (
    <View style={styles.JobSeekerContainer}>
      <Text style={styles.JobSeekerTextTitle}>{title}</Text>
      <TextInput style={styles.JobSeekerTextInput} placeholder={placeholder}></TextInput>
    <ButtonCustom buttonText={"Buscar"}/>
    </View>
  )
}

export default Searcher

const styles = StyleSheet.create({
  JobSeekerContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    borderWidth: 5,
    gap: 10,
    padding: 5,
    borderColor: colors.naranjaTitle,
    borderRadius: 10,
    backgroundColor: colors.azulBackground
  }
  ,
  JobSeekerTextTitle: {
    color: colors.naranjaTitle,
    fontSize: 28,
    fontFamily: 'retosta'
  },

  JobSeekerTextInput: {
    fontSize: 25,
    padding:10,
    borderRadius: 10,
    backgroundColor: '#fff'
  }
  ,
  pressableBuscar: {
    backgroundColor: colors.azulBackground,
    padding: 10,
    borderRadius: 15
  },
  textBuscar: { fontSize: 25, fontFamily: 'retosta', color: colors.naranjaTitle }
})