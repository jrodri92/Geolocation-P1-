var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcryptjs');
var User = require('../models/user');

module.exports = function(passport){

	passport.serializeUser(function(user, done){
		done(null, user);
	});

	passport.deserializeUser(function(obj, done){
		done(null, obj);
	});

	passport.use(new LocalStrategy({ passReqToCallback : true},  
		function(req, email, password, done){
			User.getUserByUsername(email, function (err, user) {
				if (err) throw err;
				if (!user) {
					return done(null, false, { message: 'Unknown User' });
				}
				User.comparePassword(password, user.password, function (err, isMatch) {
					if (err) throw err;
					if (isMatch) {
						return done(null, {
							id: user.id, 
							name : user.name,
							email : user.email
						});
					} else {
						return done(null, false, { message: 'Invalid password' });
					}
				});
			});
		})
	);

};