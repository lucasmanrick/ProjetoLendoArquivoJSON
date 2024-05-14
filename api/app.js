const express = require("express");
const router = require('./assets/routes/index')


const app = express();
const port= 5500;

// BodyParser
const bodyParser = require('body-parser');

// Configurar o BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.use(express.json());

app.use(express.static(`${__dirname}/public`))

app.use('/', router);

// INICIA O SERVIDOR NA PORTA INFORMADA
app.listen(port, () => {
    console.log(`Servidor respondendo na porta ${port}`);
});