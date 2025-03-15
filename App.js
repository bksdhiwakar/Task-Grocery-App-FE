import React, { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/navigations/appNav';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Gilroy-Regular': require('./assets/fonts/gilroy/Gilroy-Regular.ttf'),
    'Gilroy-Regular': require('./assets/fonts/gilroy/Gilroy-Medium.ttf'),
    'Gilroy-Bold': require('./assets/fonts/gilroy/Gilroy-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <AppNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
