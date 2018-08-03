var bcrypt = require('bcryptjs');
var express = require('express');
var router = express.Router();
var expressValidator = require('express-validator');

var User = require('.././models/user');

module.exports = {
  getSignUp : function(req,res,next){
    return res.render('users/signup');
  },

  postSignUp: function(req,res,next){
    
    var user = new User({
      email : req.body.email,
      name : req.body.name,
      password : req.body.password
    });

    User.createUser(user, function(err,user){
      if(err) throw err;
      console.log(user);
    });

    req.flash('info','you have successfully registered');
    return res.render('users/logIn', {message: req.flash('info'), automessage: req.flash('automessage')});
  },

  getLogIn: function(req,res,next){
    return res.render('users/logIn', {message: req.flash('info'), automessage: req.flash('automessage')});
  },

  getLogOut: function(req,res,next){
    req.logout();
    res.redirect('/user/logIn');
  }
};