import React from 'react'
import { colors } from '../../constants/colors.js'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import JobCategoryItem from './JobCategoryItem.jsx'
import { useGetJobsCategoriesQuery } from '../../services/changasServices.js'
import { useDispatch } from 'react-redux'
import { setCategorySelected } from '../../features/Global/employeeSlice'
import { useSelector } from 'react-redux'
const JobsCategoriesList = ({ navigation }) => {
  const { data: categories, error, isLoading } = useGetJobsCategoriesQuery()

  const isDark = useSelector(state => state.global.value.darkMode)

  return (

    <FlatList style={styles.jobsListCategoriesContainer}
    scrollEnabled={true}
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
    borderBlockColor: 'white',
    backgroundColor: 'lightgreen'
  }
})