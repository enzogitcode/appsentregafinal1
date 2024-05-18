import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import { colors } from '../constants/colors'
import React from 'react'
import SwitchCustom from './SwitchCustom'
import { useState } from 'react'
import { isEnabled } from 'react-native/Libraries/Performance/Systrace'

const Header = ({ title }) => {

    const [isEnabled, setIsEnabled] = useState(false)

    return (
        <View style={styles.container}>
            <View><Text style={styles.mainTitle}>{title}</Text></View>
            <SwitchCustom
                isEnabled={isEnabled}
                setIsEnabled={setIsEnabled}
            />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 70,
        backgroundColor: colors.azulBackground,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    mainTitle: {
        fontFamily: 'retosta',
        fontSize: 40,
        color: colors.naranjaTitle,
    },
})