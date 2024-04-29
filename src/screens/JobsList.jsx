import { StyleSheet, Text, View, FlatList } from 'react-native'
import jobListData from '../data/jobsListData.json'
import {JobItem} from '../component/indexComponent'
import React from 'react'

const JobsList = () => {


  return (
    <View>
      <Text>JobsList</Text>
      <FlatList
        data={jobListData}
        renderItem={({item}) => <JobItem JobItem={item} />}
      />
    </View>
  )
}

export default JobsList

const styles = StyleSheet.create({})