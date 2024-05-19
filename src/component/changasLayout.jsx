import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../constants/colors'
import React from 'react'
import { useSelector } from 'react-redux'
const ChangasLayout = ({ children }) => {
  const isDark = useSelector(state => state.global.value.darkMode)
  const backgroundColor = isDark ? colors.azulBackground: '#fff'
  return <View style={{ ...styles.changasContainer, backgroundColor }}>{children}</View >
}

export default ChangasLayout

const styles = StyleSheet.create({
  changasContainer: {
    flex: 1,
    borderColor: colors.naranjaTitle
  }
})