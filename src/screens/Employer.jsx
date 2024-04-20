import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { SearchEmployee } from '../component/indexComponent'
const Employer = () => {


  return (
    <View style={styles.containerEmployerScreens}>
      <View>
        <Text style={styles.titleSearchEmployee}>Busca un trabajador o Postea un empleo</Text>
      </View>
      <View styles={styles.containerSearchEmployee}>
        <Text style={styles.textSearchEmployee}>Buscador de trabajadores</Text>
        <SearchEmployee />
      </View>
      {/* <EmployeeList/> */}
      <View>
        {/* <PostAJob /> */}
      </View>
    </View>
  )
}

export default Employer

const styles = StyleSheet.create({
  containerEmployerScreens: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
  },
  titleSearchEmployee: {

  },
  containerSearchEmployee: {

  },
  textSearchEmployee: {
    fontSize: 20
  }
})