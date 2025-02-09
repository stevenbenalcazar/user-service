# User Service

## Descripción
El microservicio **User Service** permite la gestión de usuarios en la plataforma Taskify. Ofrece funcionalidades como el registro de usuarios, autenticación con JWT y almacenamiento seguro de contraseñas.

## 🚀 Tecnologías Utilizadas
- **Node.js** con **Express.js**
- **PostgreSQL** como base de datos
- **Sequelize** como ORM
- **JWT** para autenticación
- **bcryptjs** para encriptación de contraseñas
- **Docker** para contenedorización
- **AWS EC2** para despliegue
- **SQS** para procesamiento asíncrono de eventos

## 📌 Instalación y Configuración
### 1️⃣ Clonar el Repositorio
```sh
git clone https://github.com/tu-repo/user-service.git
cd user-service
```

### 2️⃣ Configurar Variables de Entorno
Crear un archivo `.env` en la raíz del proyecto con los siguientes valores:
```ini
PORT=3000
DB_HOST=44.203.204.212
DB_NAME=dbusers
DB_USER=user_db
DB_PASSWORD=12345
JWT_SECRET=supersecretkey
```

### 3️⃣ Instalar Dependencias
```sh
npm install
```

### 4️⃣ Ejecutar en Local
```sh
node src/index.js
```

## 🔥 Uso de la API
### **📝 Registro de Usuario**
**Endpoint:** `POST /api/users/register`

**Ejemplo de Request:**
```json
{
  "username": "usuario123",
  "email": "usuario@example.com",
  "password": "contraseña_segura"
}
```

**Ejemplo de Respuesta:**
```json
{
  "message": "Usuario registrado exitosamente",
  "user": {
    "id": 1,
    "username": "usuario123",
    "email": "usuario@example.com"
  }
}
```

### **🔑 Inicio de Sesión**
**Endpoint:** `POST /api/users/login`

**Ejemplo de Request:**
```json
{
  "email": "usuario@example.com",
  "password": "contraseña_segura"
}
```

**Ejemplo de Respuesta:**
```json
{
  "message": "Login exitoso",
  "token": "JWT_GENERADO"
}
```

## 🐳 Despliegue con Docker y AWS EC2
### **1️⃣ Construir la Imagen Docker**
```sh
docker build -t user-service .
```

### **2️⃣ Ejecutar en Docker Localmente**
```sh
docker run -d --name user-service -p 3000:3000 --env-file .env user-service
```

### **3️⃣ Subir Imagen a Docker Hub**
```sh
docker tag user-service:latest tuusuario/user-service:latest
docker push tuusuario/user-service:latest
```

### **4️⃣ Desplegar en AWS EC2**
Desde la instancia EC2:
```sh
docker pull tuusuario/user-service:latest
docker run -d --name user-service -p 3000:3000 --env-file .env tuusuario/user-service:latest
```

## ✅ Verificación de Funcionamiento
```sh
curl -X GET http://<IP_PUBLICA_USER_SERVICE>:3000/api/users
```

## 🛠 Contribuciones
Si deseas contribuir a este proyecto, haz un fork y envía un pull request.

## 📜 Licencia
Este proyecto está bajo la licencia MIT.

