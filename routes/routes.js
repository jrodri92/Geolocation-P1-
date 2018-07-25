var express = require('express');
var router = express.Router();
var passport = require('passport');
var controllers = require('.././controllers');

router.get('/', controllers.HomeController.index);

//rutas usuario
router.get('/user/signup', controllers.UserController.getSignUp);
router.post('/user/signup', controllers.UserController.postSignUp);
router.get('/user/logIn', controllers.UserController.getLogIn);
router.post('/user/logIn', passport.authenticate('local',{
    succesRedirect : '/',
    failureRedirect : '/user/logIn',
    failureFlash : true
}));

module.exports = router;
