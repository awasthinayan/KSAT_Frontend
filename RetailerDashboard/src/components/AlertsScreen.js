import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';

// Adjust the path to your colors file as needed
import { colors } from '../../styles/styles'; 

// --- SCREEN COMPONENT --- //
export default function AlertsScreen() {
  // Mock data for alerts
  const alertsData = [
    {
      id: 1,
      type: 'Price Drop',
      message: '🚨 **Price Alert:** Tomato price dropped by ₹5/kg in the Guntur mandi.',
      icon: 'trending-down',
      color: colors.danger, // Assuming danger is red
      time: '1 hour ago',
    },
    {
      id: 2,
      type: 'Order Update',
      message: '✅ **Order #401 Confirmed:** Your 500kg Tomato order is confirmed for pickup.',
      icon: 'check-circle',
      color: colors.primary, // Assuming primary is green/success
      time: '3 hours ago',
    },
    {
      id: 3,
      type: 'Weather Warning',
      message: '🌧️ **Weather Alert:** Heavy rainfall expected tonight. Secure harvested crops.',
      icon: 'cloud-lightning',
      color: colors.secondary, // Assuming secondary is yellow/warning
      time: 'Yesterday',
    },
    {
      id: 4,
      type: 'Mandate',
      message: '📜 New government mandate on grain storage standards published.',
      icon: 'file-text',
      color: colors.textSecondary,
      time: '2 days ago',
    },
  ];

  const AlertItem = ({ alert }) => (
    <View style={styles.alertCard}>
      <Feather name={alert.icon} size={24} color={alert.color} style={styles.alertIcon} />
      <View style={styles.alertContent}>
        <Text style={styles.alertMessage}>
          {alert.message}
        </Text>
        <Text style={styles.alertTime}>{alert.time}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <Text style={styles.headerTitle}>🔔 Alerts & Notifications</Text>
      <ScrollView style={styles.container}>
        {alertsData.map((alert) => (
          <AlertItem key={alert.id} alert={alert} />
        ))}
        
        {alertsData.length === 0 && (
          <Text style={styles.noAlerts}>You are all caught up! No new alerts.</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

// --- STYLES FOR THIS SCREEN --- //
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.textPrimary,
    padding: 16,
    paddingBottom: 8,
    paddingTop:50,
  },
  alertCard: {
    flexDirection: 'row',
    backgroundColor: colors.cardBackground,
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'flex-start',
    elevation: 1,
    shadowColor: colors.shadow || '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  alertIcon: {
    marginRight: 12,
    marginTop: 2,
  },
  alertContent: {
    flex: 1,
  },
  alertMessage: {
    fontSize: 14,
    color: colors.textPrimary,
    marginBottom: 4,
  },
  alertTime: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  noAlerts: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 16,
    color: colors.textSecondary,
  },
});