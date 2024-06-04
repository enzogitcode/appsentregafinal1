import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { JobItem } from '../component/indexComponent'
import { useGetJobsQuery } from '../services/changasServices'

const JobsList = () => {
  const { data: jobs, error, isLoading } = useGetJobsQuery()

  console.log(jobs)
  return (
    <View>
      <FlatList
        data={jobs}
        keyExtractor={(job) => job.id}
        renderItem={<JobItem job={jobs}/>}
    />
    </View>
  )
}

export default JobsList

const styles = StyleSheet.create({})