const {Router} = require('express');

const route = Router();

const {abonoGet, abonoPost, abonoPut, abonoDelete} = require('../controllers/abonoController');

route.get('/', abonoGet)

route.post('/',abonoPost)	

route.put('/',abonoPut)	

route.delete('/',abonoDelete)

module.exports=route;