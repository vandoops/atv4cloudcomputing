const express = require('express');
const mysql = require('mysql2');
const os = require('os');

const app = express();

const dbConfig = {
  host: 'db',
  user: 'usuarios',
  password: '123456',
  database: 'db_atv4',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

const pool = mysql.createPool(dbConfig);

// Rota principal
app.get('/', (request, response) => {
  return response
    .status(200)
    .json({
      status: true,
      mensagem: 'OK tudo bem'
    });
});

// Rota liveness
app.get('/liveness', (request, response) => {
  return response
    .status(200)
    .json({
      status: true,
      mensagem: 'OK liveness'
    });
});

// Rota readiness
app.get('/readiness', (request, response) => {
  return response
    .status(200)
    .json({
      status: true,
      mensagem: 'OK readiness ta tudo ok',
      os: os.platform()
    });
});

// Rota de consulta para dados
app.get('/consulta-dados', (request, response) => {
  pool.getConnection((err, connection) => {
    if (err) {
      return response.status(500).json({ error: err.message });
    }

    connection.query('SELECT * FROM Pessoas', (error, results) => {
      connection.release(); // Liberar a conexão, independentemente do resultado da consulta

      if (error) {
        return response.status(500).json({ error: error.message });
      }
      response.json(results);
    });
  });
});

module.exports = app;
