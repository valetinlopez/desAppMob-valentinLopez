import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import AppHeader from '../components/AppHeader';
import SideDrawer from '../components/SideDrawer';
import { useAppContext } from '../contexts/AppContext';
import LoginScreen from '../screens/LoginScreen';
import MenuScreen from '../screens/MenuScreen';
import OrdersScreen from '../screens/OrdersScreen';
import ProfileScreen from '../screens/ProfileScreen';
import TablesScreen from '../screens/TablesScreen';
import { colors } from '../theme/colors';

function LoadingScreen() {
  return (
    <View style={styles.loadingScreen}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
}

const screenMap = {
  profile: {
    title: 'Mi perfil',
    subtitle: 'Panel principal',
    component: ProfileScreen,
  },
  menu: {
    title: 'Menu de hamburguesas',
    subtitle: 'Comida',
    component: MenuScreen,
  },
  orders: {
    title: 'Pedidos',
    subtitle: 'Operacion',
    component: OrdersScreen,
  },
  tables: {
    title: 'Mesas',
    subtitle: 'Salon',
    component: TablesScreen,
  },
};

function MainShell() {
  const { activeSection, openDrawer } = useAppContext();
  const currentScreen = screenMap[activeSection] || screenMap.profile;
  const CurrentComponent = currentScreen.component;

  return (
    <View style={styles.shell}>
      <StatusBar style="dark" />
      <View style={styles.headerWrap}>
        <AppHeader
          title={currentScreen.title}
          subtitle={currentScreen.subtitle}
          onOpenMenu={openDrawer}
        />
      </View>
      <CurrentComponent />
      <SideDrawer />
    </View>
  );
}

export default function AppNavigator() {
  const { ready, currentUser } = useAppContext();

  if (!ready) {
    return <LoadingScreen />;
  }

  return currentUser ? <MainShell /> : <LoginScreen />;
}

const styles = StyleSheet.create({
  loadingScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  shell: {
    flex: 1,
    backgroundColor: colors.background,
  },
  headerWrap: {
    paddingHorizontal: 20,
    paddingTop: 16,
    backgroundColor: colors.background,
  },
});
