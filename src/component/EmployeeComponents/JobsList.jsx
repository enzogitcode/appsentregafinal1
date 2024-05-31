import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import JobItem from './JobItem'
import { useGetJobsByIdQuery, useGetJobsQuery } from '../../services/changasServices'
import { useDispatch } from 'react-redux'
const JobsList = ({ title, navigation }) => {
  
const { jobId: idSelected } = route.params
  const { data: jobs, error, isLoading } = useGetJobsByIdQuery(idSelected=1)

  useEffect(() => {
    console.log (jobs)
    }, []);

//todos los datos del database

return (
    <View>
      <Text style={styles.jobListTitle}>{title}</Text>
      <FlatList
      data={jobs}
      keyExtractor={(jobs) => {jobs.jobId}}
      renderItem={({item} ) => (
        <JobItem job={item} jobTitle={jobs.title} navigation={navigation}/>
      )}
        /* data={jobs}
        keyExtractor={item => item.item.id}
        renderItem={({ item }) => <JobItem
          jobTitle={item.jobtitle}
          jobAge={item.jobAge}
          category={item.category}
          firm={item.firm}
          location={item.location}
          otherdata={item.otherdata}
          experience={item.experience}
        />} */
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