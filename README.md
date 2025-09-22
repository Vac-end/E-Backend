# E-Backend

[![Node.js](https://img.shields.io/badge/Node.js-v20-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-5.x-blue.svg)](https://expressjs.com/)

**E-Backend** es un backend escalable diseñado para [gestion de estudiantes, cursos, tareas, etc.]. Construido con tecnologías modernas para un rendimiento óptimo y fácil mantenimiento.

## Características Principales

- **Autenticación Segura**: Soporte para JWT.
- **APIs RESTful**: Endpoints documentados y accesibles.
- **Base de Datos**: Integración con [Mysql/PostgreSQL].
- **Seeding**: Pobla la base de datos con datos iniciales.
- **Desarrollo Ágil**: Modo desarrollo con recarga automática.

## Requisitos Previos

- Node.js (versión 18 o superior)
- npm
- [Opcional: Mysql/PostgreSQL local o en Docker]

## Instalación

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/Vac-end/E-Backend.git
   cd E-Backend
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**:
   - Crea un archivo `.env` en la raíz del proyecto.
   - Ejemplo de configuración:
     ```bash
     PORT=3000
     MONGODB_URI=mongodb://localhost:27017/e-backend
     JWT_SECRET=tu_secreto_aqui
     ```

4. **Poblar la base de datos (seeding)**:
   - Usa el comando para cargar datos iniciales:
     ```bash
     npm run seed
     ```

## Inicializar el Proyecto

1. **Iniciar el servidor en modo desarrollo**:
   - Usa el siguiente comando para arrancar con recarga automática:
     ```bash
     npm run start:dev
     ```

2. El servidor estará disponible en `http://localhost:3000`.

## Ejemplo de Uso de la API

### Crear cursos
- **Método**: Post
- **Endpoint**: `/api/courses`
- **Autenticación**: Requiere token JWT en el header.

**Ejemplo de solicitud**:
```bash
curl -X POST http://localhost:3000/api/courses \
-H "Authorization: Bearer <tu_token_jwt>" \
-H "Content-Type: application/json" \
-d '{
  "title": "Curso de Prueba",
  "description": "Descripción del curso de prueba creado por admin o docente",
  "createdBy": 1
}'
```

**Respuesta esperada**:
```json
{
  "status": "success",
  "data": [
    {
      "createdAt": "2025-09-22T07:59:29.520Z",
      "updatedAt": "2025-09-22T07:59:29.520Z",
      "id": 1,
      "title": "Curso de Prueba",
      "description": "Descripción del curso de prueba creado por admin o docente",
      "createdBy": 1
    }
  ]
}
```

## Estructura del Proyecto

```
E-Backend/
├── src/
│   ├── controllers/     # Lógica de controladores
│   ├── models/          # Modelos de datos
│   ├── routes/          # Definición de rutas
│   ├── middleware/      # Middlewares (auth, validación)
│   ├── config/          # Configuraciones (DB, env)
│   └── seed/            # Scripts de seeding
├── logs/                # Registros de la aplicación
├── .env.example         # Ejemplo de variables de entorno
├── package.json
└── README.md
```

## Contacto

- **Autor**: Vac-end

¡Gracias por usar E-Backend!
