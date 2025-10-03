import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import { colors } from './styles/styles';

// --- Screens ---
import HomeScreen from './src/components/HomeScreen';
import ListCropsScreen from './src/components/ListCropScreen';
import ScanQRScreen from './src/components/ScanQRSceen';
import AlertsScreen from './src/components/AlertsScreen';
import ProfileScreen from './src/components/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function TransportPartnerDashboard() {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') iconName = 'home';
            else if (route.name === 'List Crops') iconName = 'package';
            else if (route.name === 'Scan QR') iconName = 'camera';
            else if (route.name === 'Alerts') iconName = 'bell';
            else if (route.name === 'Profile') iconName = 'user';

            return <Feather name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.textSecondary,
          tabBarStyle: {
            height: 90,
            paddingBottom: 5,
            paddingTop: 5,
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="List Crops" component={ListCropsScreen} />
        <Tab.Screen name="Scan QR" component={ScanQRScreen} />
        <Tab.Screen name="Alerts" component={AlertsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background, // 🎨 global background
    
  },
});
