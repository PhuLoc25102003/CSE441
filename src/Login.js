import {
    View,
    TextInput,
    Text,
    StyleSheet,
    TouchableOpacity,
  } from 'react-native';
  import { useState } from 'react';
  import axios from 'axios';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  
  export default function Login({ navigation }) {
    const { phone, setPhone } = useState('');
    const { password, setPassword } = useState('');
  
    const login = async () => {
      try {
        const response = await axios.post(
          'https://kami-backend-5rs0.onrender.com/auth',
          { phone, password }
        );
        if (response.data.token) {
          const token = response.data.token;
          console.log('Login successful, Token:', token);
  
          await AsyncStorage.setItem('authToken', token);
  
          navigation.reset({
            index: 0,
            routes: [{ name: 'MyTab' }],
          });
        } else {
          Alert.alert('Login failed', 'No token returned.');
        }
      } catch (error) {
        console.error('Login error:', error);
        Alert.alert(
          'Login failed',
          'Please check your credentials and try again.'
        );
      }
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.textInput}
          value = {phone}
          onChange={setPhone}
          placeholder="Phone"
        />
        <TextInput
          style={styles.textInput}
          value = {password}
          onChange={setPassword}
          secureTextEntry
          placeholder="Password"
        />
        <TouchableOpacity style={styles.button} onPress={login}>
          <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      margin: 20,
    },
    title: {
      fontSize: 40,
      textAlign: 'center',
      marginBottom: 20,
      fontWeight: '700',
      color: '#EF506B',
    },
    textInput: {
      marginBottom: 20,
      borderWidth: 1,
      padding: 12,
      borderRadius: 8,
      borderColor: '#E9E9E9',
      placeholderTextColor: 'gray',
    },
    button: {
      padding: 10,
      borderRadius: 10,
      backgroundColor: '#EF506B',
    },
    textButton: {
      textAlign: 'center',
      color: 'white',
    },
  });
  