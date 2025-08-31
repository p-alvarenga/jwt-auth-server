"use strict"

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { AppError, ValidationError, AuthError, NotFoundError } = "../utils/errors.js"

const UsersModel = require("../models/users-model.js");

class UsersController {
	static async postNewUser(req, res, next) {		
		try {
			await UsersModel.registerNewUser(req.body);
			return res.status(201).json({ message: "User Created Successfully" })
		} catch(err) {
			next(err);
		}
	}

	static async userLogin(req, res, next) {
		try {
			const findUser = await UsersModel.findUserByEmail(req.body.email);
			const isValidPassword = await bcrypt.compare(req.body.password, findUser.password);

			if (!isValidPassword) {	
				throw AuthError("Incorrect Password", "AUTH_INCORRECT_PASSWORD"); 
			}
				
			const token = jwt.sign({ id: findUser.id },	process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1h" });
			return res.status(200).json({ token });
		} catch (err) {
			next(err); 
		}
	}


	static async getProfile(req, res, next) {
		try {			
			const profileData = await UsersModel.fetchProfileById(req.token_payload.id);
	
			if (!profileData) { 
				throw AuthError("Unexpected Error", "AUTH_UNEXPECTED_ERROR"); 
			}

			return res.status(200).json({ profile: {
				userId: profileData.id,
				username: profileData.username,
				email: profileData.email,
				photoUrl: profileData.photo,
				description: profileData.description,
			}});
		} catch (err) {
			next(err);
		}
	}
}

module.exports = UsersController;
