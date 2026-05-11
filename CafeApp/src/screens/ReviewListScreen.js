import { useMemo, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

import ReviewCard from '../components/ReviewCard';
import ScreenContainer from '../components/ScreenContainer';
import { useAppContext } from '../contexts/AppContext';
import { colors } from '../theme/colors';

export default function ReviewListScreen({ navigation }) {
  const { reviews } = useAppContext();
  const [favoritesOnly, setFavoritesOnly] = useState(false);

  const filteredReviews = useMemo(() => {
    if (!favoritesOnly) {
      return reviews;
    }

    return reviews.filter((review) => Boolean(review.favorite));
  }, [favoritesOnly, reviews]);

  return (
    <ScreenContainer contentStyle={styles.container}>
      <View style={styles.toolbar}>
        <View>
          <Text style={styles.title}>Tu bitacora de cafes</Text>
          <Text style={styles.subtitle}>
            Revisa tu historial, abre cada ficha y manten ordenadas tus degustaciones.
          </Text>
        </View>

        <Pressable
          style={[styles.filterButton, favoritesOnly && styles.filterButtonActive]}
          onPress={() => setFavoritesOnly((prev) => !prev)}
        >
          <Text
            style={[
              styles.filterButtonText,
              favoritesOnly && styles.filterButtonTextActive,
            ]}
          >
            {favoritesOnly ? 'Ver todas' : 'Solo favoritos'}
          </Text>
        </Pressable>
      </View>

      <FlatList
        data={filteredReviews}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <ReviewCard
            review={item}
            onPress={() => navigation.navigate('ReviewDetail', { review: item })}
          />
        )}
        ListEmptyComponent={
          <View style={styles.emptyCard}>
            <Text style={styles.emptyTitle}>Aun no registraste degustaciones.</Text>
            <Text style={styles.emptyText}>
              Crea una ficha desde el panel principal y la veras listada aqui.
            </Text>
          </View>
        }
        showsVerticalScrollIndicator={false}
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  toolbar: {
    gap: 12,
    marginBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.text,
  },
  subtitle: {
    color: colors.textSoft,
    lineHeight: 22,
  },
  filterButton: {
    alignSelf: 'flex-start',
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  filterButtonActive: {
    backgroundColor: colors.surface,
    borderColor: colors.surface,
  },
  filterButtonText: {
    color: colors.text,
    fontWeight: '700',
  },
  filterButtonTextActive: {
    color: '#fff',
  },
  emptyCard: {
    marginTop: 20,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 18,
    padding: 18,
    gap: 8,
  },
  emptyTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '700',
  },
  emptyText: {
    color: colors.textSoft,
    lineHeight: 20,
  },
});
