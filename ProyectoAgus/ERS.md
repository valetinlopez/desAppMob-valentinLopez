
**| SCOUT AIPlataforma Inteligente de Scouting para Futbolistas Amateurs `<br/>`ESPECIFICACION DE REQUISITOS DE SOFTWARE (ERS)Version 1.0 — MVP |
| --------------------------------------------------------------------------------------------------------------------------------------- |

| Campo             | Descripcion                                                        |
| ----------------- | ------------------------------------------------------------------ |
| Proyecto          | Scout AI                                                           |
| Tipo de documento | ERS + System Prompt para IA                                        |
| Version           | 1.0 — MVP                                                         |
| Fecha             | 3 de junio de 2026                                                 |
| Clasificacion     | Documento tecnico academico                                        |
| Stack tecnologico | React Native · Expo · FastAPI · PostgreSQL · Cloudinary · JWT |

# INSTRUCCION DE SISTEMA — PROMPT PARA IA

| Este bloque esta disenado para ser usado directamente como system prompt en herramientas de IA como Firebase Stitch, Claude, GitHub Copilot, Cursor, Codex u otras. Puede ser copiado y pegado tal cual en el campo de instrucciones del sistema. |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

| SYSTEM PROMPT — SCOUT AIYou are the AI assistant of Scout AI, a mobile platform built with React Native (Expo) + FastAPI + PostgreSQL. Your role is to help build, extend, and maintain this application.== PLATFORM CONTEXT ==Scout AI is a digital visibility platform for AMATEUR football players. It is NOT a transfer market, NOT a professional scouting tool, and does NOT include player market values or economic indicators. The sole purpose is to give amateur players a professional digital sports profile so coaches and scouts can discover them. Players are self-reporting their own data.== USER ROLES ==- PLAYER: Creates and manages their own sport profile, manually enters their own statistics (self-reported, not validated), defines strengths/weaknesses, uploads multimedia content, controls profile visibility.- SCOUT: Searches players using advanced filters, saves players into named follow-up lists, compares profiles. Read-only access to public player profiles.- COACH: Similar to SCOUT with focus on performance review and player follow-up.- CLUB: Institutional account with access to scouting tools and multiple associated scouts.== IMPORTANT CONSTRAINTS ==- NO market value, transfer price, or economic valuation of any kind.- NO global numeric rating (e.g. "87 overall"). Only KPIs calculated from self-reported stats.- Attribute scores (1-10) are player self-assessments. The UI must communicate this explicitly.- Player profiles are private by default. Players control visibility.== TECH STACK ==Frontend: React Native + Expo + TypeScript + NativeWind (Tailwind)Backend: FastAPI (Python) with layered MVC architecture (routes -> services -> repositories)Database: PostgreSQL with SQLAlchemy ORM and Alembic migrationsAuth: JWT (access token 15 min + refresh token 7 days)Media: Cloudinary for video/photo upload and streaming== CORE MODULES ==1. Auth & Users (register, login, password recovery, role management)2. Player Profile (personal, physical, sport info + visibility control + jersey number + bio)3. Statistics (self-reported: matches, minutes, goals, assists, cards + calculated KPIs)4. Performance (strengths and areas to improve + attribute self-ratings 1-10)5. Attribute Radar (4 dimensions: technical, physical, tactical, mental — 4 sub-attributes each)6. Multimedia Library (video/photo upload, 6 football categories and subcategories, per-item visibility)7. Talent Search (filter by position, age, city, height, club, foot, goals, assists)8. Favorites & Lists (scouts save players, organize into named lists, compare profiles)== BEHAVIOR RULES ==- Always follow the layered architecture: routes -> services -> repositories- Use Pydantic schemas for request/response validation- Apply JWT authentication middleware on all protected routes- Enforce role-based access control (RBAC) based on user type- Handle Cloudinary uploads asynchronously- Validate all inputs; return structured error messages- Write clean, documented code with docstrings in Spanish when relevant- Suggest database indexes for performance-critical queries- Never generate logic or UI that implies player market valuation or professional transfer workflows |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |

