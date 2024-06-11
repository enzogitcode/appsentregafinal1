import { StyleSheet, Text, View} from "react-native"
import React, { useState, useEffect } from "react"
import { colors } from "../constants/colors"
import { useSignInMutation } from "../services/authServices.js"
import { SubmitButton, InputForm, Header, ButtonCustom, ChangasLayout } from '../component/indexComponent'
import { setUser } from "../features/Users/usersSlice.js"
import { useDispatch } from "react-redux"

const LoginScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const [triggerSignIn, result] = useSignInMutation()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    useEffect(() => {
        if (result.isSuccess) {
            console.log(" ~ useEffect ~ result:", result)
            dispatch(
                setUser({
                    email: result.data.email,
                    idToken: result.data.idToken,
                })
            )
        }
    }, [result])

    const onSubmit = () => {
        triggerSignIn({ email, password })
    }

    return (
        <ChangasLayout style={styles.main}>
        <View >
            <Header title={"Access to Login"} />
            <View style={styles.container}>
                <InputForm label={"email"} onChange={setEmail} error={""} />
                <InputForm
                    label={"password"}
                    onChange={setPassword}
                    error={""}
                    isSecure={true}
                />
                <SubmitButton onPress={onSubmit} title="Enviar" />
                <Text style={styles.sub}>¿Aún no ha creado una cuenta? Únase a Nosotros</Text>
                <SubmitButton onPress={() => navigation.navigate("SignupScreen")} title={"Signup"} />
            </View>
            <ButtonCustom buttonText={"Volver"} onPress={() => { navigation.goBack() }} style={styles.goBackPressable} title="Volver" />
        </View>
        </ChangasLayout>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    main: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        width: "90%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.platinum,
        gap: 18,
        paddingVertical: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 22,
        fontFamily: "retosta",
    },
    sub: {
        fontSize: 30,
        textAlign: 'center',
        fontFamily: 'retosta'
    },
    subLink: {
        fontSize: 14,
        color: "blue",
    },
})
