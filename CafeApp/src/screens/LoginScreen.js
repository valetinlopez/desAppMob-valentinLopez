import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import ScreenContainer from '../components/ScreenContainer';
import { useAppContext } from '../contexts/AppContext';
import { colors } from '../theme/colors';
import { showMessage } from '../utils/dialogs';

export default function LoginScreen({ navigation }) {
  const { login } = useAppContext();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const result = await login(username, password);

    if (!result.ok) {
      showMessage('No se pudo iniciar sesion', result.message);
      return;
    }

    setUsername('');
    setPassword('');
  };

  return (
    <ScreenContainer scroll contentStyle={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.badge}>Bitacora de degustacion</Text>
        <Text style={styles.title}>Tu universo de cafes</Text>
        <Text style={styles.subtitle}>
          Inicia sesion para registrar experiencias, comparar perfiles y seguir tus favoritos.
        </Text>
      </View>

      <View style={styles.card}>
        <TextInput
          placeholder="Usuario"
          placeholderTextColor={colors.textSoft}
          value={username}
          onChangeText={setUsername}
          style={styles.input}
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Clave"
          placeholderTextColor={colors.textSoft}
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry
        />

        <Pressable style={styles.primaryButton} onPress={handleLogin}>
          <Text style={styles.primaryButtonText}>Iniciar sesion</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Register')}>
          <Text style={styles.link}>Registrarse</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('RecoverPassword')}>
          <Text style={styles.link}>Recuperar contrasena</Text>
        </Pressable>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    gap: 24,
  },
  hero: {
    gap: 12,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: colors.accent,
    color: colors.surface,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    fontWeight: '700',
  },
  title: {
    fontSize: 36,
    fontWeight: '800',
    color: colors.text,
  },
  subtitle: {
    color: colors.textSoft,
    fontSize: 16,
    lineHeight: 24,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: 22,
    padding: 20,
    borderWidth: 1,
    borderColor: colors.border,
    gap: 14,
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
  primaryButton: {
    backgroundColor: colors.primary,
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  link: {
    textAlign: 'center',
    color: colors.primaryDark,
    fontWeight: '600',
  },
});
