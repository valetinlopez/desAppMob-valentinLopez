import { Alert, Platform } from 'react-native';

function isWeb() {
  return Platform.OS === 'web' && typeof window !== 'undefined';
}

export function showMessage(title, message) {
  if (isWeb()) {
    window.alert(`${title}\n\n${message}`);
    return;
  }

  Alert.alert(title, message);
}

export function showConfirm(title, message, onConfirm) {
  if (isWeb()) {
    const accepted = window.confirm(`${title}\n\n${message}`);

    if (accepted) {
      onConfirm();
    }

    return;
  }

  Alert.alert(title, message, [
    { text: 'Cancelar', style: 'cancel' },
    {
      text: 'Aceptar',
      onPress: onConfirm,
    },
  ]);
}
