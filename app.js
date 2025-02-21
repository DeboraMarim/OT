const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(cors());


// Iniciar o servidor
app.listen(3060, () => {
  console.log('Servidor rodando na porta 3035');
});

module.exports = app;
