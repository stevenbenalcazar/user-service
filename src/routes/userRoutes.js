const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); // 🔹 Asegurar que se está importando correctamente

router.post('/register', userController.registerUser); // 🔹 Verificar que "registerUser" existe en el controlador
router.post('/login', userController.loginUser);       // 🔹 Verificar que "loginUser" existe en el controlador


// ✅ Ruta para listar usuarios (solo para pruebas)
router.get('/', async (req, res) => {
  try {
    res.json({ message: "API funcionando correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error en el servidor" });
  }
});

module.exports = router;
