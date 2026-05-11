# 📱 App de Gestión de Usuarios - React Native (Expo)

## 🚀 Descripción

Aplicación móvil desarrollada con React Native utilizando Expo.
Permite gestionar usuarios de manera simple:

* Crear usuarios
* Ver lista
* Ver detalle
* Editar usuarios
* Eliminar usuarios
* Persistencia de datos

---

## 🏗️ Estructura del proyecto

```
src/
 ├── components/
 │    └── UserCard.js
 │
 ├── screens/
 │    ├── HomeScreen.js
 │    ├── UsersScreen.js
 │    ├── UserDetailScreen.js
 │    └── EditUserScreen.js
 │
 ├── navigation/
 │    └── AppNavigator.js
 │
 └── context/
      └── UserContext.js
```

---

## 🧠 Arquitectura

La aplicación utiliza **Context API** para manejar el estado global.

### 📦 UserContext

Centraliza toda la lógica:

* `userList` → lista de usuarios
* `agregarUsuario()` → crea usuario
* `eliminarUsuario()` → elimina usuario
* `actualizarUsuario()` → edita usuario

---

## 🔄 Flujo de datos

1. Se crea un usuario en `UsersScreen`
2. Se guarda en el contexto global
3. Se persiste con AsyncStorage
4. `HomeScreen` y otras pantallas acceden automáticamente
5. Se puede editar desde `EditUserScreen`

---

## 💾 Persistencia

Se utiliza:

```
@react-native-async-storage/async-storage
```

Para guardar los usuarios localmente en el dispositivo.

---

## 📲 Navegación

Se implementa con React Navigation:

* Home
* Usuarios
* Detalle
* Editar

---

## 🧩 Componentes reutilizables

### UserCard

Encapsula la lógica visual de cada usuario.

---

## 🛠️ Tecnologías usadas

* React Native
* Expo
* React Navigation
* AsyncStorage
* Context API

---

## 🎯 Funcionalidades

✔ Crear usuario
✔ Listar usuarios
✔ Ver detalle
✔ Editar usuario
✔ Eliminar usuario
✔ Persistencia local

---

## 🚀 Próximas mejoras

* Login de usuario
* Diseño UI/UX
* Validaciones avanzadas
* API externa (backend)

---

## 👨‍💻 Autor

* [ ] Proyecto desarrollado como práctica de aprendizaje en React Native.
