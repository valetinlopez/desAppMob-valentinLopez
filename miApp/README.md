# Cafe Review

Aplicacion hecha con React Native + Expo para cumplir el TP del profesor a partir de la idea "Cafe Review".

La app permite:

- iniciar sesion
- registrarse
- recuperar contrasena
- entrar a un menu principal
- cargar reviews de cafes o bebidas
- ver la lista de reviews guardadas
- editar reviews
- eliminar reviews
- marcar favoritos
- guardar todo en SQLite

## 1. Idea del proyecto

Tomamos tu idea base:

- nombre del cafe
- nivel de dulzor
- puntuacion
- lista de reviews
- extra de estrellas
- extra de favoritos

Y la adaptamos para que tambien cumpla con lo que pide el TP:

- pantalla de login
- pantalla de registro
- pantalla de recuperacion de clave
- menu principal
- formulario con minimo 3 datos
- lista con editar y eliminar
- navbar superior con volver atras
- uso de Navigator
- persistencia con SQLite

## 2. Que tenia el proyecto antes

Tu proyecto original estaba armado como una app de usuarios:

- `HomeScreen`
- `UsersScreen`
- `UserDetailScreen`
- `EditUserScreen`
- `AsyncStorage`

Eso servia como base para practicar navegacion y CRUD, pero no estaba alineado con el tema del TP ni con el requisito de SQLite.

## 3. Que hicimos paso a paso

### Paso 1. Cambiamos la idea general de la app

Pasamos de una app de "usuarios" a una app de "reviews de cafe".

Ahora el dato principal ya no es un usuario con nombre y edad, sino una review con:

- `cafeName`
- `sweetnessLevel`
- `rating`
- `notes`
- `favorite`

### Paso 2. Reorganizamos la navegacion

Creamos un flujo mas parecido a una app real:

1. `LoginScreen`
2. `RegisterScreen`
3. `RecoverPasswordScreen`
4. `MainMenuScreen`
5. `ReviewFormScreen`
6. `ReviewListScreen`
7. `ReviewDetailScreen`

Esto se controla desde [src/navigation/AppNavigator.js](/c:/Users/lopez/OneDrive/Escritorio/Desa_AppMovil/miApp/src/navigation/AppNavigator.js).

### Paso 3. Reemplazamos AsyncStorage por SQLite

El TP pide base de datos SQLite, asi que dejamos de usar `AsyncStorage` y agregamos `expo-sqlite`.

La logica de base de datos quedo en:

- [src/database/database.js](/c:/Users/lopez/OneDrive/Escritorio/Desa_AppMovil/miApp/src/database/database.js)

En ese archivo:

- se abre la base `cafe-review.db`
- se crean las tablas `users` y `reviews`
- se insertan usuarios
- se buscan usuarios para login
- se insertan reviews
- se listan reviews
- se actualizan reviews
- se eliminan reviews

### Paso 4. Creamos un contexto global para manejar el estado

La app ahora usa:

- [src/contexts/AppContext.js](/c:/Users/lopez/OneDrive/Escritorio/Desa_AppMovil/miApp/src/contexts/AppContext.js)

Este contexto se encarga de:

- preparar la base SQLite al iniciar
- guardar el usuario logueado
- cargar las reviews del usuario actual
- iniciar sesion
- registrar usuarios
- recuperar clave
- guardar una review
- eliminar una review
- cerrar sesion

La ventaja de esto es que la logica queda centralizada y las pantallas quedan mas limpias.

### Paso 5. Mejoramos el diseno para que combine con la idea

Definimos una paleta inspirada en cafe en:

- [src/theme/colors.js](/c:/Users/lopez/OneDrive/Escritorio/Desa_AppMovil/miApp/src/theme/colors.js)

Elegimos tonos:

- crema
- cafe
- caramelo
- rojo suave para favoritos y eliminar

La idea fue que la app se sienta mas original y mas cercana al concepto "Cafe Review".

### Paso 6. Agregamos componentes reutilizables

Creamos:

- [src/components/ScreenContainer.js](/c:/Users/lopez/OneDrive/Escritorio/Desa_AppMovil/miApp/src/components/ScreenContainer.js)
- [src/components/RatingStars.js](/c:/Users/lopez/OneDrive/Escritorio/Desa_AppMovil/miApp/src/components/RatingStars.js)
- [src/components/ReviewCard.js](/c:/Users/lopez/OneDrive/Escritorio/Desa_AppMovil/miApp/src/components/ReviewCard.js)

Para que sirven:

- `ScreenContainer`: unifica margenes, scroll y fondo
- `RatingStars`: muestra la puntuacion con estrellas
- `ReviewCard`: renderiza cada item de la lista

### Paso 7. Creamos el flujo de autenticacion

#### Login

Pantalla:

- [src/screens/LoginScreen.js](/c:/Users/lopez/OneDrive/Escritorio/Desa_AppMovil/miApp/src/screens/LoginScreen.js)

Permite:

- ingresar usuario
- ingresar clave
- iniciar sesion
- navegar a registro
- navegar a recuperar contrasena

#### Registro

Pantalla:

- [src/screens/RegisterScreen.js](/c:/Users/lopez/OneDrive/Escritorio/Desa_AppMovil/miApp/src/screens/RegisterScreen.js)

Permite crear un usuario y guardarlo en SQLite.

#### Recuperacion

Pantalla:

- [src/screens/RecoverPasswordScreen.js](/c:/Users/lopez/OneDrive/Escritorio/Desa_AppMovil/miApp/src/screens/RecoverPasswordScreen.js)

Para este TP resolvimos una recuperacion simple:

