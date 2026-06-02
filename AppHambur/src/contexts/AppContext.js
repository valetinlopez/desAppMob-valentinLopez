import { createContext, useContext, useMemo, useState } from 'react';

const AppContext = createContext(null);

const demoUser = {
  fullName: 'Sofia Benitez',
  role: 'Encargada de salon',
  location: 'Hamburgueseria Centro - Buenos Aires',
  shift: 'Turno noche',
};

export function AppProvider({ children }) {
  const [ready] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [activeSection, setActiveSection] = useState('profile');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const login = async (username, password) => {
    const safeUsername = username.trim();
    const safePassword = password.trim();

    if (!safeUsername || !safePassword) {
      return {
        ok: false,
        message: 'Completa usuario y clave para ingresar.',
      };
    }

    setCurrentUser({
      ...demoUser,
      username: safeUsername,
    });
    setActiveSection('profile');
    setDrawerOpen(false);

    return { ok: true };
  };

  const logout = () => {
    setCurrentUser(null);
    setActiveSection('profile');
    setDrawerOpen(false);
  };

  const navigateTo = (section) => {
    setActiveSection(section);
    setDrawerOpen(false);
  };

  const openDrawer = () => {
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const value = useMemo(
    () => ({
      ready,
      currentUser,
      activeSection,
      drawerOpen,
      login,
      logout,
      navigateTo,
      openDrawer,
      closeDrawer,
    }),
    [ready, currentUser, activeSection, drawerOpen]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useAppContext debe usarse dentro de AppProvider');
  }

  return context;
}
