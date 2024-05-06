import { StyleSheet, Text, View } from 'react-native'
import JobsList from './JobsList'
import React from 'react'

const JobsListCategories = ({jobCategory}) => {
  return (
    <View>
      <Text>JobsListCategories</Text>
      <Text>{jobCategory}</Text>
    </View>
  )
}

export default JobsListCategories

const styles = StyleSheet.create({})