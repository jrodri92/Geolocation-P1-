var mysql = require('mysql');
var userc = require('.././controllers');

var UserLocation = require('../models/location');

module.exports = {
    index : function(req,res,next){
      res.render('home', {
        isAuthenticated : req.isAuthenticated(),
        user : req.user
      });  
    },


  postLocation : function (req, res) {
    var newlocation = {
      useremail: req.body.useremail,
      latitude: req.body.latitude,
      longitud: req.body.longitude,
    }

    UserLocation.addLocation(newlocation, function (err, location) {
      if (err) throw err;
      console.log(location);
    });
    
    return res.render('home', {
      isAuthenticated : req.isAuthenticated(),
      user : req.user
    });
  }
}