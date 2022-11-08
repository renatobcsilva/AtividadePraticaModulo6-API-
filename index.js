const express = require ('express');
const server = express();
const destinos = require('./src/data/destinos.json');

server.get('/destinos', (req,res) => {
    return res.json(destinos)
});

server.listen(3000, () => {
    console.log('Servidor está funcionando!')
});