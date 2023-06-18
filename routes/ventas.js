const {Router} = require('express');

const route = Router();

const {ventaGet, ventaPost, ventaDelete} = require('../controllers/ventasController');

route.get('/', ventaGet)

route.post('/',ventaPost)

route.delete('/',ventaDelete)

module.exports=route;