import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  SafeAreaView, 
  TouchableOpacity, // Import TouchableOpacity for the button
  Alert // Import Alert for confirmation dialog
} from 'react-native';
import { Feather } from '@expo/vector-icons'; // Import Feather icon

// Adjust the path to your colors file as needed
import { colors } from '../../styles/styles'; 

// --- HANDLER FUNCTION --- //
// This function simulates the exit/logout process
const handleLogout = () => {
  // Use a confirmation dialog before logging out
  Alert.alert(
    "Confirm Logout",
    "Are you sure you want to log out of your account?",
    [
      {
        text: "Cancel",
        style: "cancel"
      },
      { 
        text: "Logout", 
        // ⚠️ In a real app, you would replace this line 
        // with your actual authentication logic (e.g., calling a logout API, clearing tokens, and navigating to the Login screen)
        onPress: () => console.log("User has logged out successfully") 
      }
    ],
    { cancelable: true }
  );
};


// --- SCREEN COMPONENT --- //
export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      
      {/* --- Custom Header for Greetings and Logout Button --- */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Welcome, Ravi Kumar</Text>
          <Text style={styles.location}>Guntur, Andhra Pradesh</Text>
        </View>

        {/* Exit Button */}
        <TouchableOpacity 
          style={styles.exitButton} 
          onPress={handleLogout}
          accessibilityLabel="Logout"
        >
          {/* Using 'log-out' icon from Feather */}
          <Feather name="log-out" size={24} color={colors.danger || 'red'} /> 
        </TouchableOpacity>
      </View>
      {/* --- End Custom Header --- */}

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Market Prices Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>📈 Market Prices Today</Text>
          <Text style={styles.cardText}>Tomato - ₹45/kg</Text>
          <Text style={[styles.cardText, styles.priceChange]}>Wheat - ₹22/kg</Text> 
          <Text style={styles.cardText}>Rice - ₹35/kg</Text>
        </View>

        {/* Active Orders Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>🛒 Active Orders</Text>
          <Text style={styles.cardText}>Tomato 500kg - ₹22,500 <Text style={{ color: colors.success }}>✅ Confirmed</Text></Text>
          <Text style={styles.cardText}>Wheat 200kg - In Transit</Text>
        </View>
        
        {/* Placeholder for future features */}
        <View style={styles.card}>
            <Text style={styles.cardTitle}>🌤️ Local Weather Forecast</Text>
            <Text style={styles.cardText}>Sunny, 32°C. Next rain expected in 3 days.</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

// --- STYLES FOR THIS SCREEN --- //
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Puts space between the text and button
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop:40,
    paddingBottom: 15,
    backgroundColor: colors.background, // Match background for seamless look
  },
  scrollContainer: {
    paddingHorizontal: 26,
    paddingBottom: 16,
  },
  greeting: {
    fontSize: 20, 
    fontWeight: '700',
    color: colors.textPrimary,
  },
  location: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  exitButton: {
    padding: 10,
  },
  card: {
    backgroundColor: colors.cardBackground,
    padding: 25,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: colors.shadow || '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, 
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: colors.primary,
    borderBottomWidth: 1,
    borderBottomColor: colors.border || '#EEE',
    paddingBottom: 8,
  },
  cardText: {
    fontSize: 14,
    lineHeight: 24,
    color: colors.textPrimary,
  },
  priceChange: {
    color: colors.danger || 'red',
    fontWeight: '500',
  },
});