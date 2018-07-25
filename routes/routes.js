var express = require('express');
var router = express.Router();
var passport = require('passport');
var controllers = require('.././controllers');
var userMiddleware = require('.././middleware/user');

router.get('/', userMiddleware.isLogged, controllers.HomeController.index);

//rutas usuario
router.get('/user/signup', controllers.UserController.getSignUp);
router.post('/user/signup', controllers.UserController.postSignUp);
router.get('/user/logIn', controllers.UserController.getLogIn);
router.post('/user/logIn', passport.authenticate('local',{
    successRedirect : '/',
    failureRedirect : '/user/logIn',
    failureFlash : true
}));
router.get('/user/logout', controllers.UserController.getLogOut);

module.exports = router;
