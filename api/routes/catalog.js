const express = require('express');
const path = require('path'); // Adicione esta linha
const router = express.Router();

// Rota para a página de catálogo
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/catalog.html')); // Certifique-se de que o arquivo catalog.html exista na pasta public
});

module.exports = router;
