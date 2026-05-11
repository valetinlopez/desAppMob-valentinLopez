import { ActivityIndicator, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useAppContext } from '../contexts/AppContext';
import LoginScreen from '../screens/LoginScreen';
import MainMenuScreen from '../screens/MainMenuScreen';
import RecoverPasswordScreen from '../screens/RecoverPasswordScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ReviewDetailScreen from '../screens/ReviewDetailScreen';
import ReviewFormScreen from '../screens/ReviewFormScreen';
import ReviewListScreen from '../screens/ReviewListScreen';
import { colors } from '../theme/colors';

const Stack = createNativeStackNavigator();

function LoadingScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
      }}
    >
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
}

export default function AppNavigator() {
  const { ready, currentUser } = useAppContext();

  if (!ready) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: colors.surface },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: '700' },
          contentStyle: { backgroundColor: colors.background },
        }}
      >
        {!currentUser ? (
          <>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ title: 'CafeApp' }}
            />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{ title: 'Crear perfil' }}
            />
            <Stack.Screen
              name="RecoverPassword"
              component={RecoverPasswordScreen}
              options={{ title: 'Recuperar acceso' }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="MainMenu"
              component={MainMenuScreen}
              options={{ title: 'Panel de Cafe', headerBackVisible: false }}
            />
            <Stack.Screen
              name="ReviewForm"
              component={ReviewFormScreen}
              options={({ route }) => ({
                title: route.params?.review ? 'Editar ficha' : 'Nueva ficha',
              })}
            />
            <Stack.Screen
              name="ReviewList"
              component={ReviewListScreen}
              options={{ title: 'Bitacora de cafes' }}
            />
            <Stack.Screen
              name="ReviewDetail"
              component={ReviewDetailScreen}
              options={{ title: 'Detalle de cata' }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