# 1. INTRODUCCION

## 1.1 Proposito

Este documento especifica los requisitos de software del sistema Scout AI, una plataforma movil para futbolistas amateurs que facilita la conexion con entrenadores, clubes y captadores de talento. Sirve como guia tecnica para el desarrollo, como referencia academica ante docentes, y como prompt de sistema para herramientas de inteligencia artificial asistidas por codigo.

## 1.2 Alcance

Scout AI es una aplicacion movil multiplataforma (iOS / Android) que permite:

* A jugadores: crear perfiles deportivos digitales con estadisticas, multimedia y atributos evaluados.
* A scouts y entrenadores: buscar, filtrar, analizar y dar seguimiento a talentos amateurs.
* En el futuro: analisis automatico de video mediante IA (OpenCV + YOLO).

## 1.3 Definiciones y Acronimos

| Termino    | Descripcion                                                            |
| ---------- | ---------------------------------------------------------------------- |
| MVP        | Minimum Viable Product — version inicial con funciones esenciales     |
| ERS        | Especificacion de Requisitos de Software (IEEE 830)                    |
| JWT        | JSON Web Token — mecanismo de autenticacion sin estado                |
| RBAC       | Role-Based Access Control — control de acceso por roles               |
| KPI        | Key Performance Indicator — indicador de rendimiento calculado        |
| ORM        | Object-Relational Mapper — capa de abstraccion sobre la base de datos |
| CRUD       | Create, Read, Update, Delete — operaciones basicas de datos           |
| Cloudinary | Plataforma cloud de almacenamiento y streaming de media                |

## 1.4 Vision General del Producto

| Scout AI transforma el perfil tradicional de un futbolista amateur en una identidad deportiva digital completa, permitiendo que el talento pueda ser descubierto, evaluado y seguido de manera profesional mediante tecnologia, datos y analisis inteligente. |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

## 1.5 Alcance del Perfil de Jugador — Aclaracion Importante

| IMPORTANTE: Esta version de Scout AI (MVP v1.0) esta dirigida EXCLUSIVAMENTE a jugadores amateurs. Los perfiles NO incluyen valor de mercado, precio de transferencia ni ningun indicador economico. El sistema NO realiza comparaciones de rendimiento entre jugadores ni genera rankings publicos. La unica finalidad del perfil es que el jugador tenga visibilidad y pueda ser encontrado por entrenadores o scouts. Las estadisticas son ingresadas manualmente por el propio jugador y representan su historial personal, no una evaluacion externa certificada. |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

---

# 2. DESCRIPCION GENERAL DEL SISTEMA

## 2.1 Perspectiva del Producto

Scout AI es un sistema independiente compuesto por tres capas principales:

* Aplicacion movil (React Native + Expo): interfaz del usuario final.
* API REST (FastAPI + Python): logica de negocio y orquestacion de servicios.
* Base de datos relacional (PostgreSQL): persistencia de datos con migraciones via Alembic.

## 2.2 Roles de Usuario

| Rol    | Descripcion y permisos                                                                                               |
| ------ | -------------------------------------------------------------------------------------------------------------------- |
| PLAYER | Crea y administra su perfil. Sube estadisticas, multimedia y define sus atributos. Solo edita su propia informacion. |
| SCOUT  | Busca jugadores, aplica filtros avanzados, guarda favoritos y compara perfiles. Solo lectura sobre perfiles ajenos.  |
| COACH  | Similar a SCOUT con acceso a analisis de rendimiento y seguimiento de jugadores especificos.                         |
| CLUB   | Cuenta institucional. Puede tener multiples scouts asociados y acceder a herramientas de reclutamiento.              |

## 2.3 Restricciones del Sistema

