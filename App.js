import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { colors } from './Components/constant/colors';


export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    'retosta': require('./assets/fonts/retosta.otf'),
  });
  if (!fontsLoaded || fontError) {
    return null
  }
  if (fontsLoaded && !fontError) {
    return (
      <View style={styles.container}>
        <Text style={styles.mainTitle}>Changas App</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.azulBackground,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 30,

  },
  mainTitle: {
    fontFamily: 'retosta',
    fontSize: 40,
    color: colors.naranjaTitle,
  }
});
