const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// Rutas
app.use('/api/users', userRoutes);

// Iniciar Servidor
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
