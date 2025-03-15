import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync(); // Prevent auto-hide until content is ready

export default function CustomSplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(async () => {
      await SplashScreen.hideAsync();
      navigation.replace('Onboarding'); // Navigate to your home screen
    }, 2000); // Delay for 2 seconds
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/Group 1.png')} style={styles.logo} />
      <Text style={styles.title}>
        <Image source={require('../../assets/Group 1.png')} style={styles.appleIcon} />
        Fresh
      </Text>
      <Text style={styles.subTitle}>Online Groceries</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ff6347',
    flexDirection: 'row', // To align text and apple icon inline
    alignItems: 'center',
  },
  appleIcon: {
    width: 30,
    height: 30,
    marginLeft: 5,
  },
  subTitle: {
    fontSize: 20,
    color: '#555',
    marginTop: 5,
  },
});
