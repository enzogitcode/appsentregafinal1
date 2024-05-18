import react from "react"
import { useState } from "react"
import {View, Switch, StyleSheet} from 'react-native'

const SwitchCustom = () => {
  const [isEnable, setIsEnable]= useState(false)
  isEnable= true,
  setIsEnable

    return (
    <View>
      <Text>SwitchCustom</Text>
    </View>
  )
}

export default SwitchCustom

const styles = StyleSheet.create({})