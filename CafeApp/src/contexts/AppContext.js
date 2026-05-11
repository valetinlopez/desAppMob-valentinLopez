import { createContext, useContext, useEffect, useMemo, useState } from 'react';

import {
  createReview,
  deleteReviewById,
  findUserByCredentials,
  findUserByUsername,
  getReviewsByUserId,
  initDatabase,
  registerUser,
  updateReviewById,
} from '../database/database';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [ready, setReady] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const prepareApp = async () => {
      try {
        await initDatabase();
      } catch (error) {
        console.log('Error preparando la base', error);
      } finally {
        setReady(true);
      }
    };

    prepareApp();
  }, []);

  useEffect(() => {
    if (!currentUser) {
      setReviews([]);
      return;
    }

    refreshReviews();
  }, [currentUser]);

  const refreshReviews = async () => {
    if (!currentUser) {
      return;
    }

    const nextReviews = await getReviewsByUserId(currentUser.id);
    setReviews(nextReviews);
  };

  const login = async (username, password) => {
    const user = await findUserByCredentials(username.trim(), password.trim());

    if (!user) {
      return {
        ok: false,
        message: 'Usuario o clave incorrectos.',
      };
    }

    setCurrentUser(user);
    return { ok: true };
  };

  const signup = async ({ fullName, username, password }) => {
    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();
    const trimmedName = fullName.trim();

    if (!trimmedName || !trimmedUsername || !trimmedPassword) {
      return {
        ok: false,
        message: 'Completa nombre, usuario y clave.',
      };
    }

    const existingUser = await findUserByUsername(trimmedUsername);

    if (existingUser) {
      return {
        ok: false,
        message: 'Ese usuario ya existe. Proba con otro.',
      };
    }

    await registerUser({
      fullName: trimmedName,
      username: trimmedUsername,
      password: trimmedPassword,
    });

    return {
      ok: true,
      message: 'Cuenta creada. Ahora podes iniciar sesion.',
    };
  };

  const recoverPassword = async (username) => {
    const user = await findUserByUsername(username.trim());

    if (!user) {
      return {
        ok: false,
        message: 'No encontramos un usuario con ese nombre.',
      };
    }

    return {
      ok: true,
      message: `Clave registrada: ${user.password}`,
    };
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const saveReview = async (reviewInput, reviewId) => {
    if (!currentUser) {
      return {
        ok: false,
        message: 'No hay un usuario activo.',
      };
    }

    const payload = {
      cafeName: reviewInput.cafeName.trim(),
      sweetnessLevel: reviewInput.sweetnessLevel.trim(),
      rating: Number(reviewInput.rating),
      notes: reviewInput.notes.trim(),
      favorite: reviewInput.favorite ? 1 : 0,
    };

    if (!payload.cafeName || !payload.sweetnessLevel || !payload.rating) {
      return {
        ok: false,
        message: 'Completa cafe, dulzor y puntuacion.',
      };
    }

    if (reviewId) {
      await updateReviewById(reviewId, payload);
    } else {
      await createReview(currentUser.id, payload);
    }

    await refreshReviews();

    return {
      ok: true,
      message: reviewId ? 'Review actualizada.' : 'Review creada.',
    };
  };

  const removeReview = async (reviewId) => {
    await deleteReviewById(reviewId);
    await refreshReviews();
  };

  const value = useMemo(
    () => ({
      ready,
      currentUser,
      reviews,
      login,
      signup,
      recoverPassword,
      logout,
      saveReview,
      removeReview,
      refreshReviews,
    }),
    [ready, currentUser, reviews]
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
