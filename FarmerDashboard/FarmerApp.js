import React, { useState } from 'react'; // Import useState for state management
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
// Import SafeAreaProvider and useSafeAreaInsets instead of SafeAreaView
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Feather, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'; // Added Ionicons just in case

import { commonStyles, colors } from './styles/styles';
import Sidebar from './src/components/sidebar'; // Corrected capitalization based on file path
import Dashboard from './src/components/Dashboard';
import Orders from './src/components/Orders';
import MyProducts from './src/components/MyProducts'; // <<< IMPORT ADDED HERE

// Helper function to render the current screen component based on the route
const renderScreen = (route) => {
  switch (route) {
    case 'Orders':
      return <Orders />;
    case 'MyProducts': // <<< ROUTE ADDED HERE
      return <MyProducts />;
    case 'Dashboard':
    case 'MarketPrices':
    case 'Notifications':
    case 'Profile':
    default:
      // Fallback for unimplemented routes
      return <Dashboard />; 
  }
};


// Custom Header Component (now accepts the sidebar toggle function)
const AppHeader = ({ onToggleSidebar }) => {
  const insets = useSafeAreaInsets();
  
  // Use a fallback for colors in case the style import is still failing in some environments
  const headerBackgroundColor = colors?.primary || '#3b82f6'; 
  const iconColor = colors?.cardBackground || '#ffffff';

  return (
    <View style={[styles.header, { paddingTop: insets.top, backgroundColor: headerBackgroundColor }]}>
      {/* Left Icons (Menu) - Now toggles the sidebar */}
      <TouchableOpacity style={styles.iconButton} onPress={onToggleSidebar}> 
        <Feather name="menu" size={25} color={iconColor} />
      </TouchableOpacity>
  
      {/* Title */}
      <Text style={[styles.headerTitle, { color: iconColor }]}>Farmer Dashboard</Text>
      
      {/* Right Icons (Notifications, User, Logout) */}
      <View style={styles.rightIcons}>
        <TouchableOpacity style={styles.iconButton}>
          {/* Bell with red dot */}
          <View>
            <Feather name="bell" size={22} color={iconColor} />
            <View style={styles.notificationDot} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Feather name="user" size={22} color={iconColor} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <MaterialCommunityIcons name="arrow-right-thin" size={24} color={iconColor} />
        </TouchableOpacity>
      </View>
    </View>
  );
};


// Main App Component wrapped with safe area context
const AppContent = () => {
  // State to manage which screen is currently visible
  const [currentRoute, setCurrentRoute] = useState('Dashboard'); 
  // State to manage sidebar visibility
  const [isSidebarVisible, setIsSidebarVisible] = useState(true); 

  const toggleSidebar = () => {
    setIsSidebarVisible(prev => !prev);
  };

  const handleNavigate = (route) => {
    setCurrentRoute(route);
  }
  
  return (
    <View style={commonStyles.container}>
      {/* Ensures the status bar respects the design */}
      <StatusBar barStyle="light-content" backgroundColor={colors?.primary || '#3b82f6'} />
      
      {/* 1. Header (Top Bar) */}
      <AppHeader onToggleSidebar={toggleSidebar} />
      
      {/* 2. Main Content Area (Sidebar + Current Screen) */}
      <View style={commonStyles.mainContentRow}>
        {/* Conditional rendering for Sidebar */}
        {isSidebarVisible && (
          <Sidebar 
            currentRoute={currentRoute} 
            onNavigate={setCurrentRoute} 
          />
        )}
        
        {/* Current Screen Content - takes all remaining space */}
        <View style={styles.contentArea}>
          {renderScreen(currentRoute)}
        </View>
      </View>
    </View>
  );
};


export default function FarmerApp() {
  return (
    <SafeAreaProvider>
      <AppContent />
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // Using style property directly for safer fallback
    paddingHorizontal: 5,
    paddingBottom: 10, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  headerTitle: {
    fontSize: 19,
    fontWeight: '700',
    flex: 1, 
    marginLeft: 10,
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    padding: 5,
    marginLeft: 15,
  },
  notificationDot: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'red',
    borderWidth: 1,
    borderColor: '#3b82f6', // Fallback for primary color
  },
  // Style for the main content area (Dashboard/other screens)
  contentArea: {
    flex:1,
  }
});