* Toda comunicacion debe realizarse sobre HTTPS.
* Los tokens JWT tienen tiempo de expiracion configurable.
* Los archivos multimedia se almacenan exclusivamente en Cloudinary (no en servidor propio).
* El tamano maximo de video subido es de 500 MB por archivo.
* Las contrasenas deben almacenarse hasheadas con bcrypt.

# 3. REQUISITOS FUNCIONALES

## RF-01: Autenticacion y Gestion de Usuarios

| ID      | Descripcion                                                                                                           |
| ------- | --------------------------------------------------------------------------------------------------------------------- |
| RF-01.1 | El sistema debe permitir el registro de usuarios con nombre, email, contrasena y rol (player / scout / coach / club). |
| RF-01.2 | El sistema debe autenticar usuarios mediante JWT con tokens de acceso (15 min) y refresco (7 dias).                   |
| RF-01.3 | El sistema debe permitir la recuperacion de contrasena via email con token de un solo uso.                            |
| RF-01.4 | Cada endpoint protegido debe validar el JWT y verificar el rol autorizado antes de responder.                         |

## RF-02: Perfil Deportivo del Jugador

| ID      | Descripcion                                                                                                             |
| ------- | ----------------------------------------------------------------------------------------------------------------------- |
| RF-02.1 | El jugador debe poder crear y actualizar su perfil con informacion personal (foto, nombre, edad, ciudad, nacionalidad). |
| RF-02.2 | El perfil debe incluir datos fisicos: altura, peso y pierna habil.                                                      |
| RF-02.3 | El perfil debe incluir datos deportivos: posicion principal, posiciones secundarias, club actual y categoria.           |
| RF-02.4 | El sistema debe mostrar el perfil completo de un jugador a roles con permiso de lectura (scout, coach, club).           |

| RF-02.5 | El jugador debe poder controlar la visibilidad de su perfil: publico (visible para scouts y entrenadores) o privado (solo el propio jugador). |
| RF-02.6 | El perfil puede incluir opcionalmente el numero de camiseta habitual del jugador (campo numerico, 1-99). |
| RF-02.7 | El perfil debe incluir una descripcion personal libre (bio) de hasta 500 caracteres, editable en cualquier momento. |

## RF-03: Estadisticas Deportivas

| ID      | Descripcion                                                                                                                  |
| ------- | ---------------------------------------------------------------------------------------------------------------------------- |
| RF-03.1 | El sistema debe permitir registrar por temporada: partidos jugados, minutos, goles, asistencias, tarjetas amarillas y rojas. |
| RF-03.2 | El sistema debe calcular automaticamente: goles/partido, asistencias/partido, participacion ofensiva y rendimiento general.  |
| RF-03.3 | Las estadisticas deben poder actualizarse en cualquier momento por el propio jugador.                                        |

| RF-03.4 | Las estadisticas son ingresadas manualmente por el propio jugador. El sistema no valida ni certifica los datos; la responsabilidad de veracidad recae en el usuario. Esta condicion debe comunicarse visualmente en la interfaz. |
| RF-03.5 | El sistema no genera un "rating general" numerico global del jugador. Los unicos indicadores calculados son los KPIs derivados de las estadisticas ingresadas (goles/partido, asistencias/partido, participacion ofensiva). |

## RF-04: Modulo de Desempeno — Atributos

Cada jugador tiene valoraciones en 4 dimensiones (1–10 por atributo):

| Tecnica                                 | Fisica                                      | Tactica                                                     | Mental                                                         |
| --------------------------------------- | ------------------------------------------- | ----------------------------------------------------------- | -------------------------------------------------------------- |
| • Pase• Control• Regate• Definicion | • Velocidad• Fuerza• Resistencia• Salto | • Posicionamiento• Lectura de juego• Presion• Cobertura | • Liderazgo• Concentracion• Toma de decisiones• Compromiso |

