import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const JobItem = ({jobTitle }) => {
  return (
    <View>
        <View>
          <Text>{jobTitle}</Text>
        </View>
    </View>
  )
}

export default JobItem

const styles = StyleSheet.create({})