var express = require('express');
var router = express.Router();
var controllers = require('.././controllers');

router.get('/', controllers.HomeController.index);

//rutas usuario
router.get('/user/signup', controllers.UserController.getSignUp);
router.post('/user/signup', controllers.UserController.postSignUp);


module.exports = router;
