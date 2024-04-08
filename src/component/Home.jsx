import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const Home = () => {
    return (
        <View>
            <Text style= {styles.home}>Home</Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    home: {
        fontFamily: 'kathen',
        fontSize: 40
    }
})