import { StatusBar, Platform, Button, SafeAreaView, StyleSheet, Text, View, Pressable, TouchableHighlight, FlatList } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../constants/colors'
import { ChangasLayout, Header, Searcher, JobsCategoriesList, ModalCustom, ButtonCustom } from '../component/indexComponent'
import { useSelector } from 'react-redux'
const Employee = ({ navigation }) => {
  const isDark = useSelector(state => state.global.value.darkMode)
  return (
    <ChangasLayout style={styles.areaContainer}>
      <View style={styles.containerEmployeeScreen}>
        <Header title={"Empleados"} />
        <View>

          <Text style={isDark? {...styles.titleSearchEmployer, color:'white'} : styles.titleSearchEmployer}> Postúlese para un trabajo</Text>
        </View>
        <Searcher title={"Buscador de Empleos"} placeholder={'Escriba el nombre de un empleo o busque por categoría'} />
        <JobsCategoriesList navigation={navigation} style={isDark ? { ...styles.jobsListCategoriesContainer, borderBlockColor: colors.naranjaTitle } : styles.jobsListCategoriesContainer} />
        <ButtonCustom onPress={() => { navigation.goBack() }} buttonText={"Volver"} />
      </View>
    </ChangasLayout>
  )
}

export default Employee

const styles = StyleSheet.create({
  areaContainer: {
    margin: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  containerEmployeeScreen: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  titleSearchEmployer: {
    fontSize: 28,
    textAlign: 'center',
  }

})