"use strict"

const { ValidationError } = require("../utils/errors.js");

const isValidUsername = (req, res, next) => {
	const username = req.body.username; 
	const usernameRegex = /^[a-zA-z0-9]+$/

	try {
		if (!username || username.length > 8 || username.length < 3) {
			throw new ValidationError("Username Length Must Be Between 3 And 8");
		}

		if (!usernameRegex.test(username)) {
			throw new ValidationError("Username Must Be Alphanumeric");
		}
	} catch(err) {
		next(err);
	}

	next();
};

const isValidEmail = (req, res, next) => {
	const email = req.body.email;
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		
	try {
		if (!email || !emailRegex.test(email)) { 
			throw new ValidationError("Invalid Email Address");
		}
	} catch(err) { 
		next(err); 
	}

	next();
};

const isValidPassword = (req, res, next) => {
	if (!req.body || !body.password) 
		throw ValidationError("Password not provided");
	
	next(); 
}

module.exports = { isValidUsername, isValidEmail, isValidPassword };
