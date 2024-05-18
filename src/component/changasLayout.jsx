import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../constants/colors'
import React from 'react'

const changasLayout = ({ children }) => {
  const isDark = true
  const backgroundColor = isDark ? colors.azulBackground : '#fff'
  return (
    <View>
      <Text st yle={{...styles.changasContainer, backgroundColor: backgroundColor}}>{children}</Text>
    </View >
  )
}

export default changasLayout

const styles = StyleSheet.create({
  changasContainer: {
    width: '100%',
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})