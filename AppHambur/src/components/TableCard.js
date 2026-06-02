import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../theme/colors';

export default function TableCard({ table }) {
  const statusStyle =
    table.status === 'Disponible'
      ? styles.available
      : table.status === 'Reservada'
        ? styles.reserved
        : styles.busy;

  return (
    <View style={styles.card}>
      <Text style={styles.name}>{table.name}</Text>
      <Text style={styles.guests}>{table.guests}</Text>
      <Text style={[styles.status, statusStyle]}>{table.status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    backgroundColor: colors.card,
    borderRadius: 20,
    padding: 18,
    borderWidth: 1,
    borderColor: colors.border,
    gap: 8,
  },
  name: {
    color: colors.text,
    fontWeight: '800',
    fontSize: 17,
  },
  guests: {
    color: colors.textSoft,
  },
  status: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    fontWeight: '700',
    overflow: 'hidden',
  },
  available: {
    backgroundColor: '#d7f1dc',
    color: colors.success,
  },
  reserved: {
    backgroundColor: '#ffe9b8',
    color: '#8c6500',
  },
  busy: {
    backgroundColor: '#f5d6d2',
    color: colors.danger,
  },
});
