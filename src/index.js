const express = require('express'); 
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');

dotenv.config(); // ✅ Cargar variables de entorno primero

const app = express();

// 🔹 Configurar CORS para permitir conexiones desde el frontend
const corsOptions = {
  origin: process.env.FRONTEND_URL || '*', // Permitir desde el frontend
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization'
};
app.use(cors(corsOptions));

app.use(express.json());

// Rutas
app.use('/api/users', userRoutes);

// ✅ Definir PORT correctamente antes de iniciar el servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);

  // Sincronizar Base de Datos
  try {
    await sequelize.sync({ force: false });
    console.log('✅ Base de Datos sincronizada');
  } catch (error) {
    console.error('❌ Error al sincronizar la base de datos:', error);
  }
});