import { StyleSheet, Text, View, FlatList } from 'react-native'
import jobListData from '../data/jobsListData.json'
import JobItem from './JobItem'
import React from 'react'

const EmployeeList = ({ title }) => {

  return (
    <View>
      <Text style={styles.employeeListTitle}>{title}</Text>
       <FlatList
     data={jobListData}
     renderItem={({item}) => <JobItem JobItem={item} />}
   />
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