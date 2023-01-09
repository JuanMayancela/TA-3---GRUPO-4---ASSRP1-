const { Router } = require('express');
const router = Router();
const { ini, initStore} = require('../controllers/controllers.js');

router.get('/Inicio',ini);
router.get('/Inicio/Store',initStore);
module.exports = router;