| ACLARACION: Los atributos son una AUTOEVALUACION del propio jugador (escala 1-10). No representan una calificacion externa ni certificada. La interfaz debe dejar esto explicito para que scouts y entrenadores interpreten los valores como autopercepcion deportiva. En versiones futuras podra habilitarse la evaluacion externa por parte de entrenadores registrados. |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

## RF-05: Radar Futbolistico

| ID      | Descripcion                                                                                  |
| ------- | -------------------------------------------------------------------------------------------- |
| RF-05.1 | El sistema debe calcular un valor promedio por dimension (Tecnica, Fisica, Tactica, Mental). |
| RF-05.2 | El perfil debe mostrar una visualizacion de radar con los 4 valores agregados.               |
| RF-05.3 | El radar debe actualizarse automaticamente al modificar los atributos del jugador.           |

## RF-06: Biblioteca Multimedia

El sistema organiza el contenido multimedia en 6 categorias con subcategorias:

* Fase Ofensiva: Goles, Remates, Asistencias, Centros, Conducciones.
* Fase Defensiva: Recuperaciones, Intercepciones, Barridas, Coberturas.
* Juego Asociativo: Pases, Paredes, Cambios de frente, Construccion de juego.
* Juego Aereo: Cabezazos ofensivos, Cabezazos defensivos, Duelos aereos.
* Transiciones: Contraataques, Recuperacion y salida, Retrocesos defensivos.
* Inteligencia Tactica: Movimientos sin balon, Presion, Ocupacion de espacios, Lectura de juego.

## RF-07: Buscador de Talento

| ID      | Descripcion                                                                                                |
| ------- | ---------------------------------------------------------------------------------------------------------- |
| RF-07.1 | Un scout/coach/club debe poder filtrar jugadores por: posicion, edad, ciudad, altura, club, pierna habil.  |
| RF-07.2 | El buscador debe admitir filtros numericos: goles minimos, asistencias minimas, valoracion general minima. |
| RF-07.3 | Los resultados deben paginarse (20 por pagina) y ordenarse por relevancia o valoracion.                    |

## RF-08: Sistema de Favoritos

| ID      | Descripcion                                                                    |
| ------- | ------------------------------------------------------------------------------ |
| RF-08.1 | Un scout debe poder guardar jugadores en listas de seguimiento personalizadas. |
| RF-08.2 | El sistema debe permitir comparar hasta 3 perfiles de jugadores en paralelo.   |
| RF-08.3 | El scout debe poder ver la evolucion de estadisticas de jugadores guardados.   |

# 4. REQUISITOS NO FUNCIONALES

| Categoria      | Requisito                                                                                                       |
| -------------- | --------------------------------------------------------------------------------------------------------------- |
| Rendimiento    | El API debe responder en menos de 500ms para el 95% de las peticiones bajo carga normal.                        |
| Escalabilidad  | La arquitectura debe permitir escalar horizontalmente el backend sin cambios en el frontend.                    |
| Seguridad      | Todas las contrasenas deben hashearse con bcrypt. Los tokens JWT deben firmarse con clave secreta configurable. |
| Disponibilidad | El sistema debe estar disponible el 99.5% del tiempo en ambiente de produccion.                                 |
| Usabilidad     | La aplicacion movil debe ser operable con una sola mano y seguir guias de accesibilidad WCAG 2.1 nivel A.       |
| Compatibilidad | Debe funcionar en iOS 15+ y Android 10+.                                                                        |
| Mantenibilidad | El codigo debe seguir arquitectura por capas: routes -> services -> repositories. Cobertura de tests >= 70%.    |
| Privacidad     | Los datos personales del jugador son privados por defecto. El jugador elige que informacion es publica.         |

# 5. ARQUITECTURA TECNICA

## 5.1 Stack Tecnologico

