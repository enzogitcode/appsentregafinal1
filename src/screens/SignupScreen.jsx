import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { useState, useEffect } from 'react'
import { ChangasLayout, Header, InputForm, SubmitButton } from '../component/indexComponent'
import { useDispatch } from 'react-redux'
import { useSignUpMutation } from '../services/authServices'
import { colors } from '../constants/colors'

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("")
  const [confirmPassword, setconfirmPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const dispatch = useDispatch()

  const [triggerSignUp, result] = useSignUpMutation()

  useEffect(() => {
    if (result.isSuccess) {
      console.log(result)
      dispatch(
        setUser({
          email: result.data.email,
          idToken: result.data.idToken
        })
      )
    }
  }, [result])

  const onSubmit = () => {
    try {
      setErrorMail("")
      setErrorPassword("")
      setErrorConfirmPassword("")
      const validation = signupSchema.validateSync({ email, password, confirmPassword })
      triggerSignUp({ email, password, returnSecureToken: true })
    } catch (err) {
      console.log("Entro al signup del error");
      console.log(err.path);
      console.log(err.message);
      switch (err.path) {
        case "email":
          setErrorMail(err.message)
          break;
        case "password":
          setErrorPassword(err.message)
        case "confirmPassword":
          setErrorConfirmPassword(err.message)
        default:
          break;
      }
    }
  }
  return (
    <ChangasLayout>
      <Header style={styles.title} title={"Signup"} />
      <View style={styles.main}>
        <View style={styles.container}>
          <InputForm label={"email"} onChange={setEmail} error={errorMail} />
          <InputForm
            label={"password"}
            onChange={setPassword}
            error={errorPassword}
            isSecure={true}
          />
          <InputForm
            label={"confirm password"}
            onChange={setconfirmPassword}
            error={errorConfirmPassword}
            isSecure={true}
          />
          <View style={styles.submitContainer}>
            <SubmitButton style={styles.submitButtonStyle} onPress={onSubmit} title="Enviar" />
            <Text style={styles.sub}>¿Ya tiene usted una cuenta?</Text>
            <SubmitButton style={styles.submitButtonStyle} onPress={() => navigation.navigate("Login")} title="Login" />
            <SubmitButton style={styles.submitButtonStyle} onPress={() => navigation.navigate("Home")} title="¿Continuar como visitante?" />
          </View>
        </View>
      </View>
    </ChangasLayout>
  )
}


export default SignupScreen

const styles = StyleSheet.create({
  main: {marginTop: 10},
  container: { alignItems: 'center' },
  submitButtonStyle: { margin: 10, alignSelf: 'center' },
  pressableLogin: {
    alignSelf: 'center',
    backgroundColor: colors.azulBackground
  },
  sub: {
    width: '90%',
    fontSize: 30,
    fontFamily: 'retosta',
    textAlign: 'center'
  },
  submitContainer: {
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 10,
    gap: 10
  }
})