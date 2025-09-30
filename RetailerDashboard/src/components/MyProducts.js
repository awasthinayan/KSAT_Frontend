import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// Use the relative path we established: out of 'components', into 'styles'
import { commonStyles, colors } from '../../styles/styles';

export default function MyProducts() {
  // Defensive checks for styles existence
  if (!commonStyles || !colors) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5F5F5' }}>
        <Text style={{ color: 'red' }}>Error: Could not load shared styles.</Text>
      </View>
    );
  }

  return (
    <View style={commonStyles.screenContent}>
      <Text style={{fontSize: 28, 
        fontWeight: 'bold', 
        color: 'green',
        paddingLeft: 15,
        paddingTop:20,
        margin:15}}>My Products</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Inventory Placeholder</Text>
        <Text style={styles.cardBody}>
          This is the simple view for managing your crops and livestock.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    // Ensure colors.cardBackground and other commonStyles properties are defined
    backgroundColor: colors.cardBackground,
    padding: 20,
    borderRadius: commonStyles.borderRadius,
    ...commonStyles.cardShadow,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.primary,
    marginBottom: 10,
  },
  cardBody: {
    fontSize: 14,
    color: colors.textSecondary,
  },
});
