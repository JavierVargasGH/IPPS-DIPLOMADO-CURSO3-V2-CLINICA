
# API REST - Clinica

Proyecto de evaluacion integradora del Modulo 3
Backend y APIs REST.

## Tecnologias utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- JWT
- bcryptjs

## Requisitos

- Node.js
- Yarn
- Cuenta de MongoDB Atlas

## Instalacion

Clonar el repositorio:

```bash
git clone https://github.com/JavierVargasGH/IPPS-DIPLOMADO-CURSO3-V2-CLINICA.git
```

Ingresar a la carpeta:

```bash
cd IPPS-DIPLOMADO-CURSO3-V2-CLINICA
```

Instalar dependencias:

```bash
yarn
```

Crear un archivo .env en la raiz del proyecto.

Agregar las variables:

```env
MONGODB_URI=TU_URL_DE_MONGODB
JWT_SECRET=TU_CLAVE_SECRETA
```

Iniciar el servidor:

```bash
yarn dev
```

## Puerto

El servidor funciona en:

http://localhost:3001

## Rutas principales

### Autenticacion

- POST /auth/registro
- POST /auth/login

### Medicos

- GET /medicos
- GET /medicos/perfil
- GET /medicos/:id
- GET /medicos/:id/pacientes

### Pacientes

- POST /pacientes
- GET /pacientes
- GET /pacientes/:id
- PUT /pacientes/:id
- DELETE /pacientes/:id

Las rutas de medicos y pacientes requieren
autenticacion mediante token JWT.

## Video de demostracion

https://drive.google.com/file/d/1ZcxxZwmv-mkd3LQTXvt6nyAPF-p8vCJ9/view?usp=sharing