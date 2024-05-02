import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'

const JobSeeker = ({ title }) => {

  return (
    <View style={styles.JobSeekerContainer}>
      <Text style={styles.JobSeekerTextTitle}>{title}</Text>
      <TextInput style={styles.JobSeekerTextInput} placeholder='Escriba el nombre de un empleo o una Categoría'></TextInput>
    </View>
  )
}

export default JobSeeker

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
})