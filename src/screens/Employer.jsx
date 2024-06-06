import React from 'react'
import { StatusBar, Platform, SafeAreaView, StyleSheet, Text, View, Pressable, TouchableHighlight } from 'react-native'
import { Searcher, Header, ChangasLayout, ButtonCustom } from '../component/indexComponent'
import { colors } from '../constants/colors'
import { useSelector } from 'react-redux'

const Employer = ({ navigation }) => {
  const isDark = useSelector(state => state.global.value.darkMode)

  return (
    <ChangasLayout style={styles.areaContainer}>
      <View style={styles.employerScreenContainer}>
        <Header title={"Employer"} />
        <View>
          <Text style={isDark ? {...styles.titleEmployer, color: 'white' } : styles.titleEmployer}>Busque un empleado </Text>
      </View>
      <Searcher title={"Buscador de Empleados"} placeholder={"Escriba el nombre de un Empleado o busque por categoría"} />

      <ButtonCustom onPress={() => { navigation.navigate('EmployeeList') }} style={styles.goBackPressable} buttonText={"Ver Lista completa de Empleados"} />
      <ButtonCustom onPress={() => { navigation.goBack() }} style={styles.goBackPressable} buttonText={"Volver"} />
    </View>
    </ChangasLayout >
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