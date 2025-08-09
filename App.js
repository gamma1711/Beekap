import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/components/Login';
import Home from './src/components/HomeScreen';
import Organizer from './src/components/Organizer';
import Map from './src/components/Map';
import SocialNet from './src/components/SocialNet';
import ActivitiesNotebook from './src/components/ActivitiesNotebook';
import Inventory from './src/components/Inventory';
import Production from './src/components/Production';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name='Organizador' component={Organizer} />
        <Stack.Screen name='Mapa Apicola' component={Map} />
        <Stack.Screen name='Red Social' component={SocialNet} />
        <Stack.Screen name='Actividades' component={ActivitiesNotebook} />
        <Stack.Screen name='Inventario' component={Inventory} />
        <Stack.Screen name='Produccion' component={Production} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}