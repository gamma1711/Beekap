import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

const Organizer = ({ navigation }) => {
  const handleActivityPress = () => {
    navigation.navigate('Actividades')
  };

  const handleProductionPress = () => {
    navigation.navigate('Produccion')
  };

  const handleInventoryPress = () => {
    navigation.navigate('Inventario')
  };

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.optionContainer} onPress={handleActivityPress}>
          <Image source={require('../../imagenes/apiarist.png')} style={styles.optionImage} />
          <Text style={styles.optionText}>Actividades</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionContainer} onPress={handleProductionPress}>
          <Image source={require('../../imagenes/honey.png')} style={styles.optionImage} />
          <Text style={styles.optionText}>Producción</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionContainer} onPress={handleInventoryPress}>
          <Image source={require('../../imagenes/apitherapy.png')} style={styles.optionImage} />
          <Text style={styles.optionText}>Inventario</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#ffff9e',
  },
  optionContainer: {
    alignItems: 'center',
    margin: 5,
    borderRadius: 50,
    borderWidth: 1,
    padding: 5,
    backgroundColor: 'white',
  },
  optionImage: {
    width: 150,
    height: 150,
  },
  optionText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Organizer;

