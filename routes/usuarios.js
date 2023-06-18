const {Router} = require('express');

const route = Router();

const {usuarioGet, usuarioPost, usuarioDelete, usuarioPut} = require('../controllers/usuarioController');

route.get('/:_id',usuarioGet)

route.get('/',usuarioGet)

route.post('/',usuarioPost)

route.put('/',usuarioPut)

route.delete('/',usuarioDelete)

module.exports=route;