import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity, Modal } from 'react-native';
import RegisterForm from './RegisterForms';
import PasswordRecoveryModal from './PasswordRecovery';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [registerModalVisible, setRegisterModalVisible] = useState(false);
  const [recoveryPasswordModalVisible, setRecoveryPasswordModalVisible] = useState(false);

  const handleLogin = () => {
    // Aquí deberías realizar la lógica de verificación de credenciales
    if (username === 'usuario' && password === 'contrasena') {
      navigation.navigate('Home');
    } else {
      alert('Credenciales incorrectas');
    }
  };

  const openRegisterModal = () => {
    setRegisterModalVisible(true);
  };

  const closeRegisterModal = () => {
    setRegisterModalVisible(false);
  };

  const openRecoveryPasswordModal = () => {
    setRecoveryPasswordModalVisible(true);
  };

  const closeRecoveryPasswordModal = () => {
    setRecoveryPasswordModalVisible(false);
  };

  return (
    <View style={styles.container}>

      <Image source={require('../../imagenes/logo.png')} style={styles.logo} />

      <Text style={styles.title}>BIENVENIDO</Text>

      {loggedIn ? null : (
        <View>
          <Text style={styles.bienvenida}>Inicia sesión o registrate para continuar</Text>
          <TextInput
            style={[styles.input, { textAlign: 'center' }]} // Añade textAlign para centrar el texto dentro del input
            placeholder="Nombre de usuario"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />

          <TextInput
            style={[styles.input, { textAlign: 'center' }]} // Añade textAlign para centrar el texto dentro del input
            placeholder="Contraseña"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />

          <Button title="Iniciar sesión" onPress={handleLogin} />

          <TouchableOpacity onPress={openRegisterModal}>
            <Text style={styles.registro}>Registrarse</Text>
          </TouchableOpacity>
          <Modal
            visible={registerModalVisible}
            animationType='slide'
          >
            <View style={styles.modalContent}>
              <RegisterForm closeRegisterModal={closeRegisterModal} />
            </View>
          </Modal>
          <TouchableOpacity onPress={openRecoveryPasswordModal}>
            <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
          </TouchableOpacity>
          <Modal
            visible={recoveryPasswordModalVisible}
            animationType='slide'
          >
            <View style={styles.modalContent}>
              <PasswordRecoveryModal closeModal={closeRecoveryPasswordModal} />
            </View>
          </Modal>
        </View>
      )}
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
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#91daff',
  },
  bienvenida: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    padding: 10,
    width: 300,
    borderRadius: 50,
    textAlign: 'center', // Centrar texto dentro del input
    alignSelf: 'center', // Centrar el input en el contenedor
  },
  registro: {
    paddingTop: 10,
    textAlign: 'center',
    textDecorationLine: 'underline', // Para dar apariencia de enlace
  },
  forgotPassword: {
    paddingTop: 10,
    textAlign: 'center',
    color: 'blue', // Puedes cambiar el color o estilos según tus preferencias
    textDecorationLine: 'underline', // Para dar apariencia de enlace
  },
  registerButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 8,
  },
  registerButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente para el modal
  },
});

export default Login;