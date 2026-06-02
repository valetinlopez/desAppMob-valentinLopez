import { Pressable, StyleSheet, Text, View } from 'react-native';

import { useAppContext } from '../contexts/AppContext';
import { colors } from '../theme/colors';

const menuItems = [
  { key: 'profile', label: 'Mi perfil principal' },
  { key: 'menu', label: 'Menu' },
  { key: 'orders', label: 'Pedidos' },
  { key: 'tables', label: 'Mesas' },
];

export default function SideDrawer() {
  const {
    activeSection,
    currentUser,
    drawerOpen,
    navigateTo,
    closeDrawer,
    logout,
  } = useAppContext();

  if (!drawerOpen) {
    return null;
  }

  return (
    <View style={styles.overlay}>
      <Pressable style={styles.backdrop} onPress={closeDrawer} />

      <View style={styles.drawer}>
        <View style={styles.profile}>
          <Text style={styles.brand}>AppHambur</Text>
          <Text style={styles.name}>{currentUser?.fullName}</Text>
          <Text style={styles.role}>{currentUser?.role}</Text>
        </View>

        <View style={styles.links}>
          {menuItems.map((item) => {
            const isActive = item.key === activeSection;

            return (
              <Pressable
                key={item.key}
                style={[styles.linkButton, isActive && styles.activeLinkButton]}
                onPress={() => navigateTo(item.key)}
              >
                <Text style={[styles.linkText, isActive && styles.activeLinkText]}>
                  {item.label}
                </Text>
              </Pressable>
            );
          })}
        </View>

        <Pressable style={styles.logoutButton} onPress={logout}>
          <Text style={styles.logoutText}>Cerrar sesion</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 40,
    flexDirection: 'row',
  },
  backdrop: {
    flex: 1,
    backgroundColor: colors.overlay,
  },
  drawer: {
    width: 290,
    backgroundColor: colors.surface,
    paddingTop: 34,
    paddingHorizontal: 20,
    paddingBottom: 24,
    justifyContent: 'space-between',
  },
  profile: {
    gap: 7,
    marginBottom: 20,
  },
  brand: {
    alignSelf: 'flex-start',
    backgroundColor: colors.accent,
    color: colors.surface,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    fontWeight: '800',
  },
  name: {
    color: colors.white,
    fontSize: 24,
    fontWeight: '800',
  },
  role: {
    color: '#f6ddd2',
    lineHeight: 21,
  },
  links: {
    gap: 10,
    flex: 1,
  },
  linkButton: {
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 14,
  },
  activeLinkButton: {
    backgroundColor: colors.primary,
  },
  linkText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
  },
  activeLinkText: {
    color: colors.white,
  },
  logoutButton: {
    borderTopWidth: 1,
    borderTopColor: '#59403a',
    paddingTop: 18,
  },
  logoutText: {
    color: '#ffb8ab',
    fontWeight: '800',
    fontSize: 16,
  },
});
