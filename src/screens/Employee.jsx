import { StatusBar, Platform, Button, SafeAreaView, StyleSheet, Text, View, Pressable, TouchableHighlight, FlatList } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'
import { ChangasLayout, Header, Searcher, JobsCategoriesList, ModalCustom, ButtonCustom } from '../component/indexComponent'
const Employee = ({ navigation }) => {

  return (
    <ChangasLayout style={styles.areaContainer}>
      <View style={styles.containerEmployeeScreen}>
        <Header title={"Empleados"} />
        <View>
          <Text style={styles.titleSearchEmployer}> Postúlese para un trabajo</Text>
        </View>
        <Searcher title={"Buscador de Empleos"} placeholder={'Escriba el nombre de un empleo o busque por categoría'} />
        <JobsCategoriesList onPress={navigation} />
        <ButtonCustom onPress={() => { navigation.goBack() }} style={styles.goBackPressable} buttonText={"Volver"} />
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