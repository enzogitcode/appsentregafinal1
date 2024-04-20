import { StyleSheet, useWindowDimensions, SafeAreaView, Platform, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { colors } from './src/constant/colors.js';
import { Header } from './src/component/indexComponent.js';
import { Home } from './src/screens/indexScreens.js'
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/navigation/navigator.js';


export default function App() {
  const [orientation, setOrientation] = useState("portrait")
  const { width, height } = useWindowDimensions()
  useEffect(() => {
    if (width > height) setOrientation("landscape")
    else setOrientation("portrait")
  }, [width, height])

  const [fontsLoaded, fontError] = useFonts({
    'retosta': require('./assets/fonts/retosta.otf'),
    'kathen': require('./assets/fonts/kathen.otf')
  });
  if (!fontsLoaded || fontError) {
    return null
  }
  if (fontsLoaded && !fontError) {
    return (
      <SafeAreaView style={styles.container}>
        <Header title={"ChangasApp"} />
        <Navigator />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight:0 ,
    backgroundColor: colors.azulBackground,
    flex: 1
  }
});
