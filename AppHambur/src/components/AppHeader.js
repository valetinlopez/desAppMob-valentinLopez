import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '../theme/colors';

function HamburgerIcon() {
  return (
    <View style={styles.iconWrap}>
      <View style={styles.iconBar} />
      <View style={styles.iconBar} />
      <View style={styles.iconBar} />
    </View>
  );
}

export default function AppHeader({ title, subtitle, onOpenMenu }) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.menuButton} onPress={onOpenMenu}>
        <HamburgerIcon />
      </Pressable>

      <View style={styles.copy}>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    marginBottom: 18,
  },
  menuButton: {
    width: 50,
    height: 50,
    borderRadius: 16,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  iconWrap: {
    gap: 4,
  },
  iconBar: {
    width: 18,
    height: 2,
    borderRadius: 99,
    backgroundColor: colors.white,
  },
  copy: {
    flex: 1,
    gap: 3,
  },
  subtitle: {
    color: colors.primaryDark,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    fontSize: 12,
    fontWeight: '700',
  },
  title: {
    color: colors.text,
    fontSize: 24,
    fontWeight: '800',
  },
});
