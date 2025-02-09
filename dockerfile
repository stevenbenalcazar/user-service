# Usa Node.js como imagen base
FROM node:18-slim

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos del proyecto
COPY package.json package-lock.json ./

# Instala las dependencias
RUN npm install --only=production

# Copia el resto del código
COPY . .

# Expone el puerto en el que correrá la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["node", "src/index.js"]
