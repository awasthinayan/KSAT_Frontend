import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import { colors } from './styles/styles';

// --- UPDATED IMPORTS FOR EXTERNAL SCREENS --- //
// ⚠️ ASSUMING you've copied the original functions into these files
import HomeScreen from './src/components/HomeScreen';
import ListCropsScreen from './src/components/ListCropScreen';
import ScanQRScreen from './src/components/ScanQRSceen';
import AlertsScreen from './src/components/AlertsScreen';
import ProfileScreen from './src/components/ProfileScreen';

// --- BOTTOM TABS --- //
const Tab = createBottomTabNavigator();

export default function ReatilerDashboard() {
  return (
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
            height: 60,
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
  );
}

// ⚠️ Note: The styles block is usually kept in App.js 
// or its own styles file, but since the screen logic 
// is gone, we can remove the unnecessary ones.
// However, the original styles (which use 'colors') 
// are needed, so they are kept.

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 20,
  },
  card: {
    backgroundColor: colors.cardBackground,
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: colors.textPrimary,
  },
});