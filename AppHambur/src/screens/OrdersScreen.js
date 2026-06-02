import { StyleSheet, Text } from 'react-native';

import OrderCard from '../components/OrderCard';
import ScreenContainer from '../components/ScreenContainer';
import { orders } from '../data/menu';
import { colors } from '../theme/colors';

export default function OrdersScreen() {
  return (
    <ScreenContainer scroll contentStyle={styles.container}>
      <Text style={styles.description}>
        Revisa el estado de cocina y servicio para que cada pedido salga a tiempo.
      </Text>

      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
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
    marginBottom: 2,
  },
});
