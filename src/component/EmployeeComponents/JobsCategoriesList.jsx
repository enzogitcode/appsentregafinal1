import React from 'react'
import { colors } from '../../constants/colors.js'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import JobCategoryItem from './JobCategoryItem.jsx'
import { useGetJobsCategoriesQuery } from '../../services/changasServices.js'
import { useDispatch } from 'react-redux'
import {setCategorySelected} from '../../features/Global/employeeSlice'
const JobsCategoriesList = ({ navigation }) => {
  const { data: categories, error, isLoading } = useGetJobsCategoriesQuery()
  

  return (

    <FlatList style={styles.jobsListCategoriesContainer}
      onScroll={true}
      data={categories}
      keyExtractor={(category) => category}
      renderItem={({ item }) => (
        <JobCategoryItem
          category={item}
          navigation={navigation}
        />
      )}

    />

  )
}

export default JobsCategoriesList

const styles = StyleSheet.create({
  jobsListCategoriesContainer: {
    borderWidth: 10,
    borderRadius: 10,
    padding: 5,
    borderBlockColor: colors.azulBackground
  }
})