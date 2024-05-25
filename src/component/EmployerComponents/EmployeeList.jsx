import { StyleSheet, Text, View, FlatList } from 'react-native'
import jobListData from '../../database/jobs.json'
import React from 'react'
import JobItem from '../EmployeeItems/JobItem'

const EmployeeList = ({ title }) => {

  return (
    <View>
      <Text style={styles.employeeListTitle}>{title}</Text>
       {/* <FlatList
     data={jobListData}
     renderItem={({item}) => <JobItem JobItem={item} />}
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