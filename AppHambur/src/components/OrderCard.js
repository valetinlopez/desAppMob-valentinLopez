import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../theme/colors';

export default function OrderCard({ order }) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.id}>{order.id}</Text>
        <Text style={styles.status}>{order.status}</Text>
      </View>
      <Text style={styles.customer}>{order.customer}</Text>
      <Text style={styles.items}>{order.items}</Text>
      <Text style={styles.eta}>Tiempo estimado: {order.eta}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: 20,
    padding: 18,
    borderWidth: 1,
    borderColor: colors.border,
    gap: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  id: {
    color: colors.primaryDark,
    fontWeight: '800',
  },
  status: {
    color: colors.success,
    fontWeight: '700',
  },
  customer: {
    color: colors.text,
    fontWeight: '700',
    fontSize: 17,
  },
  items: {
    color: colors.textSoft,
    lineHeight: 21,
  },
  eta: {
    color: colors.text,
    fontWeight: '600',
  },
});
