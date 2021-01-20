'use strict'
require('dotenv').config();
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require("swagger-jsdoc");
const express = require('express');
const path = require('path');
const stage = process.env.STAGE || 'local';
const port = process.env.PORT || 3000;
const http = require('http');
const app = require('./app');
const server = http.createServer(app);
const swaggerDocument = require('./swagger.json');

// Swagger Host
let host = '';
if(stage === 'prod'){
	host = 'api.mercadolibre.com';
}else if(stage === 'qa'){
	host = 'api-qa.mercadolibre.com';
}else if(stage === 'dev'){
	host = 'api-dev.mercadolibre.com';
}else{
	host = `locaslhost:${port}`;
}

swaggerDocument.host = host;
const swaggerDocs = swaggerJsdoc({
	swaggerDefinition: swaggerDocument,
	apis: ['api/**/index.js']
})

server.listen(port, () => {
	app.use(express.static(path.join(__dirname, 'apidoc')), swaggerUi.serve, swaggerUi.setup(swaggerDocs));
	console.log("Aplicación inicializada, bienvenido a Mercado libre API!! " + port);
});
	
