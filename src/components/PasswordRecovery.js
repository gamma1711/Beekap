import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet, Image } from 'react-native';

const PasswordRecoveryModal = ({ closeModal }) => {
    const [email, setEmail] = useState('');
    const [showCodeModal, setShowCodeModal] = useState(false);
    const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleRecoverPassword = () => {
        console.log('Solicitando recuperación de contraseña para:', email);
        //setShowCodeModal(true); // Abre el segundo modal al enviar el enlace
        setShowChangePasswordModal(true);
    };
    const handleVerifyCode = () => {
        console.log('Verificando código:', code);
        setShowChangePasswordModal(true); // Abrir el tercer modal al verificar el código
    };
    const handleChangePassword = () => {
        console.log('Cambiando contraseña a:', newPassword);
        // Lógica para cambiar la contraseña, por ejemplo, realizar una solicitud al servidor
        // Una vez completado el cambio de contraseña, puedes cerrar los modales o realizar la acción deseada.
    };

    return (

        <View style={styles.container}>

            <Image source={require('../../imagenes/logo.png')} style={styles.logo} />

            <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#91daff', textAlign: 'center' }}>Recuperar tu cuenta</Text>
            <Text style={{ fontSize: 16, textAlign: 'center' }}>Ingresa tu correo electronico para continuar</Text>
            <TextInput
                style={styles.input}
                placeholder="Correo electrónico"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <Text style={{ fontSize: 12, textAlign: 'auto', paddingTop: 10 }}>Podemos enviarte notificaciones por correo con fines de seguridad e inicio de sesión</Text>
            <TouchableOpacity style={styles.customButton} onPress={handleRecoverPassword}>
                <Text style={styles.buttonText}>Enviar enlace de recuperacion por correo electrónico</Text>
            </TouchableOpacity>
{/* 
            <Modal visible={showCodeModal} animationType='slide'>
                <View style={styles.containerModal}>
                    <Text>Ingrese el código</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="######"
                        value={code}
                        onChangeText={setCode}
                    />
                    <TouchableOpacity style={styles.customButton} onPress={handleVerifyCode}>
                        <Text style={styles.buttonText}>Verificar Código</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.return} onPress={() => setShowCodeModal(false)}>
                        <Text style={{ fontSize: 16, textDecorationLine: 'underline', textAlign: 'center' }}>Cerrar</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
*/}
            <Modal visible={showChangePasswordModal} animationType='slide'>
                <View style={styles.containerModal}>
                    <Image source={require('../../imagenes/logo.png')} style={styles.logo} />
                    <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#91daff', textAlign: 'center', paddingBottom:10}}>Restaura tu contraseña</Text>
                    <Text>Para </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nueva Contraseña"
                        value={newPassword}
                        onChangeText={setNewPassword}
                        secureTextEntry
                    />
                    <TouchableOpacity style={styles.customButton} onPress={handleChangePassword}>
                        <Text style={styles.buttonText}>Cambiar Contraseña</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.return} onPress={() => {
                        setShowChangePasswordModal(false);
                    }}>
                        <Text style={{ fontSize: 16, textDecorationLine: 'underline', textAlign: 'center' }}>Cerrar</Text>
                    </TouchableOpacity>
                </View>
            </Modal>

            <TouchableOpacity style={styles.return} onPress={closeModal}>
                <Text style={{ fontSize: 16, textDecorationLine: 'underline', textAlign: 'center' }}>Cerrar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 100,
    },
    containerModal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 100,
    },
    logo: {
        alignSelf: 'center',
        width: 200,
        height: 200,
        resizeMode: 'contain',
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
        width: 300,
        backgroundColor: '#252850',
        padding: 10,
        borderRadius: 50,
        margin: 10,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
    },
    return: {
        paddingTop: 10,
        textAlign: 'center',
        textDecorationLine: 'underline', // Para dar apariencia de enlace
    }
});

export default PasswordRecoveryModal;
