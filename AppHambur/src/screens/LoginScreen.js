import { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import ScreenContainer from '../components/ScreenContainer';
import { useAppContext } from '../contexts/AppContext';
import { colors } from '../theme/colors';

export default function LoginScreen() {
  const { login } = useAppContext();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const result = await login(username, password);

    if (!result.ok) {
      Alert.alert('No se pudo iniciar sesion', result.message);
      return;
    }

    setUsername('');
    setPassword('');
  };

  return (
    <ScreenContainer scroll contentStyle={styles.container}>
      <StatusBar style="light" />

      <View style={styles.hero}>
        <View style={styles.heroBadge}>
          <Text style={styles.heroBadgeText}>Buenos Aires Burgers</Text>
        </View>
        <Text style={styles.heroTitle}>Gestion moderna para una hamburgueseria con ritmo porteno.</Text>
        <Text style={styles.heroSubtitle}>
          Entra a tu panel, revisa pedidos, organiza mesas y manten el menu siempre listo para el servicio.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Iniciar sesion</Text>
        <Text style={styles.cardSubtitle}>
          Usa cualquier usuario y clave para entrar a la demo de AppHambur.
        </Text>

        <TextInput
          placeholder="Usuario"
          placeholderTextColor={colors.textSoft}
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          style={styles.input}
        />
        <TextInput
          placeholder="Clave"
          placeholderTextColor={colors.textSoft}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />

        <Pressable style={styles.primaryButton} onPress={handleLogin}>
          <Text style={styles.primaryButtonText}>Entrar al salon</Text>
        </Pressable>

        <View style={styles.helperRow}>
          <Text style={styles.helperLabel}>Demo</Text>
          <Text style={styles.helperText}>Ejemplo: usuario `encargado` y clave `1234`</Text>
        </View>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    gap: 26,
    backgroundColor: colors.surface,
  },
  hero: {
    gap: 14,
    paddingTop: 28,
  },
  heroBadge: {
    alignSelf: 'flex-start',
    backgroundColor: colors.accent,
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 999,
  },
  heroBadgeText: {
    color: colors.surface,
    fontWeight: '800',
  },
  heroTitle: {
    color: colors.white,
    fontSize: 36,
    fontWeight: '800',
    lineHeight: 42,
  },
  heroSubtitle: {
    color: '#f7ddd1',
    fontSize: 16,
    lineHeight: 24,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: 28,
    padding: 22,
    gap: 14,
    borderWidth: 1,
    borderColor: '#5c3e36',
  },
  cardTitle: {
    color: colors.text,
    fontSize: 28,
    fontWeight: '800',
  },
  cardSubtitle: {
    color: colors.textSoft,
    lineHeight: 22,
    marginBottom: 6,
  },
  input: {
    backgroundColor: colors.input,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 14,
    color: colors.text,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    borderRadius: 16,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 6,
  },
  primaryButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '800',
  },
  helperRow: {
    backgroundColor: '#fff2df',
    borderRadius: 18,
    padding: 14,
    gap: 4,
  },
  helperLabel: {
    color: colors.primaryDark,
    fontWeight: '800',
    textTransform: 'uppercase',
    fontSize: 12,
    letterSpacing: 0.8,
  },
  helperText: {
    color: colors.textSoft,
    lineHeight: 21,
  },
});
