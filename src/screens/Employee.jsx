import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { JobSeeker, JobsList } from '../component/indexComponent'

const Employee = () => {

  return (
    <View style={styles.containerEmployeeScreen}>
      <View>
        <Text style={styles.titleSearchEmployee}>Busca un Empleador o Postulate para un trabajo</Text>
      </View>
      <JobSeeker title={"Buscador de Empleos"} />
      <JobsList title={"Lista de Empleos"} />
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
  titleSearchEmployee: {
    fontSize: 28
  }
})