import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { commonStyles, colors } from '../../styles/styles';

const StatCard = ({ title, value, isRevenue = false }) => (
  <View style={[styles.statCard, isRevenue && styles.revenueCard]}>
    <Text style={styles.statTitle}>{title}</Text>
    <Text style={[styles.statValue, isRevenue && { color: colors.primary }]}>
      {value}
    </Text>
  </View>
);

const QuickActionButton = ({ title }) => (
  <View style={styles.quickActionButton}>
    <Text style={styles.quickActionButtonText}>{title}</Text>
  </View>
);

const ActivityItem = ({ text }) => (
  <View style={styles.activityItem}>
    <View style={styles.activityBullet} />
    <Text style={styles.activityText}>{text}</Text>
  </View>
);

export default function Dashboard() {
  return (
    <View style={styles.dashboardContainer}>
      <Text style={commonStyles.sectionTitle}>Dashboard</Text>

      {/* Stats Section */}
      <View style={styles.statsContainer}>
        <StatCard title="Stats" value="24" />
        <StatCard title="Revenue" value="₹2.4L" isRevenue={true} />
      </View>

      {/* Quick Actions Section */}
      <View style={styles.section}>
        <Text style={styles.subTitle}>Quick Actions</Text>
        <View style={styles.actionsContainer}>
          <QuickActionButton title="Action 1" />
          <QuickActionButton title="Action 2" />
        </View>
      </View>

      {/* Recent Activity Section */}
      <View style={styles.section}>
        <Text style={styles.subTitle}>Recent Activity</Text>
        <View style={styles.activityList}>
          <ActivityItem text="Activity item 1" />
          <ActivityItem text="Activity item 2" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dashboardContainer: {
    flex: 1,
    padding: 20,
    paddingTop:40,
    // We match the style of the main dashboard panel on the right
    backgroundColor: colors.cardBackground,
  },
  statsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    gap: 10, // Spacing between cards
  },
  statCard: {
    ...commonStyles.card,
    flex: 1, // Each card takes equal width
    padding: 12,
    borderLeftWidth: 4,
    borderLeftColor: colors.border,
  },
  revenueCard: {
    backgroundColor: colors.revenue,
    borderLeftColor: colors.primary,
  },
  statTitle: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  statValue: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  section: {
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: 8,
  },
  actionsContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  quickActionButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 6,
    backgroundColor: colors.cardBackground,
  },
  quickActionButtonText: {
    color: colors.textPrimary,
    fontWeight: '500',
  },
  activityList: {
    paddingLeft: 5,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  activityBullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.primary,
    marginRight: 8,
  },
  activityText: {
    color: colors.textPrimary,
    fontSize: 14,
  }
});
