import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { JobSeeker, JobsList } from '../component/indexComponent'

const Employee = () => {

  return (
    <SafeAreaView style={styles.containerEmployeeScreen}>
      <View>
        <Text style={styles.titleSearchEmployee}>Busca un Empleador o Postulate para un trabajo</Text>
      </View>
      <JobSeeker title={"Buscador de Empleos"} placeholder={'Escriba el nombre de un empleo o busque por categoría'} />
      <JobsList title={"Lista de Empleos"} />
    </SafeAreaView>
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