import { Text, View } from 'react-native';

import { colors } from '../theme/colors';

export default function RatingStars({ rating, size = 18 }) {
  const safeRating = Math.max(0, Math.min(5, Number(rating) || 0));
  const stars = `${'★'.repeat(safeRating)}${'☆'.repeat(5 - safeRating)}`;

  return (
    <View>
      <Text style={{ fontSize: size, color: colors.accent }}>{stars}</Text>
    </View>
  );
}
