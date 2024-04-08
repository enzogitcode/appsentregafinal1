import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { colors } from './Components/constant/colors';


export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    'retosta': require('./assets/fonts/retosta.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  
  return (
    <View style={styles.container}>
      <Text style= {styles.title}>Changas App</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.azulBackground,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 30,

  },
  title: {
  fontFamily: 'retosta',
  fontSize: 40,
  color: colors.naranjaTitle,
  }
});