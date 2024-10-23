const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const router = express.Router();

// Rota de login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (user && await bcrypt.compare(password, user.password)) {
        res.status(200).json({ message: 'Login bem-sucedido! :)', redirect: '/catalog/' });
    } else {
        res.status(401).json({ message: 'Credenciais inválidas.' });
    }
});

module.exports = router;
