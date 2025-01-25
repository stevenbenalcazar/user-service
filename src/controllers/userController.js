const User = require('../models/User');
const SecurityService = require('../services/security');
const AWS = require('aws-sdk');

const sqs = new AWS.SQS({ region: process.env.AWS_REGION });

class UserController {
  static async register(req, res) {
    try {
      const { email, password } = req.body;

      // Hash del password
      const hashedPassword = await SecurityService.hashPassword(password);

      // Crear usuario en la base de datos
      const newUser = await User.create({ email, password: hashedPassword });

      // Enviar evento a SQS
      const message = {
        MessageBody: JSON.stringify({ userId: newUser.id, email: newUser.email }),
        QueueUrl: process.env.SQS_QUEUE_URL,
      };
      await sqs.sendMessage(message).promise();

      // Generar token JWT
      const token = SecurityService.generateToken({ id: newUser.id, email: newUser.email });

      return res.status(201).json({ message: 'Usuario registrado con éxito.', token });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error al registrar usuario.' });
    }
  }
}

module.exports = UserController;
