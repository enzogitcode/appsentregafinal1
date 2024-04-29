import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { JobSeeker } from '../component/indexComponent.js'
import {JobsList} from './indexScreens.js'
const Employee = () => {

  return (
    <View style={styles.containerEmployeeScreen}>
      <View>
        <Text style={styles.titleSearchEmployee}>Busca un Empleador o Postulate para un trabajo</Text>
      </View>
      <View styles={styles.containerJobSeeker}>
        <Text style={styles.textJobSeeker}>Buscador de empleos</Text>
        <JobSeeker />
        <JobsList />
      </View>
    </View>
  )
}

export default Employee

const styles = StyleSheet.create({
  containerEmployeeScreen: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
  },
  containerJobSeeker: {},
  textJobSeeker: {
    fontSize: 20
  }
})