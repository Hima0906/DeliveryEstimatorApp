import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductSelection from './components/ProductSelection';
import DeliveryEstimate from './components/DeliveryEstimate';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductSelection">
        <Stack.Screen name="ProductSelection" component={ProductSelection} />
        <Stack.Screen name="DeliveryEstimate" component={DeliveryEstimate} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
