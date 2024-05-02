import { StyleSheet, Text, View, FlatList } from 'react-native'
import jobListData from '../data/jobsListData.json'
import React from 'react'

const JobsList = ({title}) => {


  return (
    <View>
       <Text style={styles.jobListTitle}>{title}</Text>
      {/* <FlatList
        data={jobListData}
        renderItem={({JobItem}) => <JobItem JobItem={item} />}
      /> */}
    </View>
  )
}

export default JobsList

const styles = StyleSheet.create({
  jobListTitle: {
    fontSize: 28,
    fontFamily: 'retosta',
    
  }
})