import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

const RegisterForm = ({ closeRegisterModal }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegistration = () => {
    // Aquí podrías agregar la lógica para registrar al usuario con la información proporcionada
    // Por ejemplo, una llamada a tu API para enviar los datos al servidor
    // Y manejar la lógica de registro
    console.log('Registrando usuario con:', email, password, confirmPassword);
    // Aquí podrías agregar la lógica para registrar al usuario
    closeRegisterModal(); // Cierra el modal después de registrar al usuario
  };

  const handleCancel = () => {
    // Aquí podrías agregar la lógica para registrar al usuario con la información proporcionada
    // Por ejemplo, una llamada a tu API para enviar los datos al servidor
    // Y manejar la lógica de registro
    // Aquí podrías agregar la lógica para registrar al usuario
    closeRegisterModal(); // Cierra el modal después de registrar al usuario
  };

  return (
    <View style={styles.container}>

      <Image source={require('../../imagenes/logo.png')} style={styles.logo} />

      <Text style={{fontSize:32, fontWeight:'bold', marginBottom:20, color:'#91daff'}}>BIENVENIDO</Text>

      <Text style={styles.title}>Registro</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar contraseña"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.customButton} onPress={handleRegistration}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.return} onPress={handleCancel}>
        <Text style={{fontSize: 16, textDecorationLine: 'underline'}}>Volver</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 100,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
    padding: 10,
    width: 300,
    borderRadius: 50,
    textAlign: 'center', // Centrar texto dentro del input
    alignSelf: 'center', // Centrar el input en el contenedor
  },
  customButton: {
    width: 200,
    backgroundColor: '#252850', // Cambia el color de fondo del botón
    padding: 10,
    borderRadius: 50,
    margin: 10,
  },
  buttonText: {
    color: '#fff', // Cambia el color del texto del botón
    textAlign: 'center',
    fontSize: 16,
  },
  return: {
    paddingTop: 10,
    textAlign: 'center',
    textDecorationLine: 'underline', // Para dar apariencia de enlace
  }
});

export default RegisterForm;
