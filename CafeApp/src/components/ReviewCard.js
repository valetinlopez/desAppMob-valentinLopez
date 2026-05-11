import { Pressable, StyleSheet, Text, View } from 'react-native';

import RatingStars from './RatingStars';
import { colors } from '../theme/colors';

export default function ReviewCard({ review, onPress }) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.header}>
        <Text style={styles.title}>{review.cafeName}</Text>
        {Boolean(review.favorite) && <Text style={styles.favorite}>Favorito</Text>}
      </View>

      <Text style={styles.label}>Dulzor: {review.sweetnessLevel}</Text>
      <RatingStars rating={review.rating} />

      {review.notes ? (
        <Text style={styles.notes} numberOfLines={2}>
          {review.notes}
        </Text>
      ) : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    gap: 12,
  },
  title: {
    flex: 1,
    fontSize: 19,
    fontWeight: '700',
    color: colors.text,
  },
  favorite: {
    color: colors.favorite,
    fontWeight: '700',
  },
  label: {
    color: colors.textSoft,
    marginBottom: 8,
  },
  notes: {
    color: colors.text,
    marginTop: 10,
    lineHeight: 20,
  },
});
