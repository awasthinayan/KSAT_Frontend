import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// Navigation
import AppNavigator from './navigation/AppNavigator';
export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
          <AppNavigator/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}