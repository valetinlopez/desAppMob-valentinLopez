import { Image, StyleSheet, Text, View } from 'react-native';

import { colors } from '../theme/colors';

export default function CoffeeDrinkCard({ coffee }) {
  return (
    <View style={styles.card}>
      {coffee.image ? <Image source={{ uri: coffee.image }} style={styles.image} /> : null}

      <View style={styles.body}>
        <View style={styles.header}>
          <Text style={styles.category}>
            {coffee.category === 'hot' ? 'Caliente' : 'Frio'}
          </Text>
          <Text style={styles.title}>{coffee.title}</Text>
        </View>

        <Text style={styles.description}>{coffee.description}</Text>

        <View style={styles.ingredientsBox}>
          <Text style={styles.ingredientsLabel}>Ingredientes</Text>
          <Text style={styles.ingredientsText}>
            {coffee.ingredients.length > 0
              ? coffee.ingredients.join(' - ')
              : 'No informados'}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 190,
    backgroundColor: '#eadbcf',
  },
  body: {
    padding: 16,
    gap: 12,
  },
  header: {
    gap: 6,
  },
  category: {
    alignSelf: 'flex-start',
    backgroundColor: '#f2e4d6',
    color: colors.primaryDark,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  title: {
    color: colors.text,
    fontSize: 22,
    fontWeight: '800',
  },
  description: {
    color: colors.textSoft,
    lineHeight: 21,
  },
  ingredientsBox: {
    backgroundColor: colors.input,
    borderRadius: 14,
    padding: 12,
    gap: 4,
  },
  ingredientsLabel: {
    color: colors.primaryDark,
    fontWeight: '700',
  },
  ingredientsText: {
    color: colors.text,
    lineHeight: 20,
  },
});
