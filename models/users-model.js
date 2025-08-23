"use strict"

const bcrypt = require("bcrypt");
const DetailError = require("../utils/detail-error.js");

const pool = require("../config/db.js");

class UsersModel {
	static async registerNewUser(user) {	
		if (!user.username || !user.email || !user.password)
			throw Error("INTERNAL SERVER ERROR"); 

		try {
			const q = "INSERT INTO Users(username, email, password) VALUES(?, ?, ?)";
			const hashedPassword = await this.#hashPassword(user.password);

			if (!hashedPassword) throw new Error("Internal Server Error");

			console.log(`register ${user}`);

			await pool.query(q, [
				user.username,
				user.email,	
				hashedPassword,
			]); // ^-- Does not analyze it's return?

			return true;
		} catch (er) {	
			if (er.code === "23505") {
				if (er.detail.includes("(username)=")) {
					throw new DetailError(
						"Internal Server Error",
						`Username ${user.username} Already Exists`,
						"DUPLICATED_USERNAME",
						400
					);
				} else if (er.detail.includes("(email)=")) {
					throw new DetailError(
						"Internal Server Error", 
						`Email ${user.email} Already In Use`,
						"DUPLICATED_EMAIL",
						400
					);
				}
			}		
			//console.log(er);
			throw new Error("Internal Server Error");
		}
	
		return null;
	}

	static async findUserByEmail(email) {
		try {
			const q = "SELECT id, email, password FROM Users WHERE email = ?";
			const [rows] = await pool.query(q, [email]);
			
			console.log(rows[0]);

			if (!rows[0]) {
				throw new DetailError(
					"Resource Not Found",
					`Email "${email}" is not registered`,
					"RESOURCE_NOT_FOUND",
					404
				);
			}

			return rows[0] || null;
		} catch (err) {	
			throw err; // [!] possible leak of sensitive information
		}
	}

	static async fetchProfileById(id) {
		try {
			const q = "SELECT id, username, email, photo, description FROM Users WHERE id = ?";
			const [rows] = await pool.query(q, [id]);

			if (!rows[0]) {
				throw new DetailError(
					"Resource Not Found",
					`Id "${id}" is not registered (user does not exist)`,
					"RESOURCE_NOT_FOUND",
					404
				);
			} 

			return rows[0];
		} catch (err) {
			throw err;
		}
	}

	static async #hashPassword(password) {
		const saltRounds = 10;
		
		try {
			const hash = await bcrypt.hash(password, saltRounds);
			return hash;
		} catch (err) {
			console.error(err);
			throw new Error("Internal Server Error");
		}
	}
}

module.exports = UsersModel;
