const express = require('express');
const router = express.Router();

const controllers = require ('../controller/index')


router.post('/RegistrarPessoa', controllers.RegistrarClientes)


module.exports = router ;