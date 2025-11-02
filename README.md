# Voz Ciudadana 
Proyecto Final – Taller Integrador Tecnicatura Universitaria en Informática – Facultad de Ingeniería – UNNE Universidad Nacional del Nordeste (UNNE) Docente responsable: Ing. Fernando A. Figueredo Fecha: Noviembre de 2025

## Autores
Acosta Olga Elizabet,
Barboza Cristian,
Bonafos Alejandro,
Soto López Carlos,
Vera Morandini María Paula,
Zaballía Carmen Raquel.

Cada integrante asumió roles definidos, aportando desde sus conocimientos técnicos y organizativos.

## Estructura del repositorio y trabajo colaborativo
Este repositorio fue creado como carpeta final para la presentación institucional del proyecto. Durante el desarrollo, cada integrante trabajó en módulos específicos (frontend, backend, base de datos), y se utilizaron distintos repositorios para organizar el trabajo técnico.

Para la entrega final, se decidió unificar todo el contenido en un solo repositorio, reorganizando las carpetas y documentación. Por este motivo los commits originales de cada módulo no se reflejan aquí, ya que se migró el contenido desde repositorios individuales.
Esta estructura busca facilitar la evaluación institucional, la claridad técnica y la presentación conjunta del proyecto.

## Descripción del proyecton
Voz Ciudadana es una plataforma web que permite a los vecinos interactuar con el municipio de forma ágil y transparente. A través de la pagina, los ciudadanos pueden registrar reclamos, responder una encuesta de satisfaccion y hacer seguimiento del estado de sus reclamos. Por su parte, los empleados municipales gestionan los reclamos recibidos, actualizan su estado y responden con comentarios visibles para el vecino y pueden ver los resultados de la encuesta de satisfaccion.

## Frontend (React + Vite)
Registro y login de vecinos

Carga de reclamos municipales

Visualización de reclamos enviados y sus resoluciones

Respuesta a encuestas municipales

## Backend (Express)
Gestión de reclamos por parte del empleado municipal

Cambio de estado

Agregado de comentarios

Visualización de encuestas respondidas por los vecinos

##  Requisitos técnicos

### Frontend (React + Vite)
Node.js 

npm 



### Backend (Express)
Node.js 

npm

MySQL (gestionado con MySQL Workbench)


## 🚀 Instalación y ejecución

## Frontend 
### Clonar el repositorio
git clone https://github.com/mariapaulaveram/VozCiudadana/tree/main/reclamos-municipales-react

### Ir al directorio del frontend
cd reclamos-front

### Instalar dependencias
npm install

### Ejecutar en modo desarrollo
npm run dev


## Backend
### Clonar el repositorio
git clone https://github.com/mariapaulaveram/VozCiudadana/tree/main/reclamos-back

# Ir al directorio del backend
cd reclamos-back

# Instalar dependencias
npm install

# Configurar variables de entorno (crear archivo .env)
MYSQL_HOST=localhost
MYSQL_DB_NAME= nombre de la bd
MYSQL_USER=root
MYSQL_PASSWORD= elpassword

CLOUDINARY_CLOUD_NAME=tusdatos
CLOUDINARY_API_KEY=tusdatos
CLOUDINARY_API_SECRET=tusdatos

EMAIL_USER=vozciudadana.municipio@gmail.com    
EMAIL_PASSWORD=tusdatos

# Ejecutar el servidor
npm start


## 🗄️ Base de datos
La aplicación utiliza MySQL como motor de base de datos, gestionado mediante MySQL Workbench. El esquema se encuentra en el archivo reclamosdb.sql, que incluye la creación y carga de las siguientes tablas:

### Tablas principales
| Tabla    | Descripción                                                                    |
|----------|------------------------------------------------------------------------------  |
| vecinos  | Registro de usuarios ciudadanos con nombre, apellido, email y contraseña       |
| usuarios | Usuarios administrativos (empleados municipales) con credenciales de acceso    |
| reclamos | Reclamos enviados por los vecinos, con tipo, descripción, estado y comentarios |
| encuesta | Encuestas respondidas por los vecinos, con nivel de satisfacción y comentarios |


- Abrí MySQL Workbench y conectate a tu servidor local.

- Ejecutá el contenido del archivo reclamosdb_dump.sql para crear la base de datos reclamosdb y sus tablas.

- Verificá que las tablas se hayan creado correctamente y que contengan datos de prueba.

- El backend se conecta a esta base de datos utilizando las variables de entorno definidas en el archivo .env. Asegurate de que los valores coincidan con tu configuración local.

DB_HOST=localhost
DB_PORT=3000
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=reclamosdb
PORT=3000


## Conexión entre Frontend y Backend
El frontend (React + Vite) se comunica con el backend (Express) mediante peticiones HTTP usando Axios. Las rutas públicas del backend están diseñadas para ser consumidas directamente por la interfaz web.

### URL base del backend
Por defecto, el backend corre en:
```http://localhost:3000```


## Funcionalidades adicionales para Voz Ciudadana
### 🔒 Autenticación y seguridad

Validación de sesión: agregar expiración de sesión y cierre automático por inactividad.

### 📬 Notificaciones y seguimiento

Historial de cambios: mostrar al vecino un registro de cuándo y cómo se actualizó su reclamo.

### 📊 Visualización de datos

Estadísticas públicas: mostrar en la home datos agregados como “Reclamos resueltos este mes” o “Nivel de satisfacción promedio”.

### 📍 Geolocalización
Mapa de reclamos (frontend): usar Leaflet o Google Maps para mostrar reclamos por ubicación.

Carga con ubicación automática: permitir que el vecino comparta su ubicación al hacer un reclamo.


## Licencia

Este proyecto está bajo la Licencia MIT. Podés usarlo, modificarlo y distribuirlo libremente, siempre que mantengas los créditos originales.  
Ver el archivo [LICENSE](./LICENSE) para más detalles.