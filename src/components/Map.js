import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const Map = () => {
    const [markers, setMarkers] = useState([]);

    const handleMapPress = (event) => {
        const coordinate = event.nativeEvent.coordinate;
        setMarkers([...markers, { id: markers.length.toString(), coordinate }]);
    };

    return (
        <View style={styles.container}>
            <View style={styles.mapContainer}>
                <MapView
                    style={styles.map}
                    onPress={handleMapPress}
                    initialRegion={{
                        latitude: 16.43333,
                        longitude: -95.01944,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    {markers.map((marker) => (
                        <Marker
                            key={marker.id}
                            coordinate={marker.coordinate}
                            title={`Marker ${marker.id}`}
                        />
                    ))}
                </MapView>
            </View>
            <View style={{height:'50%', backgroundColor:'#ffff9e'}}>
            <TouchableOpacity style={styles.clearButton}>
                    <Text style={styles.clearButtonText}>Añadir Zona</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.clearButton}>
                    <Text style={styles.clearButtonText}>Eliminar Zona</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.clearButton} onPress={() => setMarkers([])} >
                    <Text style={styles.clearButtonText}>Ver Todas Las Zonas</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mapContainer: {
        flex: 1, // Esto hará que esta vista ocupe el 50% superior de la pantalla
    },
    map: {
        flex: 1, // Esto debería permitir que el mapa se expanda para ocupar todo el espacio disponible
    },
    clearButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FEC75D',
        padding: 16,
        borderRadius: 8,
        margin: 10,
        height: '25%',
    },
    clearButtonText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default Map;