- el usuario escribe su nombre de usuario
- se busca en SQLite
- se muestra la clave guardada

Nota:

En una app real no se haria asi por seguridad, pero para un trabajo practico sirve para demostrar consulta a base de datos.

### Paso 8. Creamos el menu principal

Pantalla:

- [src/screens/MainMenuScreen.js](/c:/Users/lopez/OneDrive/Escritorio/Desa_AppMovil/miApp/src/screens/MainMenuScreen.js)

Desde aca el usuario puede:

- cargar una nueva review
- ver la lista de reviews
- cerrar sesion

Tambien mostramos:

- cantidad total de reviews
- cantidad de favoritos

### Paso 9. Creamos el formulario CRUD

Pantalla:

- [src/screens/ReviewFormScreen.js](/c:/Users/lopez/OneDrive/Escritorio/Desa_AppMovil/miApp/src/screens/ReviewFormScreen.js)

Campos:

- nombre del cafe o bebida
- nivel de dulzor
- puntuacion del 1 al 5
- comentario personal
- favorito

Este formulario sirve tanto para:

- crear una review nueva
- editar una review existente

### Paso 10. Creamos la lista de reviews

Pantalla:

- [src/screens/ReviewListScreen.js](/c:/Users/lopez/OneDrive/Escritorio/Desa_AppMovil/miApp/src/screens/ReviewListScreen.js)

Funciones:

- mostrar todas las reviews
- filtrar solo favoritos
- entrar al detalle de cada review

### Paso 11. Creamos el detalle con editar y eliminar

Pantalla:

- [src/screens/ReviewDetailScreen.js](/c:/Users/lopez/OneDrive/Escritorio/Desa_AppMovil/miApp/src/screens/ReviewDetailScreen.js)

Desde esta pantalla podes:

- ver el detalle completo
- editar la review
- eliminar la review

Con esto queda completo el CRUD.

## 4. Estructura final del proyecto

```text
miApp/
  App.js
  src/
    components/
      RatingStars.js
      ReviewCard.js
      ScreenContainer.js
    contexts/
      AppContext.js
    database/
      database.js
    navigation/
      AppNavigator.js
    screens/
      LoginScreen.js
      MainMenuScreen.js
      RecoverPasswordScreen.js
      RegisterScreen.js
      ReviewDetailScreen.js
      ReviewFormScreen.js
      ReviewListScreen.js
    theme/
      colors.js
```

## 5. Base de datos SQLite

Creamos dos tablas:

### Tabla `users`

Guarda:

- id
- nombre completo
- username
- password

### Tabla `reviews`

Guarda:

- id
- user_id
- cafe_name
- sweetness_level
- rating
- notes
- favorite
- created_at

Relacion:

- un usuario puede tener muchas reviews

Importante:

- en Android/iOS usamos SQLite real con `expo-sqlite`
- en Web agregamos `database.web.js` para usar `localStorage` y evitar errores de bundling del navegador
- eso nos permite probar la interfaz tambien en web sin romper la version mobile del TP

## 6. Como funciona el flujo completo

1. El usuario abre la app.
2. Se inicializa SQLite.
3. Si no tiene cuenta, se registra.
4. Inicia sesion con usuario y clave.
5. Entra al menu principal.
6. Carga una review con los datos del cafe.
7. La review se guarda en SQLite.
8. Desde la lista puede verla, editarla o eliminarla.
9. Si quiere, puede marcarla como favorita.
10. Puede cerrar sesion y volver al login.

## 7. Que requisitos del TP cumple

- `Login`: si
- `Registrarse`: si
- `Recuperar contrasena`: si
- `Menu principal`: si
- `Formulario con minimo 3 datos`: si
- `Lista de datos`: si
- `Editar`: si
- `Eliminar`: si
- `Navbar superior con volver`: si, por Stack Navigator
- `Navigator`: si
- `SQLite`: si
- `Estructura ordenada del proyecto`: si

## 8. Dependencias importantes

Las principales dependencias usadas son:

- `expo`
- `@react-navigation/native`
- `@react-navigation/native-stack`
- `expo-sqlite`

## 9. Como ejecutar el proyecto

Dentro de `miApp`:

```bash
npm install
npm start
```

Luego:

- presiona `a` para Android
- presiona `w` para Web
- o escanea el QR con Expo Go

## 10. Explicacion corta para defenderlo en clase

Si el profesor te pregunta "que hiciste", podes responder algo asi:

> Adapte una app que originalmente trabajaba con usuarios a una idea propia llamada Cafe Review. Reorganicé la navegacion con React Navigation, agregue login, registro y recuperacion de clave, cree un menu principal, y desarrolle un CRUD completo de reseñas de cafes. Ademas, reemplace AsyncStorage por SQLite usando expo-sqlite para cumplir con el requisito del trabajo practico y guardar tanto usuarios como reviews en una base local del dispositivo.

## 11. Posibles mejoras futuras

Si despues queres seguir mejorandola, estas son buenas ideas:

- agregar imagen del cafe
- agregar fecha visible en cada review
- ordenar por puntuacion
- agregar busqueda por nombre
- validar mejor la seguridad de contrasenas
- separar navegacion de autenticacion y navegacion principal en stacks distintos

## 12. Resumen final

El proyecto quedo convertido en una app coherente, prolija y alineada con el TP:

- tiene una idea original
- cumple CRUD completo
- usa Navigator
- usa SQLite
- tiene una interfaz mas linda
- tiene extras como estrellas y favoritos

Base del TP usada como referencia:

- [tp.txt](/c:/Users/lopez/OneDrive/Escritorio/Desa_AppMovil/miApp/tp.txt)
