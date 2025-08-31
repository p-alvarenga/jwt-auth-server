const jwt = require("jsonwebtoken");
require("dotenv").config();

const { AuthError } = require("../utils/errors.js");

const authenticateToken = (req, res, next) => {
	const authHeader = req.headers["authorization"];

	try {
		const testToken = authHeader?.split(' ')[1]; 

		if (!authHeader || !testToken)
			throw new AuthError("Token Not Provided", "MISSING_AUTH_TOKEN");

		jwt.verify(testToken, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
			req.token_payload = payload;
			next();
		})
	} catch(err) {
		next(err);
	}
}	

module.exports = authenticateToken;	
