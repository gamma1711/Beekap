import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Modal, TextInput, Button, Image } from 'react-native';

const Inventory = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newProduct, setNewProduct] = useState({ description: '', quantity: '', date: '' });
  const [inventoryData, setInventoryData] = useState([
    { id: '1', description: 'Producto 1', quantity: 10, date: '2023-11-10' },
    { id: '2', description: 'Producto 2', quantity: 15, date: '2023-11-11' },
    // ... otros productos en tu inventario
  ]);

  const handleAddProduct = () => {
    if (!newProduct.description || !newProduct.quantity || !newProduct.date) {
      alert('Completa todos los campos antes de agregar un nuevo producto.');
      return;
    }

    const newProductId = String(inventoryData.length + 1);

    // Crear el nuevo producto
    const newInventoryItem = {
      id: newProductId,
      description: newProduct.description,
      quantity: parseInt(newProduct.quantity), // Asegúrate de convertir la cantidad a un número
      date: newProduct.date,
    };

    // Actualizar el estado de la lista
    setInventoryData((prevInventoryData) => [...prevInventoryData, newInventoryItem]);

    // Limpia el formulario y cierra el modal
    setNewProduct({ description: '', quantity: '', date: '' });
    setIsModalVisible(false);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleInventoryItemPress(item)}>
      <View style={styles.inventoryItem}>
        <Text style={styles.itemDescription}>{item.description}</Text>
        <Text style={styles.itemQuantity}>Cantidad: {item.quantity}</Text>
        <Text style={styles.itemDate}>Fecha: {item.date}</Text>
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
      <View style={{ padding: 16, flex: 1 }}>
        <FlatList
          data={inventoryData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />

        <TouchableOpacity style={styles.addButton} onPress={() => setIsModalVisible(true)}>
          <Text style={styles.addButtonText}>Agregar Nuevo Producto</Text>
        </TouchableOpacity>

        <Modal visible={isModalVisible} animationType="slide">
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Agregar Nuevo Producto</Text>
            <TextInput
              style={styles.input}
              placeholder="Descripción"
              value={newProduct.description}
              onChangeText={(text) => setNewProduct({ ...newProduct, description: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Cantidad"
              value={newProduct.quantity}
              onChangeText={(text) => setNewProduct({ ...newProduct, quantity: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Fecha"
              value={newProduct.date}
              onChangeText={(text) => setNewProduct({ ...newProduct, date: text })}
            />
            <TouchableOpacity style={styles.addButton} onPress={handleAddProduct}>
              <Text style={styles.addButtonText}>Agregar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addButton} onPress={() => setIsModalVisible(false)}>
              <Text style={styles.addButtonText}>Cancelar</Text>
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
    backgroundColor: '#fec75dr',
  },
  bannerImage: {
    width: 200,
    height: 50,
    resizeMode: 'contain',
  },
  inventoryItem: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 16,
    margin: 5,
    borderRadius: 10,
  },
  itemDescription: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemQuantity: {
    fontSize: 16,
  },
  itemDate: {
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#FEC75D',
    padding: 16,
    borderRadius: 8,
    marginVertical: 5,
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff9e'
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
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
});

export default Inventory;