import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, SafeAreaView } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);

  return (
    <SafeAreaView colors={['#FFFBF5', '#FCE7E1']} style={styles.container}>
      {/* Logo */}
      <Image source={require('../../assets/custom/logo-O.png')} resizeMode='contain' style={styles.logo} />

      {/* Title */}
      <Text style={styles.title}>Loging</Text>
      <Text style={styles.subtitle}>Enter your emails and password</Text>

      {/* Email Input */}
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder='Enter your email'
        placeholderTextColor='#999'
        value={email}
        onChangeText={setEmail}
      />

      {/* Password Input */}
      <Text style={styles.label}>Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder='Enter your password'
          placeholderTextColor='#999'
          secureTextEntry={secureText}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setSecureText(!secureText)}>
          <Image source={require('../../assets/custom/eye-close.png')} style={styles.eyelogo} />
          {/* <Ionicons name={secureText ? 'eye-off-outline' : 'eye-outline'} size={22} color='#333' /> */}
        </TouchableOpacity>
      </View>

      {/* Forgot Password */}
      <TouchableOpacity style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => {
          navigation.navigate('Home');
        }}
      >
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>

      {/* Signup Link */}
      <Text style={styles.signupText}>
        Don’t have an account?{' '}
        <Text style={styles.signupLink} onPress={() => navigation.navigate('Signup')}>
          Signup
        </Text>
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  eyelogo: {
    width: 20,
    height: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#777',
    marginBottom: 20,
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20,
    fontSize: 16,
    color: '#333',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
    paddingRight: 10,
    marginBottom: 5, // Small gap before "Forgot Password"
  },
  passwordInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    height: 50,
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgotPassword: {
    color: '#FF5733',
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#FF5733',
    width: '100%',
    padding: 15,
    borderRadius: 25, // Rounded button
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupText: {
    marginTop: 20,
    fontSize: 14,
    color: '#777',
  },
  signupLink: {
    color: '#FF5733',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
