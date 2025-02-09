import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreenComponent from './src/features/auth/SplashScreen';
import Navigation from './src/navigation/Navigation';

export default function App() {
  return (
    <View style={styles.container}>
      <Navigation />
      {/* <SplashScreenComponent />
      <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
