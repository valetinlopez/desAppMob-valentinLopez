import { Pressable, StyleSheet, Text, View } from 'react-native';

import ScreenContainer from '../components/ScreenContainer';
import { useAppContext } from '../contexts/AppContext';
import { colors } from '../theme/colors';

export default function MainMenuScreen({ navigation }) {
  const { currentUser, reviews, logout } = useAppContext();
  const favoriteCount = reviews.filter((review) => Boolean(review.favorite)).length;

  return (
    <ScreenContainer contentStyle={styles.container}>
      <View style={styles.heroCard}>
        <Text style={styles.eyebrow}>Panel personal</Text>
        <Text style={styles.title}>{currentUser?.fullName || currentUser?.username}</Text>
        <Text style={styles.subtitle}>
          Gestiona tus registros de cafe, destaca favoritos y manten tu experiencia siempre ordenada.
        </Text>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{reviews.length}</Text>
          <Text style={styles.statLabel}>Reviews</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{favoriteCount}</Text>
          <Text style={styles.statLabel}>Favoritos</Text>
        </View>
      </View>

      <View style={styles.actions}>
        <Pressable style={styles.primaryButton} onPress={() => navigation.navigate('ReviewForm')}>
          <Text style={styles.primaryButtonText}>Cargar nueva review</Text>
        </Pressable>

        <Pressable style={styles.secondaryButton} onPress={() => navigation.navigate('ReviewList')}>
          <Text style={styles.secondaryButtonText}>Ver lista de reviews</Text>
        </Pressable>

        <Pressable
          style={styles.secondaryButton}
          onPress={() => navigation.navigate('CoffeeCatalog')}
        >
          <Text style={styles.secondaryButtonText}>Explorar cafes desde API</Text>
        </Pressable>

        <Pressable style={styles.ghostButton} onPress={logout}>
          <Text style={styles.ghostButtonText}>Cerrar sesion</Text>
        </Pressable>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 18,
  },
  heroCard: {
    backgroundColor: colors.surface,
    borderRadius: 24,
    padding: 22,
    gap: 10,
  },
  eyebrow: {
    color: '#f4dbc0',
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontWeight: '700',
    fontSize: 12,
  },
  title: {
    color: '#fff',
    fontSize: 29,
    fontWeight: '800',
  },
  subtitle: {
    color: '#f8eee7',
    lineHeight: 22,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 14,
  },
  statCard: {
    flex: 1,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 20,
    padding: 18,
    alignItems: 'center',
    gap: 6,
  },
  statNumber: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.primaryDark,
  },
  statLabel: {
    color: colors.textSoft,
    fontWeight: '600',
  },
  actions: {
    gap: 14,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  secondaryButton: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: colors.text,
    fontWeight: '700',
    fontSize: 16,
  },
  ghostButton: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  ghostButtonText: {
    color: colors.danger,
    fontWeight: '700',
  },
});
