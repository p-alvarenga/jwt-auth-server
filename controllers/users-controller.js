"use strict"

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const DetailError = require("../utils/detail-error.js");
const UsersModel = require("../models/users-model.js");

class UsersController {
	static async PostNewUser(req, res) {
		if (!req.body) {
			return res.status(400).json({ 
					success: false,
					error: {
						message: "User not provided",
						code: "BAD_REQUEST",
					}
				});
		}	

		try {
			const user_data = {
				username: req.body.username,
				email: req.body.email,
				password: req.body.password,
			};

			const model_res = await UsersModel.registerNewUser(user_data);
			
			return res.status(201).json({ message: "User Created Successfully" })
		} catch(err) {
			if (err instanceof DetailError) {
				return res.status(DetailError.statusCode || 500).json({ 
					success: false,
					error: {
						message: err.cause || "Unknown Cause",
						code: err.code || "SERVER_ERROR",
					}
				});
			}
		
			return res.status(500).send({ 
				success: false,
				error: {
					message: "Internal Server Error",
					code: undefined,
				}
			}); 
		}
	}

	///

	static async UserLogin(req, res) {
		if (!req.body || !req.body.email || !req.body.password) {
			return res.status(400).json({
				error: { message: "User not provided", code: "BAD_REQUEST" }
			})
		}

		try {
			const find_user = await UsersModel.findUserByEmail(req.body.email);
			const valid_password = await bcrypt.compare(req.body.password, find_user.password);
			
//			console.log(find_user);

			if (!valid_password) {
				return res.status(401).json({
					error: { message: "Incrrect Password", code: "AUTH_INCORRECT_PASSWORD" }
				});
			}
				
			const token = jwt.sign(
				{ id: find_user.id, email: find_user.email },
				process.env.ACCESS_TOKEN_SECRET,
				{ expiresIn: "1h" },
			);

			return res.status(200).json({ token });
		} catch (err) {
			console.error(err);

			if (err instanceof DetailError) {
				return res.status(err.statusCode || 500).json({
					error: { 
						message: err.cause || "Unknown Cause", 
						code: err.code || "SERVER_ERROR" 
					}
				});
			}
	
			return res.status(500).json({
				success: false, 
				error: {
					message: "Internal Server Error",
					code: "INTERNAL_SERVER_ERROR",
				}
			});
		}
	}

	static async getProfile(req, res) {
		try {
			return res.status(200).json({ message: "Profile Not Ready Yet" });
		} catch (err) {
			if (err instanceof DetailError) {
				return res.status(err.statusCode).json({
					message: err.cause || "Unknown Cause",
					code: err.code || "SERVER_ERROR",
				});
			}
		}
	}
}

module.exports = UsersController;
