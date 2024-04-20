import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const SearchEmployee = () => {


  return (
    <View>
      <Text>SearchEmployee</Text>
      <TextInput style={styles.inputEmployer} placeholder='Empleados'></TextInput>
    </View>
  )
}

export default SearchEmployee

const styles = StyleSheet.create({
  searchEmployeeContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputEmployer: {
    margin: 10,
    width: 50,
    height: 20,
    borderWidth: 2,
    borderColor: 'black'
  },
  employeeList: {

  }

})