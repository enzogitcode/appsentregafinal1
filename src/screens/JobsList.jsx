import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { JobItem } from '../component/indexComponent'
import { setIdSelected } from '../features/Global/employeeSlice'
import { useGetJobsQuery } from '../services/changasServices'

const JobsList = ({ route }) => {
  const { id: idSelected } = route.params
  const { data: jobs, error, isLoading } = useGetJobsQuery(idSelected=1)
  return (
    <View>
      <FlatList
        data={jobs}
        keyExtractor={(job) => job.id}
        renderItem={(job) => <JobItem job={job} />}
      />
    </View>
  )
}

export default JobsList

const styles = StyleSheet.create({})