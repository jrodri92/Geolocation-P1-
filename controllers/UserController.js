var mysql = require('mysql');
var bcrypt = require('bcryptjs');

module.exports = {
  getSignUp : function(req,res,next){
    return res.render('users/signup');
  },

  postSignUp: function(req,res,next){
    
    var salt = bcrypt.genSaltSync(10);
    var password = bcrypt.hashSync(req.body.password, salt);
    
    var user = {
      email : req.body.email,
      nombre : req.body.name,
      password : password
    };
    
    var config = require('.././database/config');

    var db = mysql.createConnection(config);

    db.connect();
    

    db.query('INSERT INTO users SET ?', user, function(err, rows, fields){
      if(err) throw err;
      
      db.end();
    });
    req.flash('info','you have successfully registered');
    return res.render('users/logIn', {message: req.flash('info'), automessage: req.flash('automessage')});

  },

  getLogIn: function(req,res,next){
    return res.render('users/logIn', {message: req.flash('info'), automessage: req.flash('automessage')});
  }
};