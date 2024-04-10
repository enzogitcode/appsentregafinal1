import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { useFonts } from 'expo-font';
//import { colors } from './src/constant/colors.js';
import {Header, Home} from './src/component'
import Header from './src/component/Header';
import { useEffect, useState} from 'react';

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
      <View style={styles.container}>
        <Header title={"ChangasApp"} />
        <Home/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    marginTop: 30,
  }
});
