import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function OnboardingScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    // const timer = setTimeout(() => {
    //   navigation.replace('Home'); // Navigate after 5 seconds
    // }, 5000);
    // return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image source={require('../../assets/custom/onboarding.png')} style={styles.image} />
      {/* <Image source={require('../assets/custom/onboarding.png')} style={styles.image} /> */}

      {/* Dark Overlay */}
      <View style={styles.overlay} />

      {/* Content */}
      <View style={styles.content}>
        {/* Logo Icon */}
        <Image source={require('../../assets/custom/logo.png')} resizeMode='contain' style={styles.logo} />

        {/* Welcome Text */}
        <Text style={styles.title}>Welcome to our store</Text>
        <Text style={styles.subtitle}>Get your groceries in as fast as one hour</Text>

        {/* Get Started Button */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.replace('Login')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Dark overlay for better text visibility
  },
  content: {
    position: 'absolute',
    bottom: 100,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 82,
    height: 82,
    marginBottom: 15,
    tintColor: 'white',
  },
  title: {
    fontFamily: 'Gilroy',
    fontSize: 48,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
    width: 230,
    lineHeight: 50,
  },
  subtitle: {
    fontFamily: 'Gilroy-Medium',
    fontSize: 16,
    color: '#ddd',
    textAlign: 'center',
    marginTop: 8,
  },
  button: {
    fontFamily: 'Gilroy',
    marginTop: 30,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    width: 353,
    height: 67,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 18,
  },
});
