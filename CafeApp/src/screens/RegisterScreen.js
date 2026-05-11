import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import ScreenContainer from '../components/ScreenContainer';
import { useAppContext } from '../contexts/AppContext';
import { colors } from '../theme/colors';
import { showMessage } from '../utils/dialogs';

export default function RegisterScreen({ navigation }) {
  const { signup } = useAppContext();
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    const result = await signup({ fullName, username, password });

    showMessage(result.ok ? 'Registro exitoso' : 'No se pudo registrar', result.message);

    if (result.ok) {
      setFullName('');
      setUsername('');
      setPassword('');
      navigation.goBack();
    }
  };

  return (
    <ScreenContainer scroll contentStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Crea tu perfil de cata</Text>
        <Text style={styles.subtitle}>
          Configura tu acceso para guardar tu historial y organizar cada degustacion.
        </Text>

        <TextInput
          placeholder="Nombre completo"
          placeholderTextColor={colors.textSoft}
          value={fullName}
          onChangeText={setFullName}
          style={styles.input}
        />
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

        <Pressable style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Guardar usuario</Text>
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
    marginBottom: 8,
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
  button: {
    backgroundColor: colors.primary,
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});
