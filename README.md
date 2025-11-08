# Encuestas API - Backend

Este es el backend para una aplicación de gestión de encuestas que permite la creación, publicación, recolección de respuestas y consulta de resultados.

## ⚙️ Configuración y Ejecución del Proyecto

### Prerrequisitos
- Node.js (versión 16.x o superior)
- npm (versión 8.x o superior)
- MongoDB (versión 4.x o superior)

### Instalación de Dependencias
```bash
npm install
```

### Variables de Entorno
Crea un archivo `.env` en la raíz del proyecto basándote en el archivo `.env.example`. Las variables necesarias son:

```env
APP_NAME=          # Nombre de la aplicación
PORT=              # Puerto en el que correrá el servidor (ej: 4000)
FRONTEND_URL=      # URL del frontend para CORS
MONGO_URI=         # URI de conexión a MongoDB
SECRET_KEY=        # Clave secreta para JWT
NODE_ENV=          # Entorno (development/production)

MAIL_HOST=         # Host del servidor de correo
MAIL_PORT=         # Puerto del servidor de correo
MAIL_USER=         # Usuario del servidor de correo
MAIL_PASS=         # Contraseña del servidor de correo
MAIL_FROM=         # Dirección desde la que se enviarán los correos
```

### Comandos de Arranque
```bash
npm run dev    # Inicia el servidor en modo desarrollo
npm start      # Inicia el servidor en modo producción
```

## 🚀 Estructura de Endpoints (API Reference)

### Autenticación

| Recurso | Método HTTP | Ruta/Endpoint | Descripción |
|---------|-------------|---------------|-------------|
| Registro | POST | /api/v1/register | Registra un nuevo usuario |
| Login | POST | /api/v1/login | Inicia sesión de usuario |
| Logout | POST | /api/v1/logout | Cierra sesión de usuario |
| Perfil | GET | /api/v1/profile | Obtiene el perfil del usuario autenticado |
| Verificar Email | GET | /api/v1/verify-email | Verifica el email del usuario |
| Reset Password | POST | /api/v1/request-password-reset | Solicita reseteo de contraseña |
| Reset Password | POST | /api/v1/reset-password/:token | Actualiza la contraseña |

#### Estructura de datos para endpoints de autenticación:

```json
// POST /api/v1/register
{
  "name": "string",
  "email": "string",
  "password": "string"
}

// POST /api/v1/login
{
  "email": "string",
  "password": "string"
}
```

### Encuestas

| Recurso | Método HTTP | Ruta/Endpoint | Descripción |
|---------|-------------|---------------|-------------|
| Encuestas | POST | /api/v1/encuestas | Crea una nueva encuesta |
| Encuestas | GET | /api/v1/encuestas | Obtiene todas las encuestas |
| Encuestas | PUT | /api/v1/encuestas/:id | Actualiza una encuesta específica |
| Encuestas | DELETE | /api/v1/encuestas/:id | Elimina una encuesta específica |

#### Estructura de datos para endpoints de encuestas:

```json
// POST /api/v1/encuestas
{
  "titulo": "string",
  "descripcion": "string",
  "preguntas": [
    {
      "pregunta": "string",
      "tipo": "string", // "multiple", "abierta", etc.
      "opciones": ["string"] // Solo para preguntas de opción múltiple
    }
  ]
}
```

### Imagen de Perfil

| Recurso | Método HTTP | Ruta/Endpoint | Descripción |
|---------|-------------|---------------|-------------|
| Imagen de Perfil | POST | /api/v1/upload-profile-image | Sube una imagen de perfil |

La imagen debe enviarse como `form-data` con el campo `iconProfile`.

## 👥 Autores
- [Agustin Indarte](https://github.com/Agustin-Indarte)
- [Maria Soledad Caria](https://github.com/Soledad-519)
- [Sosa Leandro Martin](https://github.com/martinsosa5)
- [Facundo Santiago Olivera](https://github.com/Santi-Olivera)
- [Sebastian Ariel Garcia Esteves](https://github.com/Sag03011996)

## 🔒 Seguridad
- La API utiliza JWT para la autenticación
- Las contraseñas se almacenan hasheadas usando bcrypt
- CORS configurado para permitir solo el origen del frontend
- Validación de datos con Zod