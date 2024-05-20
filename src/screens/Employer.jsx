import React from 'react'
import { StatusBar, Platform, SafeAreaView, StyleSheet, Text, View, Pressable, TouchableHighlight } from 'react-native'
import { JobSeeker, EmployeeList, Searcher, Header, GoBackButton } from '../component/indexComponent'
import { colors } from '../constants/colors'
const Employer = ({navigation}) => {

  return (
    <SafeAreaView style={styles.areaContainer}>
      <View style={styles.employerScreenContainer}>
        <Header title={"Employer"} />
        <View>
          <Text style={styles.titleEmployer}>Busque un empleado </Text>
        </View>
        <Searcher title={"Buscador de Empleados"} placeholder={"Escriba el nombre de un Empleado o busque por categoría"} />
        <TouchableHighlight onPress={() => { navigation.goBack() }} title="Go back" style={styles.goBackPressable}><Text style={styles.goBackText}>Volver</Text></TouchableHighlight>
        {/* <EmployeeList style={styles.employeeListTitle} title={"Lista de Empleados"} /> */}
      </View>
    </SafeAreaView>
  )
}

export default Employer

const styles = StyleSheet.create({
  areaContainer: {
    margin: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  employerScreenContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,

  },
  titleEmployer: {
    fontSize: 28,
    textAlign: 'center'

  },
  goBackPressable: {
    backgroundColor: '#000',
        padding: 10,
        borderRadius: 15,
        borderColor: colors.naranjaTitle,
        borderWidth: 2
  },
  goBackText: {
    fontSize: 25,
        fontFamily: 'retosta',
        color: colors.naranjaTitle,
        padding: 10
  }

})