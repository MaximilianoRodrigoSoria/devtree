# DevTree

Primer Proyecto con Express y TypeScript

**Autor:** Maximiliano R Soria

## Descripción

DevTree es un proyecto inicial que combina Express.js con TypeScript para crear una API RESTful robusta. El proyecto utiliza MongoDB como base de datos y está containerizado con Docker.

## Requisitos Previos

- Node.js (v16 o superior)
- Docker y Docker Compose
- npm o yarn

## Instalación

1. Clonar el repositorio o navegar al directorio del proyecto:

```bash
cd devtree
```

2. Instalar las dependencias:

```bash
npm install
```

3. Crear un archivo `.env` en la raíz del proyecto (si es necesario):

```env
PORT=3000
MONGODB_URI=mongodb://user:password@mongodb:27017/devtreedb
```

## Ejecución

### Iniciar con Docker Compose

```bash
docker-compose up
```

Esto iniciará:
- MongoDB en el puerto `27017`
- La base de datos `devtreedb` con credenciales configuradas

### Ejecutar en modo desarrollo

```bash
npm run dev
```

El servidor estará disponible en `http://localhost:3000`

### Compilar y ejecutar en producción

```bash
npm run build
npm start
```

## Estructura del Proyecto

```
devtree/
├── src/
│   ├── index.ts           # Punto de entrada de la aplicación
│   ├── server.ts          # Configuración del servidor Express
│   ├── router.ts          # Definición de rutas
│   ├── config/
│   │   ├── colorsMessage.ts # Mensajes con colores en consola
│   │   └── db.ts          # Configuración de conexión a MongoDB
│   └── models/
│       └── User.ts        # Modelo de usuario
├── docker/
│   ├── init-db.js         # Script de inicialización de base de datos
│   └── load-users.js      # Script para cargar usuarios iniciales
├── http/
│   ├── http-client.env.json    # Variables de entorno para cliente HTTP
│   └── POST_auth_register.http  # Ejemplo de petición HTTP
├── docker-compose.yml     # Configuración de servicios Docker
├── package.json           # Dependencias del proyecto
├── tsconfig.json          # Configuración de TypeScript
└── README.md              # Este archivo
```

## Dependencias

### Producción

- **express**: Framework web minimalista
- **mongoose**: ODM para MongoDB
- **colors**: Colorear salida en consola
- **dotenv**: Cargar variables de entorno desde archivo `.env`

### Desarrollo

- **typescript**: Lenguaje de tipado para JavaScript
- **ts-node**: Ejecutar archivos TypeScript directamente
- **nodemon**: Reiniciar automáticamente durante el desarrollo
- **@types/express**: Tipos de TypeScript para Express

## Consultas Útiles de MongoDB

### Obtener usuarios (primeros 10)

```javascript
db.getSiblingDB("devtreedb").getCollection("users").find({}).limit(10)
```

Esta query recupera los primeros 10 documentos de la colección `users` en la base de datos `devtreedb`.

## Scripts Disponibles

- `npm run dev` - Inicia el servidor en modo desarrollo con reinicio automático
- `npm run build` - Compila TypeScript a JavaScript en la carpeta `dist/`
- `npm start` - Inicia el servidor compilado en producción
- `npm test` - Ejecuta pruebas unitarias (no configuradas aún)

## Configuración de la Base de Datos

MongoDB se ejecuta dentro de un contenedor Docker con las siguientes credenciales:

- **Usuario:** `user`
- **Contraseña:** `password`
- **Puerto:** `27017`
- **Base de datos:** `devtreedb`

Los scripts de inicialización en `docker/` se ejecutan automáticamente al iniciar el contenedor.

## Contribuciones

Este es un proyecto inicial de aprendizaje. Se aceptan mejoras y sugerencias.

## Licencia

ISC

