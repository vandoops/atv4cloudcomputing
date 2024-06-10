const express = require('express');
const app = express();
const appRoutes = require('./app'); // Corrigido de ./app.js para ./app

const port = 3000;

app.use('/', appRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
