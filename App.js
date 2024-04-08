import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { colors } from './src/constant/colors.js';
import Home from './src/screens/Home';
import Header from './src/component/Header';
export default function App() {

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
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
  }
});
