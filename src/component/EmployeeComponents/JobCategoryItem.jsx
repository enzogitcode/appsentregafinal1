import { Pressable, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { colors } from '../../constants/colors'
import { setCategorySelected } from '../../features/Global/employeeSlice'

const JobCategoryItem = ({ category, navigation }) => {

  const dispatch = useDispatch()

  const handleNavigate = () => {
    dispatch(setCategorySelected(category))
    navigation.navigate('JobsListByCategories', { category })
  }
  return (
    <TouchableHighlight onPress={handleNavigate} style={styles.JobCategoryItemContainer}><Text style={styles.JobCategoryItemText}>{category}</Text></TouchableHighlight>
  )
}

export default JobCategoryItem

const styles = StyleSheet.create({
  JobCategoryItemContainer: {
    flex: 1,
    padding: 5,
    borderRadius: 10,
    margin: 10,
    borderWidth: 5,
    borderColor: colors.naranjaTitle,
    backgroundColor: 'white'
  },
  JobCategoryItemText: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'retosta'
  }
})