import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ChangasLayout from '../ChangasLayout'
import ButtonCustom from '../ButtonCustom'
import Header from '../Header'
const EmployerList = ({navigation}) => {
    return (
        <ChangasLayout>

            <Header title={"Lista de Empleados"} />
            <View>
            </View>
            <ButtonCustom buttonText={"Volver"} onPress={() => { navigation.goBack() }} />

        </ChangasLayout>
    )
}

export default EmployerList

const styles = StyleSheet.create({})