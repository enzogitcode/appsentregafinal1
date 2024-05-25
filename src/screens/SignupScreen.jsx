import { StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSignUpMutation } from '../services/authServices' 
import InputForm from '../component/inputForm'
import React from 'react'

const SignupScreen = () => {
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
      console.log(" ~ useEffect ~ result:", result)
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

    return (
      <View>
        <Text>SignupScreen</Text>
        <Text>Continuar como visitante</Text>
        <View style={styles.main}>
          <View style={styles.container}>
            <Text style={styles.title}>Signup</Text>
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
            <SubmitButton onPress={onSubmit} title="Send" />
            <Text style={styles.sub}>Already have an account?</Text>
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Text style={styles.subLink}>Login</Text>
            </Pressable>
          </View>
        </View>

      </View>
    )
  }
}
export default SignupScreen

const styles = StyleSheet.create({})