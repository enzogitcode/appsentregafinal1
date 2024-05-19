import { SafeAreaView, StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { Header, JobSeeker, JobsList, JobsListCategories, Searcher } from '../component/indexComponent'

const Employee = ({ goBack = () => { } }) => {

  return (
    <SafeAreaView style={styles.containerEmployeeScreen}>
      <View>
        <Header/>
        <View>
          <Text style={styles.titleSearchEmployee}>Busca un Empleador o Postulate para un trabajo</Text>
        </View>
        <Searcher title={"Buscador de Empleos"} placeholder={'Escriba el nombre de un empleo o busque por categoría'} />
        <View onPress={goBack}>
          <Pressable name="back" size={24} color="white" />
        </View>
        <JobsListCategories />
        <JobsList title={"Lista de Empleos"} />
      </View>
    </SafeAreaView>
  )
}

export default Employee

const styles = StyleSheet.create({
  containerEmployeeScreen: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    flex: 2
  },
  titleSearchEmployee: {
    fontSize: 28
  }
})