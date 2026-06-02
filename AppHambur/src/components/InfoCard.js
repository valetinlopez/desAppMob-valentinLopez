import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../theme/colors';

export default function InfoCard({ eyebrow, title, description, highlight }) {
  return (
    <View style={[styles.card, highlight && styles.highlightCard]}>
      {eyebrow ? <Text style={styles.eyebrow}>{eyebrow}</Text> : null}
      <Text style={[styles.title, highlight && styles.highlightTitle]}>{title}</Text>
      {description ? (
        <Text style={[styles.description, highlight && styles.highlightDescription]}>
          {description}
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: 24,
    padding: 18,
    borderWidth: 1,
    borderColor: colors.border,
    gap: 8,
  },
  highlightCard: {
    backgroundColor: colors.surface,
    borderColor: colors.surface,
  },
  eyebrow: {
    color: colors.accent,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    fontSize: 12,
  },
  title: {
    color: colors.text,
    fontWeight: '800',
    fontSize: 22,
  },
  description: {
    color: colors.textSoft,
    lineHeight: 22,
  },
  highlightTitle: {
    color: colors.white,
  },
  highlightDescription: {
    color: '#f6ddd2',
  },
});
