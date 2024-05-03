import { StyleSheet, Text, View, FlatList } from 'react-native'
import jobListData from '../data/jobsListData.json'
import React from 'react'

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
        data={arrayJobs}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Text>{item.titulo}</Text>}
      />
    </View>
  )
}

export default JobsList

const styles = StyleSheet.create({
  jobListTitle: {
    fontSize: 28,
    fontFamily: 'retosta',
  },
  textArray: {
    color: 'black',
    fontSize: 28
  }

})