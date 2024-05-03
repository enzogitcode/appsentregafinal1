import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
/* import { FlatList } from 'react-native-web'
 */
const EmployeeList = ({ title }) => {

  return (
    <View>
      <Text style={styles.employeeListTitle}>{title}</Text>
      {/* <FlatList
     data={jobListData}
     renderItem={({JobItem}) => <JobItem JobItem={item} />}
   /> */}
    </View>
  )
}

export default EmployeeList

const styles = StyleSheet.create({
  employeeListTitle: {
    fontSize: 28,
    fontFamily: 'retosta',
  }
})