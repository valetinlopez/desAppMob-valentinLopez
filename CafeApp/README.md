# CafeApp

Aplicacion mobile y web desarrollada con React Native + Expo para gestionar resenas de cafes y bebidas. La app permite registrar usuarios, iniciar sesion y administrar una bitacora personal de degustaciones con puntuacion, notas y favoritos.

## Objetivo del proyecto

El objetivo de CafeApp es ofrecer una aplicacion simple, clara y funcional para que cada usuario pueda guardar sus experiencias con cafes o bebidas similares en un solo lugar.

Desde el punto de vista academico, el proyecto tambien fue pensado para cumplir con un trabajo practico de React Native incorporando:

- navegacion entre pantallas
- autenticacion basica
- CRUD completo
- persistencia local
- estructura ordenada por carpetas
- compatibilidad mobile y web

## Problema que resuelve

CafeApp resuelve la necesidad de registrar y consultar degustaciones personales de forma organizada. En lugar de guardar notas sueltas, la app permite centralizar:

- nombre del cafe o bebida
- nivel de dulzor
- puntuacion
- comentario personal
- marcado de favoritos

## Funcionalidades principales

- Registro de usuario
- Inicio de sesion
- Recuperacion de clave
- Menu principal con resumen del usuario
- Creacion de nuevas fichas de degustacion
- Edicion de fichas existentes
- Eliminacion de fichas
- Listado completo de degustaciones
- Filtro de favoritos
- Vista de detalle por cada ficha
- Visualizacion de puntuacion con estrellas
- Persistencia local de usuarios y resenas

## Alcance funcional

La aplicacion trabaja con dos entidades principales:

### Usuarios

Cada usuario puede:

- crear una cuenta
- iniciar sesion con usuario y clave
- recuperar su clave a partir del nombre de usuario

### Resenas

Cada resena pertenece a un usuario e incluye:

- `cafeName`
- `sweetnessLevel`
- `rating`
- `notes`
- `favorite`

## Flujo de uso de la app

1. El usuario abre la aplicacion.
2. Se inicializa la capa de persistencia.
3. Si todavia no tiene cuenta, se registra.
4. Inicia sesion con su usuario y clave.
5. Accede al panel principal.
6. Crea una nueva ficha de degustacion.
7. Consulta su listado de fichas guardadas.
8. Puede editar, marcar como favorita o eliminar una ficha.
9. Puede cerrar sesion y volver al login.

## Tecnologias utilizadas

- React Native
- Expo
- React
- React Navigation
- Expo SQLite
- React Native Web
- Context API

## Persistencia de datos

La app utiliza una estrategia distinta segun la plataforma:

- En Android/iOS usa `expo-sqlite`
- En Web usa `localStorage` mediante una implementacion adaptada

Esto permite mantener una experiencia consistente sin romper la compilacion web.

### Archivos relacionados

- `src/database/database.js`: persistencia mobile con SQLite
- `src/database/database.web.js`: persistencia web con `localStorage`

## Arquitectura general

El proyecto esta organizado por responsabilidad:

```text
CafeApp/
  App.js
  app.json
  package.json
  assets/
  src/
    components/
      RatingStars.js
      ReviewCard.js
      ScreenContainer.js
    contexts/
      AppContext.js
    database/
      database.js
      database.web.js
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
    utils/
      dialogs.js
```

## Descripcion de modulos

### `App.js`

Punto de entrada de la aplicacion. Envuelve toda la app dentro de `AppProvider` y monta la navegacion principal.

### `src/contexts/AppContext.js`

Centraliza el estado global y la logica principal:

- inicializacion de la base de datos
- login
- registro
- recuperacion de clave
- carga de resenas
- alta, edicion y eliminacion de fichas
- logout

### `src/navigation/AppNavigator.js`

Define el flujo de navegacion con stack navigator. Cambia automaticamente entre pantallas de autenticacion y pantallas internas segun el estado del usuario.

### `src/screens/`

Contiene las pantallas principales:

- `LoginScreen.js`
- `RegisterScreen.js`
- `RecoverPasswordScreen.js`
- `MainMenuScreen.js`
- `ReviewFormScreen.js`
- `ReviewListScreen.js`
- `ReviewDetailScreen.js`

