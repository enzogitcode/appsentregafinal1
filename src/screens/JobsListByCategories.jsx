import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ChangasLayout, Header, JobItem } from '../component/indexComponent'
import {useGetJobsbyCategoryQuery} from '../services/changasServices'

const JobsListByCategories = ({
  setCategorySelected = () => {},
  navigation, 
  route}) => {
 const {data: jobsFetched, error, isLoading}= useGetJobsbyCategoryQuery()
    
 const {category: categorySelected} = route.params

 const [jobsFiltered, setJobsFiltered] = useState("")
 useEffect(() => {
  if (!isLoading) {
    const jobsFiltered = jobsFetched.filter((job) =>
      job.jobTitle.toLocaleLowerCase().includes(keyWord.toLocaleLowerCase())
    )
    setJobsFiltered(jobsFiltered)
    console.log (jobsFiltered)
  } 
 }, [categorySelected, jobsFiltered])
 

 return (
    <ChangasLayout>
      <View>
      <Header title={categorySelected}/>
      <FlatList 
      data={jobsFiltered}
      keyExtractor={(job) => job.id}
      renderItem={({item}) => <JobItem job={item} />}
    />
    </View>
    </ChangasLayout>
  )
}

export default JobsListByCategories

const styles = StyleSheet.create({})