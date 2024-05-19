import react from "react"
import { useState } from "react"
import { View, Switch, StyleSheet } from 'react-native'

const SwitchCustom = ({
  isEnabled = true,
  setIsEnabled = () => { }
}) => {
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View>
      <Switch 
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  )
}

export default SwitchCustom

const styles = StyleSheet.create({})