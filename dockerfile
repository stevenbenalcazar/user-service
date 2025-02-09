# Usar Node.js como base
FROM node:18

# Configurar el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar archivos necesarios al contenedor
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de los archivos
COPY . .

# Exponer el puerto en el que corre el servicio
EXPOSE 3000

# Comando para ejecutar el servicio
CMD ["node", "src/index.js"]
