import { StyleSheet, useWindowDimensions, SafeAreaView, Platform, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import Navigator from './src/navigation/Navigator';
import { Provider } from 'react-redux';
import store from './src/store';
import JobsCategories from './src/screens/JobsCategories';
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
        <Provider store={store}>
          <Navigator/>
          
        </Provider>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1
  }
});
