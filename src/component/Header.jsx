import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import { colors } from '../constants/colors'
import React from 'react'
import SwitchCustom from './SwitchCustom'
import { useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { setDarkMode } from '../features/Global/globalSlice'
const Header = ({ title }) => {
    const dispatch = useDispatch ()
    const [isEnabled, setIsEnabled] = useState(false)
    const handleTheme = () => {
        setIsEnabled(initialValue => !initialValue)
        dispatch(setDarkMode(!isEnabled))
    }


return (
    <View style={styles.container}>
        <View><Text style={styles.mainTitle}>{title}</Text></View>
        <SwitchCustom
            isEnabled={isEnabled}
            setIsEnabled={handleTheme}
        />
    </View>
)
}

export default Header

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.negro
    },
    mainTitle: {
        fontFamily: 'retosta',
        fontSize: 40,
        color: colors.naranjaTitle,
    },
})