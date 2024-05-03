import { StyleSheet, Text, View, FlatList } from 'react-native'
import jobListData from '../data/jobsListData.json'
import React from 'react'
import JobItem from './JobItem'

const JobsList = ({ title }) => {

  const arrayJobs = [
    { id: "1", titulo: "plomero" },
    { id: "2", titulo: "gasista" },
    { id: "3", titulo: "electricista" }
  ]

  return (
    <View>
      <Text style={styles.jobListTitle}>{title}</Text>
      <FlatList
        data={jobListData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <JobItem
          jobTitle={item.jobtitle}
          jobAge={item.jobAge}
          category={item.category}
          firm={item.firm}
          location={item.location}
          otherdata={item.otherdata}
          experience={item.experience}
        />}
      />
    </View>
  )
}

export default JobsList

const styles = StyleSheet.create({
  jobListTitle: {
    fontSize: 28,
    fontFamily: 'retosta',
    margin: 10
  },
  textArray: {
    color: 'black',
    fontSize: 28
  }

})