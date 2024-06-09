const express = require('express');
const bodyParser = require('body-parser');

const os = require ('os');

const app = express();

app.get(`/`,(request, response) => {
    return response
    .status(200)
    .json({
        status: true,
        mensagem: 'OK'
    });
})

app.get(`/liveness`,(request, response) => {
    return response
    .status(200)
    .json({
        status: true,
        mensagem: 'OK liveness'
    });
})



app.get(`/readiness`,(request, response) => {
    return response
    .status(500)
    .json({
        status: true,
        mensagem: 'OK readiness ta tudo ok',
        os: os.platform()
    });
})

module.exports = app;