"use strict"

const bcrypt = require("bcrypt");
const pool = require("../config/db.js");

const { AppError, ValidationError, AuthError, NotFoundError } = require("../utils/errors.js");

class UsersModel {
	static async registerNewUser(user) {	
		try {
			const sqlQuery = "INSERT INTO Users(username, email, password) VALUES(?, ?, ?)";
			const hashedPassword = await this.#hashPassword(user.password);

			if (!hashedPassword) 
				throw new AppError("Internal Server Error");

			await pool.query(sqlQuery, [
				user.username,
				user.email,	
				hashedPassword,
			]); 

			return true;
		} catch (err) {	
			if (err.code === "23505") {
				if (err.detail.includes("(username)=")) {
					throw new ValidationError(
						`Username ${user.username} Already Registered`, 
						"VALIDATION_DUPLICATED_USERNAME"
					);
				} else if (err.detail.includes("(email)=")) {
					throw new ValidationError(
						`Email ${user.email} Already Registered`, 
						"VALIDATION_DUPLICATED_EMAIL"
					);
				}
			}		
		
			throw new AppError("Internal Server Error");
		}
	}

	static async findUserByEmail(email) {
		try {
			const sqlQuery = "SELECT id, email, password FROM Users WHERE email = ?";
			const [rows] = await pool.query(sqlQuery, [email]);
			
			console.log(rows[0]);

			if (!rows[0]) {
				throw new NotFoundError(`Email "${email}" is not registered`);
			}

			return rows[0];
		} catch (err) {	
			throw err; // possible leak of sensitive info
		}
	}

	static async fetchProfileById(id) {
		try {
			const sqlQuery = "SELECT id, username, email, photo, description FROM Users WHERE id = ?";
			const [rows] = await pool.query(sqlQuery, [id]);

			if (!rows[0]) {
				throw new NotFoundError(`ID ${id} does not exist. User does not exist`);
			} 

			return rows[0];
		} catch (err) {
			throw err; // possible leak of sensitive info
		} 
	}

	static async #hashPassword(password) {
		try {
			const hash = await bcrypt.hash(password, 10); // Salt rounds = 10
			return hash;
		} catch (err) {
			throw new AppError("Internal Server Error (HASHING)");
		}
	}
}

module.exports = UsersModel;
