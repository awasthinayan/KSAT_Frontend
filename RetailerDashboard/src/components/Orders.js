import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { commonStyles, colors } from '../../styles/styles'; 

export default function Orders() {
  return (
    <View style={styles.screenContainer}>
      <Text style={commonStyles.sectionTitle}>Orders List</Text>
      <View style={commonStyles.card}>
        <Text style={styles.placeholderText}>This is the simplified Orders content.</Text>
        <Text style={styles.placeholderText}>You can build out the order table/list here.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Use minimal styles, relying heavily on commonStyles
  screenContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background, // Changed to background color for contrast
  },
  placeholderText: {
    color: colors.textSecondary,
    fontSize: 16,
    marginBottom: 8,
  }
});
