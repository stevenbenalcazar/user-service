const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);

// ✅ Ruta para listar usuarios (solo para pruebas)
router.get('/', async (req, res) => {
  try {
    res.json({ message: "API funcionando correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error en el servidor" });
  }
});

module.exports = router;
