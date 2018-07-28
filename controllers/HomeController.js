var mysql = require('mysql');
var userc = require('.././controllers');

module.exports = {
    index : function(req,res,next){
      res.render('home', {
        isAuthenticated : req.isAuthenticated(),
        user : req.user
      });  
    },

  postLocation : function (req, res) {

    var location = {
      user: req.body.userid,
      latitude: req.body.latitude,
      longitud: req.body.longitude,
    }

    var config = require('.././database/config');
    var db = mysql.createConnection(config);
    db.connect();
  
    db.query('INSERT INTO locations SET ?', location, function(err, rows, fields){
      if(err) throw err;
      
      db.end();
    });
  }
}