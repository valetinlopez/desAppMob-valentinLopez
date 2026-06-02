import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../theme/colors';

export default function MenuCard({ burger }) {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <Text style={styles.name}>{burger.name}</Text>
        <Text style={styles.price}>{burger.price}</Text>
      </View>
      <Text style={styles.tag}>{burger.tag}</Text>
      <Text style={styles.description}>{burger.description}</Text>
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
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  name: {
    flex: 1,
    color: colors.text,
    fontSize: 18,
    fontWeight: '800',
  },
  price: {
    color: colors.primary,
    fontWeight: '800',
    fontSize: 16,
  },
  tag: {
    alignSelf: 'flex-start',
    backgroundColor: colors.accentSoft,
    color: colors.surface,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 12,
    fontWeight: '700',
  },
  description: {
    color: colors.textSoft,
    lineHeight: 21,
  },
});
