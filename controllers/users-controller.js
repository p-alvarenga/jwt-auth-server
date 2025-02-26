"use strict"

const DetailError = require("../utils/detail-error.js");
const UsersModel = require("../models/users-model.js");

class UsersController {
	static async PostNewUser(req, res) {
		if (!req.body) {
			return res.status(500).send({ message: "Internal Server Error" });
		}	

		try {
			const user_data = {
				username: req.body.username,
				email: req.body.email,
				password: req.body.password,
			};

			const model_res = await UsersModel.registerNewUser(user_data);
		} catch(er) {
			if (er instanceof DetailError) {	
				return res.status(400).json({ 
					success: false,
					error: {
						message: er.cause,
						code: er.code,
					}
				});
			}
		
			return res.status(500).send({ message: "Internal Server Error"}); 
		}
	}
}

module.exports = UsersController;
