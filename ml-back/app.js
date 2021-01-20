const express = require('express');
const bodyParser = require('body-parser');
//Inicializando el objeto express
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const items = require('./api/Items');

//CORS ORIGIN MIDELWARE
app.use((req,res,next)=>{
	res.header('Access-Control-Allow-Origin','*');
	res.header('Access-Control-Allow-Headers','X-API-KEY, Origin, X-Requested-Width, Content-Type, Accept,Access-Control-Request-Method,Authorization,territoken');
	res.header('Access-Control-Request-Methods','GET, POST,OPTIONS,PUT,DELETE');
	res.header('Allow','GET, POST,OPTIONS,PUT,DELETE');
	next();
})

app.use('/api/', items);
module.exports = app;