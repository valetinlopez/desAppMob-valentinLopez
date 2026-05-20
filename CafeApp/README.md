# CafeApp

Aplicacion mobile y web desarrollada con React Native + Expo para gestionar resenas de cafes y bebidas. La app permite registrar usuarios, iniciar sesion y administrar una bitacora personal de degustaciones con puntuacion, notas y favoritos.

En esta nueva etapa, CafeApp tambien incorpora consumo de una API externa de cafes para mostrar un catalogo dinamico en una pantalla independiente.

## Objetivo del proyecto

El objetivo de CafeApp es ofrecer una aplicacion simple, clara y funcional para que cada usuario pueda guardar sus experiencias con cafes o bebidas similares en un solo lugar.

Desde el punto de vista academico, el proyecto tambien fue pensado para cumplir con un trabajo practico de React Native incorporando:

- navegacion entre pantallas
- autenticacion basica
- CRUD completo
- persistencia local
- consumo de API externa
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
- Consumo de API externa de cafes
- Cambio entre cafes calientes y frios
- Recarga manual del catalogo
- Manejo de estados de carga, error y lista vacia

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
9. Puede explorar un catalogo externo de cafes consumido desde una API.
10. Puede cerrar sesion y volver al login.

## Tecnologias utilizadas

- React Native
- Expo
- React
- React Navigation
- Expo SQLite
- React Native Web
- Context API
- Fetch API

## Consumo de API externa

Para cumplir con el requisito de consumir una API y mostrar contenido en una nueva pantalla, se integro la API publica de SampleAPIs Coffee:

- `https://api.sampleapis.com/coffee/hot`
- `https://api.sampleapis.com/coffee/iced`

Esta integracion se uso para mostrar un catalogo de bebidas de cafe en tiempo real, separado de las resenas locales creadas por el usuario.

### Que se agrego

- una nueva pantalla llamada `CoffeeCatalogScreen`
- un servicio dedicado llamado `coffeeApi.js`
- un componente reutilizable llamado `CoffeeDrinkCard`
- una nueva opcion dentro del menu principal para abrir el catalogo
- una nueva ruta de navegacion llamada `CoffeeCatalog`

### Por que se hizo asi

Se eligio separar el consumo de datos en un archivo propio para mantener una arquitectura mas limpia y escalable.

En lugar de hacer el `fetch` directamente dentro de toda la interfaz, la app divide responsabilidades:

- la pantalla se encarga de mostrar estados y renderizar contenido
- el servicio se encarga de consultar la API y transformar la respuesta
- la tarjeta visual se encarga de presentar cada cafe de forma reutilizable

Esto facilita futuras mejoras como:

- agregar otra API
- cambiar el endpoint sin tocar toda la interfaz
- sumar un buscador
- agregar detalle individual
- reutilizar los datos para precargar una resena

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
      CoffeeDrinkCard.js
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
    services/
      coffeeApi.js
    screens/
      CoffeeCatalogScreen.js
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

Tambien registra la pantalla `CoffeeCatalog` para poder acceder al catalogo consumido desde la API externa.

### `src/services/coffeeApi.js`

Contiene la logica de consulta a la API externa de cafes.

Responsabilidades:

- armar la URL del endpoint
- ejecutar la peticion con `fetch`
- validar que la respuesta sea correcta
- convertir la respuesta en un formato consistente para la app

### `src/components/CoffeeDrinkCard.js`

Componente reutilizable para representar visualmente cada bebida obtenida desde la API.

Muestra:

- imagen
- nombre del cafe
- categoria
- descripcion
- ingredientes

### `src/screens/`

Contiene las pantallas principales:

- `LoginScreen.js`
- `RegisterScreen.js`
- `RecoverPasswordScreen.js`
- `MainMenuScreen.js`
- `CoffeeCatalogScreen.js`
- `ReviewFormScreen.js`
- `ReviewListScreen.js`
- `ReviewDetailScreen.js`

### `src/components/`

Incluye componentes reutilizables:

