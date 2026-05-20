import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import CoffeeDrinkCard from '../components/CoffeeDrinkCard';
import ScreenContainer from '../components/ScreenContainer';
import { fetchCoffees } from '../services/coffeeApi';
import { colors } from '../theme/colors';

const categories = [
  { label: 'Calientes', value: 'hot' },
  { label: 'Frios', value: 'iced' },
];

export default function CoffeeCatalogScreen() {
  const [selectedCategory, setSelectedCategory] = useState('hot');
  const [coffees, setCoffees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState('');

  const loadCoffees = async (category, options = {}) => {
    const { showLoader = true } = options;

    if (showLoader) {
      setLoading(true);
    } else {
      setRefreshing(true);
    }

    setError('');

    try {
      const result = await fetchCoffees(category);
      setCoffees(result);
    } catch (loadError) {
      setError(loadError.message || 'Ocurrio un error al cargar los cafes.');
      setCoffees([]);
    } finally {
      if (showLoader) {
        setLoading(false);
      } else {
        setRefreshing(false);
      }
    }
  };

  useEffect(() => {
    loadCoffees(selectedCategory);
  }, [selectedCategory]);

  const handleRefresh = () => {
    loadCoffees(selectedCategory, { showLoader: false });
  };

  return (
    <ScreenContainer contentStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Explorar cafes</Text>
        <Text style={styles.subtitle}>
          Consulta bebidas reales desde una API externa y compara opciones calientes y frias.
        </Text>
      </View>

      <View style={styles.filterRow}>
        {categories.map((category) => {
          const isActive = selectedCategory === category.value;

          return (
            <Pressable
              key={category.value}
              style={[styles.filterButton, isActive && styles.filterButtonActive]}
              onPress={() => setSelectedCategory(category.value)}
            >
              <Text
                style={[
                  styles.filterButtonText,
                  isActive && styles.filterButtonTextActive,
                ]}
              >
                {category.label}
              </Text>
            </Pressable>
          );
        })}
      </View>

      {loading ? (
        <View style={styles.feedbackCard}>
          <ActivityIndicator size="large" color={colors.primary} />
          <Text style={styles.feedbackText}>Cargando catalogo...</Text>
        </View>
      ) : null}

      {!loading && error ? (
        <View style={styles.feedbackCard}>
          <Text style={styles.errorTitle}>No pudimos cargar la API</Text>
          <Text style={styles.feedbackText}>{error}</Text>

          <Pressable
            style={styles.retryButton}
            onPress={() => loadCoffees(selectedCategory)}
          >
            <Text style={styles.retryButtonText}>Reintentar</Text>
          </Pressable>
        </View>
      ) : null}

      {!loading && !error ? (
        <FlatList
          style={styles.list}
          data={coffees}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CoffeeDrinkCard coffee={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          onRefresh={handleRefresh}
          refreshing={refreshing}
          ListEmptyComponent={
            <View style={styles.feedbackCard}>
              <Text style={styles.errorTitle}>No hay cafes para mostrar</Text>
              <Text style={styles.feedbackText}>
                La API respondio sin elementos en esta categoria.
              </Text>
            </View>
          }
        />
      ) : null}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  header: {
    gap: 8,
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
  filterRow: {
    flexDirection: 'row',
    gap: 12,
  },
  filterButton: {
    flex: 1,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
  },
  filterButtonActive: {
    backgroundColor: colors.surface,
    borderColor: colors.surface,
  },
  filterButtonText: {
    color: colors.text,
    fontWeight: '700',
    fontSize: 15,
  },
  filterButtonTextActive: {
    color: '#fff',
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 20,
  },
  feedbackCard: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 18,
    padding: 20,
    alignItems: 'center',
    gap: 12,
    marginTop: 8,
  },
  feedbackText: {
    color: colors.textSoft,
    lineHeight: 21,
    textAlign: 'center',
  },
  errorTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
  retryButton: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    paddingHorizontal: 18,
    paddingVertical: 12,
  },
  retryButtonText: {
    color: '#fff',
    fontWeight: '700',
  },
});
