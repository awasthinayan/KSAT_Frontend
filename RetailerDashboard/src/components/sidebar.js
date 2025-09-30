import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

import { colors, commonStyles } from '../../styles/styles';

const NavItem = ({ iconName, label, isActive, onPress }) => {
  
  const IconComponent = 
    iconName === 'bell' ? Feather : 
    (iconName === 'home' ? Ionicons : MaterialCommunityIcons);
  
  return (
    <TouchableOpacity 
      style={[styles.navItem, isActive && styles.navItemActive]} 
      onPress={onPress}
    >
      <IconComponent 
        name={iconName} 
        size={20} 
        
        color={isActive ? colors.cardBackground : colors.textSecondary} 
        style={styles.navIcon}
      />
      <Text style={[styles.navText, isActive && styles.navTextActive]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

// Sidebar component now accepts props for navigation and current route
export default function Sidebar({ currentRoute, onNavigate }) {
  // Navigation items based on the user's requested list
  const navItems = [
    { label: 'Dashboard', icon: 'home', route: 'Dashboard' },
    { label: 'My Products', icon: 'cube-outline', route: 'MyProducts' },
    { label: 'Orders', icon: 'truck-outline', route: 'Orders' },
    { label: 'Market Prices', icon: 'trending-up', route: 'MarketPrices' },
    { label: 'Notifications', icon: 'bell-outline', route: 'Notifications' }, 
    { label: 'Profile', icon: 'account-outline', route: 'Profile' },
  ];

  return (
    <View style={styles.sidebarContainer}>
      <Text style={styles.navigationHeader}>Navigation</Text>
      <View style={styles.navGroup}>
        {navItems.map((item, index) => (
          <NavItem
            key={index}
            label={item.label}
            iconName={item.icon}
            // Logic updated to check against the currentRoute prop
            isActive={currentRoute === item.route} 
            // Logic updated to use the onNavigate prop
            onPress={() => {
              onNavigate(item.route); 
            }}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sidebarContainer: {
    width: 170, 
    backgroundColor: colors.cardBackground,
    padding: 15,
    borderRightWidth: 1,
    borderRightColor: colors.border,
    flexShrink: 0, 
  },
  navigationHeader: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.textPrimary,
    paddingVertical: 6,
    marginBottom: 4,
    paddingLeft:15,
    paddingHorizontal: 6,
  },
  navGroup: {
    flex: 1, 
  },
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12, 
    borderRadius: 8,
    marginVertical: 4,
  },
  navItemActive: {
    backgroundColor: colors.primary,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  navIcon: {
    marginRight: 10,
    width: 25, 
    textAlign: 'center',
  },
  navText: {
    fontSize: 15,
    fontWeight: '500',
    color: colors.textSecondary,
  },
  navTextActive: {
    color: colors.cardBackground,
    fontWeight: '600',
  }
});
