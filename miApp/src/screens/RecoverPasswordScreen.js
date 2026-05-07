import { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import ScreenContainer from '../components/ScreenContainer';
import { useAppContext } from '../contexts/AppContext';
import { colors } from '../theme/colors';

export default function RecoverPasswordScreen() {
  const { recoverPassword } = useAppContext();
  const [username, setUsername] = useState('');

  const handleRecover = async () => {
    const result = await recoverPassword(username);
    Alert.alert(result.ok ? 'Recuperacion' : 'Sin resultados', result.message);
  };

  return (
    <ScreenContainer scroll contentStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Recuperar clave</Text>
        <Text style={styles.subtitle}>
          Ingrese su nombre de usuario para recuperar su clave.
        </Text>

        <TextInput
          placeholder="Usuario"
          placeholderTextColor={colors.textSoft}
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          style={styles.input}
        />

        <Pressable style={styles.button} onPress={handleRecover}>
          <Text style={styles.buttonText}>Buscar clave</Text>
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