| Capa                 | Tecnologia                                                   |
| -------------------- | ------------------------------------------------------------ |
| Frontend movil       | React Native + Expo + TypeScript + NativeWind / Tailwind CSS |
| Backend API          | FastAPI (Python 3.11+) — arquitectura MVC por capas         |
| Base de datos        | PostgreSQL 15 + SQLAlchemy ORM + Alembic (migraciones)       |
| Autenticacion        | JWT (access token 15 min + refresh token 7 dias)             |
| Almacenamiento media | Cloudinary (video, imagen, streaming adaptativo)             |
| Validacion de datos  | Pydantic v2 (schemas de entrada y salida)                    |
| IA — Futuro         | OpenCV + YOLO + Python AI Services (analisis de video)       |

## 5.2 Arquitectura del Backend

| Flujo: Cliente HTTP -> Router (FastAPI) -> Service Layer (logica de negocio) -> Repository Layer (acceso a datos) -> PostgreSQL. Cloudinary se invoca desde la Service Layer para operaciones de media. |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

## 5.3 Modelo de Datos — Entidades Principales

| Entidad           | Atributos clave                                                                                                                         |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| users             | id, email, password_hash, role, created_at, is_active                                                                                   |
| player_profiles   | id, user_id, full_name, age, city, nationality, height, weight, foot, position_main, position_secondary, club, category, bio, photo_url |
| player_stats      | id, player_id, season, matches, minutes, goals, assists, yellow_cards, red_cards                                                        |
| player_attributes | id, player_id, dimension (technical/physical/tactical/mental), attribute_name, score (1-10)                                             |
| player_strengths  | id, player_id, type (strength/improvement), description                                                                                 |
| media_items       | id, player_id, type (video/photo), category, subcategory, cloudinary_url, thumbnail_url, created_at                                     |
| scout_favorites   | id, scout_id, player_id, list_name, created_at                                                                                          |

# 6. ALCANCE — MVP vs VISION FUTURA

| VERSION MVP (v1.0)                                                                                                                                                                                                                                       | VISION FUTURA (v2.0+)                                                                                                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ✓ Registro e inicio de sesion✓ Perfil deportivo completo✓ Estadisticas y KPIs calculados✓ Fortalezas y debilidades✓ Radar de 4 dimensiones✓ Biblioteca multimedia categorizada✓ Buscador con filtros avanzados✓ Sistema de favoritos para scouts | → Scout Vision AI (analisis de video con IA)→ Generacion automatica de highlights→ Chat entre jugadores y clubes→ Publicacion de pruebas y convocatorias→ Geolocalización de talentos→ Rankings y comparador de perfiles→ Recomendaciones inteligentes para clubes→ Marketplace de oportunidades deportivas |

# 7. MODULO DE IA — SCOUT VISION AI

| Este modulo esta planificado para versiones futuras (v2.0+). Se documenta aqui como requisito de sistema para anticipar decisiones de arquitectura en el MVP. |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- |

## 7.1 Funcionalidades del Modulo

* Deteccion automatica de jugadas relevantes en video completo.
* Clasificacion automatica de clips en las categorias de la biblioteca multimedia.
* Generacion de resumen profesional del jugador (highlight reel).
* Estimacion de metricas: remates, pases, recuperaciones, distancia recorrida, velocidad maxima.

## 7.2 Stack Tecnologico Previsto

| Componente                      | Tecnologia                                   |
| ------------------------------- | -------------------------------------------- |
| Procesamiento de video          | OpenCV (Python)                              |
| Deteccion de objetos y acciones | YOLO v8+ (modelo preentrenado + fine-tuning) |
| Servicio de IA                  | FastAPI microservicio separado (async)       |
| Cola de tareas                  | Celery + Redis                               |
| Almacenamiento de resultados    | PostgreSQL + Cloudinary para clips generados |

# 8. ENDPOINTS API — REFERENCIA RAPIDA

## Autenticacion

