import { StyleSheet, Text, View } from 'react-native';

import ScreenContainer from '../components/ScreenContainer';
import TableCard from '../components/TableCard';
import { tables } from '../data/menu';
import { colors } from '../theme/colors';

export default function TablesScreen() {
  return (
    <ScreenContainer scroll contentStyle={styles.container}>
      <Text style={styles.description}>
        Organiza la sala y detecta rapido que mesas estan listas, ocupadas o reservadas.
      </Text>

      <View style={styles.grid}>
        {tables.map((table) => (
          <TableCard key={table.id} table={table} />
        ))}
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 14,
  },
  description: {
    color: colors.textSoft,
    lineHeight: 22,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
});
