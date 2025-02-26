"use strict"

const bcrypt = require("bcrypt");
const DetailError = require("../utils/detail-error.js");

const pool = require("../config/db.js");

class UsersModel {
	static async registerNewUser(user) {
		if (!user || !user.username || !user.email || !user.password) {
			throw new Error("Unexpected Error");
		}

		try {
			const q = "INSERT INTO users(username, email, password) VALUES($1, $2, $3)";
			
			const hashedPassword = await this.#hashPassword(user.password);

			if (!hashedPassword) {
				throw new Error("Internal Server Error");
			}

			await pool.query(q, [
				user.username,
				user.email,	
				hashedPassword,
			]);

			return 1;
		} catch (er) {
			//console.error(er);
			
			if (er.code === "23505") {
				if (er.detail.includes("(username)=")) {
					throw new DetailError("Internal Server Error",
						"Username Already Exists",
						"DUPLICATED_USERNAME",
					);
				} else if (er.detail.includes("(email)=")) {
					throw new DetailError("Internal Server Error", 
						"Email Already In Use",
						"DUPLICATED_EMAIL",
					);
				}
			}	

			throw new Error("Internal Server Error");
		}
	
		return null;
	}

	static async #hashPassword(password) {
		const saltRounds = 5;
		
		try {
			const hash = await bcrypt.hash(password, saltRounds);
			return hash;
		} catch (er) {
			console.error(er);
			throw new Error("Internal Server Error");
		}
	}
}

module.exports = UsersModel;
