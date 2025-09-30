import { StyleSheet } from 'react-native';

// Color Palette
export const colors = {
  primary: '#38a169', // Bright Green
  background: '#f4f7f9', // Light Gray background for the screen
  cardBackground: '#ffffff', // White
  textPrimary: '#1a202c', // Dark text
  textSecondary: '#718096', // Gray text
  border: '#e2e8f0', // Light border
  active: '#e6fffa', // Light Green active state background
  revenue: '#e9f7ef', // Very light green for revenue stat background
};

// Common/Layout Styles
export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  // Style for the main content area (Sidebar + Dashboard)
  mainContentRow: {
    flex: 1,
    flexDirection: 'row',
    // On mobile, this will likely be stacked or the sidebar hidden,
    // but for the visible two-column design, we use row.
  },
  card: {
    backgroundColor: colors.cardBackground,
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: 10,
  }
});
