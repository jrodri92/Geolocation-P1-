var mysql = require('mysql');
var userc = require('.././controllers');

var lista = new Array();
var market = new Array();
function iniciar(){
  return true;
}
module.exports = market;
module.exports = {
    index : function(req,res,next){
      res.render('home', {
        isAuthenticated : req.isAuthenticated(),
        user : req.user,
        lista: lista,
        market: market
      });  
    },

  postLocation : function (req, res) {
    if (!req.body.latitude) lista = 0;
      else{
      var location = {
        user: req.body.userid,
        latitude: req.body.latitude,
        longitud: req.body.longitude,
      }

      market[0]=req.body.userid;
      market[1]=parseFloat(req.body.latitude);
      market[2]=parseFloat(req.body.longitude);

      lista.push(market);
      console.log(lista);

      var config = require('.././database/config');
      var db = mysql.createConnection(config);
      db.connect();
    
      db.query('INSERT INTO locations SET ?', location, function(err, rows, fields){
        if(err) throw err;
        
        db.end();
      });
      var local1 = true;
    }
    return res.render('home', {
      isAuthenticated : req.isAuthenticated(),
      user : req.user,
      lista : lista, 
      market: market
    });

  }
}