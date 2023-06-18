const {Router} = require('express');

const route = Router();

const {servicioGet, servicioPost, servicioPut, servicioDelete} = require('../controllers/servicioController');

route.get('/:_id', servicioGet)

route.get('/', servicioGet)

route.post('/',servicioPost)

route.put('/',servicioPut)

route.delete('/',servicioDelete)

module.exports=route;