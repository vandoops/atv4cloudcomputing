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


app.get('/', (request, response) => {
  return response.status(200).json({
    status: true,
    mensagem: 'OK tudo bem'
  });
});


app.get('/liveness', (request, response) => {
  return response.status(200).json({
    status: true,
    mensagem: 'OK liveness'
  });
});


app.get('/readiness', (request, response) => {
  return response.status(200).json({
    status: true,
    mensagem: 'OK readiness ta tudo ok',
    os: os.platform()
  });
});

// Rota para consulta de dados da tabela Pessoas
app.get('/consulta-dados', (request, response) => {
  pool.getConnection((err, connection) => {
    if (err) {
      return response.status(500).json({ error: err.message });
    }

    connection.query('SELECT * FROM Pessoas', (error, results) => {
      connection.release();
      if (error) {
        return response.status(500).json({ error: error.message });
      }
      response.json(results);
    });
  });
});


app.get('/consulta-produtos', (request, response) => {
  console.log('Rota /consulta-produtos acessada');

  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Erro ao obter conexão do pool:', err.message);
      return response.status(500).json({ error: err.message });
    }

    connection.query('SELECT * FROM Produtos', (error, results) => {
      connection.release();
      if (error) {
        console.error('Erro na consulta SQL:', error.message);
        return response.status(500).json({ error: error.message });
      }
      console.log('Resultados da consulta:', results);
      response.json(results);
    });
  });
});

module.exports = app;
