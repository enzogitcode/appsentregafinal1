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
    }
  }, [categorySelected, error])


  return (
    <ChangasLayout>
      <View>
        <Header title={categorySelected} />
        <FlatList
          data={jobsFetched}
          keyExtractor={(job) => job.id}
          renderItem={({ item }) => <JobItem
          jobTitle={item.jobtitle}
            jobAge={item.jobAge}
            location={item.location}
            otherdata={item.otherdata}
            firm={item.firm}
            experience={item.experience}
            category={item.category}
          />
          }
        />
      </View>
    </ChangasLayout>
  )
}

export default JobsListByCategories

const styles = StyleSheet.create({})