### `src/components/`

Incluye componentes reutilizables:

- `ScreenContainer.js`: contenedor base para pantallas
- `ReviewCard.js`: tarjeta visual para cada resena
- `RatingStars.js`: representacion grafica de la puntuacion

### `src/theme/colors.js`

Define la paleta visual de la app.

### `src/utils/dialogs.js`

Unifica mensajes y confirmaciones para mobile y web.

## Base de datos

En mobile se crean dos tablas:

### Tabla `users`

Campos:

- `id`
- `full_name`
- `username`
- `password`

### Tabla `reviews`

Campos:

- `id`
- `user_id`
- `cafe_name`
- `sweetness_level`
- `rating`
- `notes`
- `favorite`
- `created_at`

Relacion:

- un usuario puede tener muchas resenas

## Funcionalidades por pantalla

### Login

Permite:

- ingresar usuario
- ingresar clave
- iniciar sesion
- navegar a registro
- navegar a recuperacion de clave

### Registro

Permite:

- crear un nuevo usuario
- validar que el usuario no exista
- volver al login una vez registrado

### Recuperacion de clave

Permite:

- buscar un usuario por nombre
- mostrar la clave registrada

Nota:

Esta recuperacion es simple y fue pensada para fines de practica. En una app real no se mostraria la clave en texto plano.

### Panel principal

Muestra:

- nombre del usuario actual
- cantidad total de resenas
- cantidad de favoritos

Tambien permite:

- crear una nueva ficha
- ir al listado de fichas
- cerrar sesion

### Formulario de resena

Permite cargar y editar:

- nombre del cafe o bebida
- nivel de dulzor
- puntuacion de 1 a 5
- notas personales
- favorito

### Listado de resenas

Permite:

- ver todas las fichas del usuario
- filtrar solo favoritos
- abrir el detalle de cada ficha

### Detalle de resena

Permite:

- consultar todos los datos de la ficha
- editarla
- eliminarla con confirmacion

## Experiencia web

La aplicacion tambien puede ejecutarse en navegador. Para eso se resolvieron algunos puntos de compatibilidad:

- persistencia con `localStorage`
- dialogs adaptados para web
- exportacion web funcionando con Expo

## Requisitos que cubre el proyecto

- Login
- Registro de usuarios
- Recuperacion de clave
- Menu principal
- Formulario con multiples campos
- Listado de datos
- Edicion
- Eliminacion
- Navegacion entre pantallas
- Persistencia local
- Estructura modular

## Instalacion

Ubicate dentro de la carpeta del proyecto y ejecuta:

```bash
npm install
```

## Ejecucion

### Iniciar Expo

```bash
npm start
```

### Ejecutar en Android

```bash
npm run android
```

### Ejecutar en Web

```bash
npm run web
```

## Build web

Para generar la version exportable de la app web:

```bash
npx expo export --platform web
```

## Dependencias principales

- `expo`
- `react`
- `react-native`
- `react-native-web`
- `@react-navigation/native`
- `@react-navigation/native-stack`
- `react-native-safe-area-context`
- `react-native-screens`
- `expo-sqlite`

## Decisiones tecnicas importantes

### Uso de Context API

Se eligio Context API para centralizar la logica y evitar pasar props entre muchas pantallas.

### Separacion de persistencia por plataforma

Se uso una implementacion distinta para mobile y web porque SQLite no se comporta igual en navegador.

### Navegacion por stack

Se utilizo stack navigator porque encaja bien con el flujo lineal de login, formularios, lista y detalle.

## Limitaciones actuales

- la clave se guarda en texto plano
- no hay backend ni sincronizacion en la nube
- no hay subida de imagenes
- no existe recuperacion de clave segura
- las validaciones pueden ampliarse

## Mejoras futuras

- agregar imagen del cafe
- agregar fecha visible en cada ficha
- ordenar por puntuacion o fecha
- agregar buscador
- mejorar validaciones de formularios
- incorporar autenticacion mas segura
- migrar a backend o base remota

## Estado del proyecto

Proyecto funcional, con soporte para Expo Go en mobile y ejecucion en web.

## Autor

Proyecto academico desarrollado como practica de React Native y Expo.