- `ScreenContainer.js`: contenedor base para pantallas
- `CoffeeDrinkCard.js`: tarjeta visual para cada cafe traido desde la API
- `ReviewCard.js`: tarjeta visual para cada resena
- `RatingStars.js`: representacion grafica de la puntuacion

## Como funciona la pantalla de catalogo

La pantalla `CoffeeCatalogScreen` fue pensada como una pantalla independiente del CRUD local.

Su objetivo no es guardar datos en la base local, sino consultar una fuente externa y mostrar resultados en pantalla.

### Flujo tecnico

1. El usuario entra al menu principal.
2. Presiona el boton `Explorar cafes desde API`.
3. La navegacion abre la pantalla `CoffeeCatalogScreen`.
4. La pantalla arranca con la categoria `hot`.
5. `useEffect` detecta la categoria seleccionada y llama a `loadCoffees`.
6. `loadCoffees` usa `fetchCoffees(category)`.
7. `fetchCoffees` consulta el endpoint correspondiente.
8. La respuesta JSON se transforma con `normalizeCoffeeItem`.
9. La pantalla guarda el resultado en el estado `coffees`.
10. Un `FlatList` renderiza cada elemento usando `CoffeeDrinkCard`.

### Estados que maneja

La pantalla no solo muestra datos. Tambien maneja estados importantes para una app real:

- `loading`: muestra indicador mientras se consulta la API por primera vez
- `refreshing`: permite actualizar la lista con pull to refresh sin bloquear toda la pantalla
- `error`: informa si la API falla o devuelve una respuesta invalida
- lista vacia: muestra un mensaje si el endpoint responde sin elementos

### Cambio de categoria

La pantalla tiene dos botones:

- `Calientes` usa el endpoint `hot`
- `Frios` usa el endpoint `iced`

Cuando el usuario cambia de categoria:

- se actualiza `selectedCategory`
- se dispara nuevamente `useEffect`
- se vuelve a consultar la API con el nuevo endpoint
- la lista se renderiza con el nuevo contenido

## Como funciona `coffeeApi.js`

Este archivo concentra toda la logica de red.

### `API_BASE_URL`

Guarda la base comun:

- `https://api.sampleapis.com/coffee`

### `fetchCoffees(category)`

Es la funcion principal.

Hace lo siguiente:

1. construye la URL final con la categoria elegida
2. ejecuta el pedido con `fetch`
3. verifica `response.ok`
4. convierte la respuesta a JSON
5. valida que el resultado sea un array
6. transforma cada item con `normalizeCoffeeItem`

### `normalizeCoffeeItem(item, category)`

Se usa para adaptar la respuesta de la API al formato interno que espera la app.

Devuelve un objeto con:

- `id`
- `apiId`
- `category`
- `title`
- `description`
- `ingredients`
- `image`

Esto es importante porque desacopla la interfaz del formato crudo de la API.

Si algun dia cambia el endpoint o usamos otra fuente, bastaria con adaptar este archivo y no toda la pantalla.

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
- abrir la pantalla de catalogo externo
- cerrar sesion

### Catalogo de cafes

Permite:

- consultar una API externa real
- alternar entre cafes calientes y frios
- ver imagen, descripcion e ingredientes
- reintentar si ocurre un error
- refrescar el contenido manualmente

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
- Consumo de API en una pantalla nueva

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

### Separacion entre UI y acceso a datos

El consumo de la API se implemento con una separacion simple pero importante:

- `CoffeeCatalogScreen` controla la interfaz y los estados visuales
- `coffeeApi.js` controla el acceso al endpoint
- `CoffeeDrinkCard.js` renderiza cada item

Esta decision ayuda a que el proyecto evolucione sin mezclar toda la logica en un solo archivo.

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
- permitir importar un cafe de la API como base para una resena local
- agregar buscador por nombre dentro del catalogo
- crear una pantalla de detalle para cada bebida de la API

## Estado del proyecto

Proyecto funcional, con soporte para Expo Go en mobile y ejecucion en web.

## Autor

Proyecto academico desarrollado como practica de React Native y Expo.
