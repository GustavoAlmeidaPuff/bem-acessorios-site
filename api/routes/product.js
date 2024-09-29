const express = require('express');
const Product = require('../models/product'); // Certifique-se de que o modelo Product está importado
const router = express.Router();

// Rota para buscar todos os produtos
router.get('/', async (req, res) => {
    try {
        const products = await Product.find(); // Busca todos os produtos
        res.json(products); // Retorna os produtos como JSON
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar produtos' });
    }
});

// Você pode adicionar mais rotas aqui, como para criar, atualizar ou deletar produtos

module.exports = router;
