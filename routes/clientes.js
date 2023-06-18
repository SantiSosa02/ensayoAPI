const {Router} = require('express');

const route = Router();

const {clienteGet, clientePost, clientePut, clienteDelete} = require('../controllers/clienteController');

route.get('/:_id', clienteGet)

route.get('/', clienteGet)

route.post('/',clientePost)

route.put('/',clientePut)

route.delete('/',clienteDelete)

module.exports=route;