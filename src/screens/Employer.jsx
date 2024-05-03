import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { JobSeeker, EmployeeList } from '../component/indexComponent'
const Employer = () => {


  return (
    <SafeAreaView style={styles.containerEmployerScreens}>
      <View>
        <Text style={styles.titleEmployer}>Busca un Empleador o Postulate para un trabajo</Text>
      </View>
      <JobSeeker title={"Buscador de Empleados"} placeholder={"Escriba el nombre de un Empleado o busque por categoría"} />
      <EmployeeList style={styles.employeeListTitle} title={"Lista de Empleados"} />
    </SafeAreaView>
  )
}

export default Employer

const styles = StyleSheet.create({
  containerEmployerScreens: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 25
  },
  titleEmployer: {
    fontSize: 28
  }

})