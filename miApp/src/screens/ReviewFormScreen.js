import { useMemo, useState } from 'react';
import {
  Alert,
  Pressable,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';

import ScreenContainer from '../components/ScreenContainer';
import RatingStars from '../components/RatingStars';
import { useAppContext } from '../contexts/AppContext';
import { colors } from '../theme/colors';

const ratingOptions = [1, 2, 3, 4, 5];

export default function ReviewFormScreen({ navigation, route }) {
  const existingReview = route.params?.review;
  const { saveReview } = useAppContext();

  const initialState = useMemo(
    () => ({
      cafeName: existingReview?.cafeName || '',
      sweetnessLevel: existingReview?.sweetnessLevel || '',
      rating: String(existingReview?.rating || 3),
      notes: existingReview?.notes || '',
      favorite: Boolean(existingReview?.favorite),
    }),
    [existingReview]
  );

  const [form, setForm] = useState(initialState);

  const updateField = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = async () => {
    const result = await saveReview(form, existingReview?.id);

    if (!result.ok) {
      Alert.alert('No se pudo guardar', result.message);
      return;
    }

    Alert.alert('Listo', result.message);
    navigation.navigate('ReviewList');
  };

  return (
    <ScreenContainer scroll contentStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>
          {existingReview ? 'Editar review' : 'Nueva review de cafe'}
        </Text>
        <Text style={styles.subtitle}>
          Carga nombre del cafe, nivel de dulzor, puntuacion y un comentario personal.
        </Text>

        <TextInput
          placeholder="Nombre del cafe o bebida"
          placeholderTextColor={colors.textSoft}
          value={form.cafeName}
          onChangeText={(value) => updateField('cafeName', value)}
          style={styles.input}
        />

        <TextInput
          placeholder="Nivel de dulzor"
          placeholderTextColor={colors.textSoft}
          value={form.sweetnessLevel}
          onChangeText={(value) => updateField('sweetnessLevel', value)}
          style={styles.input}
        />

        <View style={styles.ratingBox}>
          <Text style={styles.sectionLabel}>Puntuacion</Text>
          <RatingStars rating={form.rating} size={22} />
          <View style={styles.ratingRow}>
            {ratingOptions.map((option) => {
              const isActive = Number(form.rating) === option;

              return (
                <Pressable
                  key={option}
                  style={[styles.ratingChip, isActive && styles.ratingChipActive]}
                  onPress={() => updateField('rating', String(option))}
                >
                  <Text
                    style={[
                      styles.ratingChipText,
                      isActive && styles.ratingChipTextActive,
                    ]}
                  >
                    {option}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>

        <TextInput
          placeholder="Por que te gusto este cafe"
          placeholderTextColor={colors.textSoft}
          value={form.notes}
          onChangeText={(value) => updateField('notes', value)}
          style={[styles.input, styles.notesInput]}
          multiline
          textAlignVertical="top"
        />

        <View style={styles.favoriteRow}>
          <View>
            <Text style={styles.sectionLabel}>Marcar como favorito</Text>
            <Text style={styles.favoriteHint}>Sirve para destacar tus mejores reseñas.</Text>
          </View>
          <Switch
            value={form.favorite}
            onValueChange={(value) => updateField('favorite', value)}
            thumbColor={form.favorite ? colors.favorite : '#f4f3f4'}
            trackColor={{ false: '#c7b5a8', true: '#efc3bc' }}
          />
        </View>

        <Pressable style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>
            {existingReview ? 'Guardar cambios' : 'Crear review'}
          </Text>
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
    fontSize: 28,
    fontWeight: '800',
    color: colors.text,
  },
  subtitle: {
    color: colors.textSoft,
    lineHeight: 22,
    marginBottom: 4,
  },
  input: {
    backgroundColor: colors.input,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 13,
    color: colors.text,
  },
  notesInput: {
    minHeight: 110,
  },
  ratingBox: {
    gap: 10,
  },
  sectionLabel: {
    color: colors.text,
    fontWeight: '700',
    fontSize: 15,
  },
  ratingRow: {
    flexDirection: 'row',
    gap: 10,
  },
  ratingChip: {
    width: 42,
    height: 42,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.input,
  },
  ratingChipActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  ratingChipText: {
    color: colors.text,
    fontWeight: '700',
  },
  ratingChipTextActive: {
    color: '#fff',
  },
  favoriteRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 16,
  },
  favoriteHint: {
    color: colors.textSoft,
    marginTop: 4,
    maxWidth: 240,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 14,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 4,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});
