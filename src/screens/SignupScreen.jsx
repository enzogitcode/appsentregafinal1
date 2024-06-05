import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { useState, useEffect } from 'react'
import { ButtonCustom, ChangasLayout, Header, InputForm, SubmitButton } from '../component/indexComponent'
import { useDispatch } from 'react-redux'
import { useSignUpMutation } from '../services/authServices'
import { signupSchema } from '../services/authSchema'
import { colors } from '../constants/colors'
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import { MaterialIcons as Icon } from '@expo/vector-icons';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("")
  const [confirmPassword, setconfirmPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  console.log(`Selected:`, selectedItems);

  const items = [
    { name: 'Soy Empleador', id: 1 },
    { name: 'Busco Empleo', id: 2 },
  ]
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

  const renderSelectText = () => {
    let c = selectedItems.length;
    if (c = 1) {
      return `${selectedItems}`;
    }
    return 'Choose some vehicles...';
  }

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
          <View>
            <SectionedMultiSelect
              selectText="Elige una opción"
              searchPlaceholderText="Search vehicles..."
              modalAnimationType="slide"

              showChips={true}
              styles={styles.sectionedMultiSelect}
              renderSelectText={renderSelectText}
              showCancelButton={true}
              hideSearch={true}
              showDropDowns={true}
              single={true}
              items={items}
              //required options
              IconRenderer={Icon}
              uniqueKey="id"
              onSelectedItemsChange={setSelectedItems}
              selectedItems={selectedItems}
            />
          </View>
          <SubmitButton style={styles.submitButtonStyle} onPress={onSubmit} title="Enviar" />
        </View>
        <View style={styles.alternativesContainer}>
          <Text style={styles.sub}>¿Ya tiene usted una cuenta?</Text>
          <ButtonCustom style={styles.submitButtonStyle} onPress={() => navigation.navigate("LoginScreen")} buttonText={"Login"} />
          <ButtonCustom style={styles.submitButtonStyle} onPress={() => navigation.navigate("Home")} buttonText={"¿Continuar como visitante?"} />
        </View>
      </View>


    </ChangasLayout>
  )
}


export default SignupScreen

const styles = StyleSheet.create({
  main: { marginTop: 10 },
  container: { alignItems: 'center' },
  submitButtonStyle: { margin: 10, alignSelf: 'center' },
  sub: {
    width: '90%',
    fontSize: 30,
    fontFamily: 'retosta',
    textAlign: 'center'
  },
  alternativesContainer: {
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 10,
    gap: 10
  },
  sectionedMultiSelect: {
    justifyContent: 'center'
  }
})