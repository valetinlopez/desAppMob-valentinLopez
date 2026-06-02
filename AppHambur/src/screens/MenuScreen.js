import { StyleSheet, Text } from 'react-native';

import MenuCard from '../components/MenuCard';
import ScreenContainer from '../components/ScreenContainer';
import { burgerMenu } from '../data/menu';
import { colors } from '../theme/colors';

export default function MenuScreen() {
  return (
    <ScreenContainer scroll contentStyle={styles.container}>
      <Text style={styles.description}>
        Un menu corto, fuerte y moderno, pensado para una hamburgueseria bien urbana.
      </Text>

      {burgerMenu.map((burger) => (
        <MenuCard key={burger.id} burger={burger} />
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
