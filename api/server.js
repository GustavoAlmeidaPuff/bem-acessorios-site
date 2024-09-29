const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path'); // Importa o módulo path
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/product'); // Importa as rotas de produtos

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Serve arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, '../public')));

// Serve arquivos CSS
app.use('/css', express.static(path.join(__dirname, '../css')));

// Serve imagens
app.use('/assets', express.static(path.join(__dirname, '../assets')));

// Serve fontes
app.use('/fonts', express.static(path.join(__dirname, '../assets/fonts')));

//serve scripts
app.use('/scripts', express.static(path.join(__dirname, '../js/')));

// Rota para o index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

mongoose.connect('mongodb://localhost:27017/seu_banco');

// Rotas de autenticação
app.use('/auth', authRoutes);

// Rota para produtos
app.use('/products', productRoutes); // Usa as rotas de produtos

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});