| Metodo + Ruta              | Descripcion                                        |
| -------------------------- | -------------------------------------------------- |
| POST /auth/register        | Registro de nuevo usuario                          |
| POST /auth/login           | Inicio de sesion — retorna access + refresh token |
| POST /auth/refresh         | Renueva el access token con el refresh token       |
| POST /auth/forgot-password | Solicita recuperacion de contrasena                |
| POST /auth/reset-password  | Restablece contrasena con token de un solo uso     |

## Perfil del Jugador

| Metodo + Ruta                | Descripcion                                               |
| ---------------------------- | --------------------------------------------------------- |
| GET /players/{id}            | Obtiene perfil completo del jugador                       |
| PUT /players/{id}            | Actualiza informacion del perfil (solo el propio jugador) |
| GET /players/{id}/stats      | Estadisticas del jugador por temporada                    |
| PUT /players/{id}/stats      | Actualiza estadisticas                                    |
| GET /players/{id}/attributes | Obtiene valoracion de atributos                           |
| PUT /players/{id}/attributes | Actualiza valoraciones                                    |
| GET /players/{id}/media      | Lista contenido multimedia del jugador                    |
| POST /players/{id}/media     | Sube nuevo contenido multimedia a Cloudinary              |

## Buscador y Favoritos

| Metodo + Ruta                             | Descripcion                                                     |
| ----------------------------------------- | --------------------------------------------------------------- |
| GET /search/players                       | Busca jugadores con filtros (query params)                      |
| GET /scouts/{id}/favorites                | Lista jugadores guardados por el scout                          |
| POST /scouts/{id}/favorites               | Agrega jugador a favoritos                                      |
| DELETE /scouts/{id}/favorites/{player_id} | Elimina jugador de favoritos                                    |
| POST /scouts/{id}/lists                   | Crea una nueva lista de seguimiento                             |
| GET /scouts/{id}/lists                    | Lista todas las listas del scout                                |
| GET /scouts/{id}/lists/{list_id}          | Obtiene jugadores de una lista especifica                       |
| DELETE /scouts/{id}/lists/{list_id}       | Elimina una lista de seguimiento                                |
| DELETE /players/{id}/media/{media_id}     | Elimina un item multimedia del jugador                          |
| PUT /players/{id}/media/{media_id}        | Actualiza titulo, categoria o visibilidad de un item multimedia |
| GET /players/me                           | Obtiene el perfil del usuario autenticado                       |
| POST /players                             | Crea el perfil deportivo del jugador (primer login)             |

# 9. CRITERIOS DE ACEPTACION — MVP

| Modulo        | Criterio de Aceptacion                                                                                                                                |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Autenticacion | Un usuario puede registrarse, iniciar sesion y acceder a rutas protegidas con JWT valido.                                                             |
| Perfil        | Un jugador puede crear y actualizar su perfil con toda la informacion personal, fisica y deportiva.                                                   |
| Visibilidad   | Un jugador puede cambiar su perfil entre publico y privado. Un perfil privado no aparece en busquedas ni es accesible por scouts.                     |
| Estadisticas  | El sistema calcula y muestra correctamente los KPIs. La interfaz indica explicitamente que los datos son ingresados por el propio jugador.            |
| Atributos     | El radar se actualiza automaticamente al cambiar los valores. La interfaz muestra que se trata de una autoevaluacion, no de una calificacion externa. |
| Multimedia    | Un jugador puede subir, categorizar, editar y eliminar sus propios items multimedia.                                                                  |
| Buscador      | Un scout puede combinar al menos 5 filtros distintos y obtener resultados paginados correctos.                                                        |
| Favoritos     | Un scout puede crear listas con nombre propio, agregar, listar y eliminar jugadores de cada lista.                                                    |
| Seguridad     | Un PLAYER no puede editar el perfil de otro usuario. Un SCOUT no puede subir multimedia.                                                              |

| Scout AI — Especificacion de Requisitos de Software v1.0Documento academico + System Prompt para herramientas de IA (Claude, Stitch, Codex, Cursor) |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- |

**
