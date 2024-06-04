import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ChangasLayout, Header, JobItem } from '../component/indexComponent'
import { useGetJobsByIdQuery, useGetJobsbyCategoryQuery } from '../services/changasServices'
import { setIdSelected } from '../features/Global/employeeSlice'

const JobsListByCategories = ({
  setCategorySelected = () => { },
  navigation,
  route }) => {
  const { category: categorySelected } = route.params

  const { data: jobsFetched, error, isLoading } = useGetJobsbyCategoryQuery(categorySelected)


  console.log(jobsFetched)
  const [jobsFiltered, setJobsFiltered] = useState([])
  useEffect(() => {
    if (!isLoading) {
      const jobsFiltered = jobsFetched.filter((job) =>
        job.id
      )
      setJobsFiltered(jobsFiltered)
      console.log(jobsFiltered)
    }
  }, [categorySelected])


  return (
    <ChangasLayout>
      <View>
        <Header title={categorySelected} />
        <FlatList
          data={jobsFiltered}
          keyExtractor={(job) => job.id}
          renderItem={({ item }) => <JobItem
            job={item}
            id={item.id}
            category={categorySelected}
            jobTitle={item.jobTitle}
          />
          }
        />
      </View>
    </ChangasLayout>
  )
}

export default JobsListByCategories

const styles = StyleSheet.create({})