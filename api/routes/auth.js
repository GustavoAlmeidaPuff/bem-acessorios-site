const express = require('express');
const User = require('../models/user');
const router = express.Router();

// Rota de login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });

    if (user) {
        res.status(200).json({ message: 'Login bem-sucedido! :)', redirect: '/catalog/' }); // Adicionado redirecionamento
    } else {
        res.status(401).json({ message: 'Credenciais inválidas.' });
    }
});

module.exports = router;

