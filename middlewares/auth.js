const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticateToken = (req, res, next) => {
	const authHeader = req.headers["authorization"];
	const test_token = authHeader.split(' ')[1];

	if (!test_token) {
		return res.status(401).json({
			error: {
				message: "Token Not Provided",
				code: "MISSING_AUTH_TOKEN",
			}
		});
	}

	jwt.verify(test_token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
		req.token_payload = payload;
		next();
	});
}	

module.exports = authenticateToken;
