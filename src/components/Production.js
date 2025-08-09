import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Modal, StyleSheet, Image, TextInput, Button } from 'react-native';

const Production = () => {
    const [addModalVisible, setAddModalVisible] = useState(false);
    const [watchModalVisible, setWatchModalVisible] = useState(false);
    const [selectedAccount, setSelectedAccount] = useState(null);
    const [newAccount, setNewAccount] = useState({ name: '', honeyAmount: '', pollenAmount: '', date: '' });
    const [productionAccounts, setProductionAccounts] = useState([
        { id: '1', name: 'Cuenta 1', honeyAmount: 50, pollenAmount: 20, date: '2023-11-10' },
        { id: '2', name: 'Cuenta 2', honeyAmount: 30, pollenAmount: 15, date: '2023-11-11' },
        // ... más cuentas de producción
    ]);

    useEffect(() => {
        // Aquí movemos la lógica de actualización del estado
        if (newAccount.name && newAccount.honeyAmount && newAccount.pollenAmount && newAccount.date) {
            setProductionAccounts((prevAccounts) => [
                ...prevAccounts,
                { id: (prevAccounts.length + 1).toString(), ...newAccount },
            ]);

            // Limpiar el formulario y cerrar el modal
            setNewAccount({ name: '', honeyAmount: '', pollenAmount: '', date: '' });
            setAddModalVisible(false);
        }
    }, [newAccount]); // Asegúrate de depender de newAccount en el arreglo de dependencias

    const handleAddAccount = () => {
        // Asegúrate de que newAccount tenga datos
        if (!newAccount.name || !newAccount.honeyAmount || !newAccount.pollenAmount || !newAccount.date) {
            alert('Por favor, completa todos los campos');
            return;
        }

        // Actualiza newAccount y deja que useEffect maneje la actualización del estado
        setNewAccount(newAccount);
    };


    const handleAccountPress = (account) => {
        setSelectedAccount(account);
        setWatchModalVisible(true);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleAccountPress(item)}>
            <View style={styles.accountItem}>
                <Text style={styles.accountName}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.banner}>
                <Image
                    source={require('../../imagenes/logoBanner.png')} style={styles.bannerImage}
                />
            </View>
            <View style={{ flex: 1, padding: 16, }}>
                <FlatList
                    data={productionAccounts}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />

                <TouchableOpacity style={styles.addButton} onPress={() => setAddModalVisible(true)}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Agregar Nueva Cuenta</Text>
                </TouchableOpacity>

                <Modal visible={addModalVisible} animationType="slide">
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Agregar Nueva Cuenta</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Nombre"
                            value={newAccount.name}
                            onChangeText={(text) => setNewAccount({ ...newAccount, name: text })}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Cantidad de Miel"
                            value={newAccount.honeyAmount}
                            onChangeText={(text) => setNewAccount({ ...newAccount, honeyAmount: text })}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Cantidad de Polen"
                            value={newAccount.pollenAmount}
                            onChangeText={(text) => setNewAccount({ ...newAccount, pollenAmount: text })}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Fecha"
                            value={newAccount.date}
                            onChangeText={(text) => setNewAccount({ ...newAccount, date: text })}
                        />
                        <TouchableOpacity style={styles.addButton} onPress={handleAddAccount}>
                            <Text style={styles.closeButtonText}>Agregar Cuenta</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.closeButton} onPress={() => setAddModalVisible(false)}>
                            <Text style={styles.closeButtonText}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>

                <Modal visible={watchModalVisible} animationType="slide">
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Detalles de Producción</Text>
                        {selectedAccount && (
                            <View>
                                <Text style={styles.textModal}>Cantidad de Miel: {selectedAccount.honeyAmount}</Text>
                                <Text style={styles.textModal}>Cantidad de Polen: {selectedAccount.pollenAmount}</Text>
                                <Text style={styles.textModal}>Fecha de Producción: {selectedAccount.date}</Text>
                            </View>
                        )}
                        <TouchableOpacity style={styles.closeButton} onPress={() => setWatchModalVisible(false)}>
                            <Text style={styles.closeButtonText}>Cerrar</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    banner: {
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#FEC75D',
    },
    bannerImage: {
        width: 200,
        height: 50,
        resizeMode: 'contain',
    },
    accountItem: {
        borderWidth: 1,
        borderColor: '#000',
        padding: 16,
        margin: 5,
        borderRadius: 10,
    },
    accountName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffff9e',
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    textModal: {
        borderWidth: 2,
        padding: 16,
        margin: 5,
        fontSize: 16,
        marginBottom: 16,
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    input: {
        backgroundColor: '#fff',
        height: 40,
        borderColor: '#000',
        borderWidth: 2,
        margin: 10,
        padding: 10,
        width: 300,
        borderRadius: 50,
        textAlign: 'center',
        alignSelf: 'center',
    },
    addButton: {
        backgroundColor: '#FEC75D',
        padding: 10,
        borderRadius: 8,
        margin: 5,
    },
    closeButton: {
        backgroundColor: '#FEC75D',
        padding: 10,
        borderRadius: 8,
        margin: 5,
    },
    closeButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default Production;
