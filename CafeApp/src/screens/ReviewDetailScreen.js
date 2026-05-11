import { Pressable, StyleSheet, Text, View } from 'react-native';

import RatingStars from '../components/RatingStars';
import ScreenContainer from '../components/ScreenContainer';
import { useAppContext } from '../contexts/AppContext';
import { colors } from '../theme/colors';
import { showConfirm } from '../utils/dialogs';

export default function ReviewDetailScreen({ navigation, route }) {
  const { removeReview } = useAppContext();
  const { review } = route.params;

  const handleDelete = () => {
    showConfirm('Eliminar review', 'Esta accion quitara esta ficha de tu historial.', async () => {
      await removeReview(review.id);
      navigation.navigate('ReviewList');
    });
  };

  return (
    <ScreenContainer contentStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{review.cafeName}</Text>
        <Text style={styles.label}>Dulzor: {review.sweetnessLevel}</Text>
        <RatingStars rating={review.rating} size={26} />

        <View style={styles.infoBlock}>
          <Text style={styles.blockTitle}>Notas de cafe</Text>
          <Text style={styles.blockText}>
            {review.notes || 'Todavia no agregaste notas para esta degustacion.'}
          </Text>
        </View>

        <View style={styles.infoBlock}>
          <Text style={styles.blockTitle}>Favorito</Text>
          <Text style={styles.blockText}>{review.favorite ? 'Si' : 'No'}</Text>
        </View>

        <Pressable
          style={styles.editButton}
          onPress={() => navigation.navigate('ReviewForm', { review })}
        >
          <Text style={styles.editButtonText}>Editar ficha</Text>
        </Pressable>

        <Pressable style={styles.deleteButton} onPress={handleDelete}>
          <Text style={styles.deleteButtonText}>Eliminar review</Text>
        </Pressable>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 20,
    gap: 14,
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    color: colors.text,
  },
  label: {
    color: colors.textSoft,
    fontSize: 16,
  },
  infoBlock: {
    backgroundColor: colors.input,
    borderRadius: 16,
    padding: 14,
    gap: 6,
  },
  blockTitle: {
    color: colors.primaryDark,
    fontWeight: '700',
  },
  blockText: {
    color: colors.text,
    lineHeight: 21,
  },
  editButton: {
    backgroundColor: colors.primary,
    borderRadius: 14,
    paddingVertical: 15,
    alignItems: 'center',
  },
  editButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: '#fff1ef',
    borderWidth: 1,
    borderColor: '#f1beb7',
    borderRadius: 14,
    paddingVertical: 15,
    alignItems: 'center',
  },
  deleteButtonText: {
    color: colors.danger,
    fontWeight: '700',
    fontSize: 16,
  },
});
