const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    categoria: { type: String, required: true },
    subcategoria: { type: String, required: true },
    descricao: { type: String, required: true },
    descricao_detalhada: { type: String, default: '' },
    material: { type: String, required: true },
    preco: { type: Number, required: true },
    desconto: { type: Number, default: null },
    imagens: [{ type: String }], // Array de URLs
    disponivel: { type: Boolean, default: true },
    numero_itens: { type: Number, required: true },
    caracteristicas: {
        peso: { type: String, required: true },
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
