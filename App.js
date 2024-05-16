import { StyleSheet, useWindowDimensions, SafeAreaView, Platform, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { colors } from './src/constants/colors.js';
import { Header, JobItem, JobSeeker, JobsList, JobsListCategories } from './src/component/indexComponent.js';
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/navigation/Navigator.js';
import JobCategory from './src/component/JobCategory.jsx';
import { View } from 'react-native';


export default function App({nro=9}) {
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
    backgroundColor: 'white',
    flex: 1
  }
});
